#Requires AutoHotkey v2.0
#SingleInstance Force

CoordMode("Mouse", "Screen")

queuePath := "D:\AppDev\LiturgicalText\LiturgicalBooks\data\logos\saas_bible_chapter_queue.tsv"
exportsDir := "D:\AppDev\LiturgicalText\LiturgicalBooks\data\logos\saas_bible_chapter_exports"
progressPath := "D:\AppDev\LiturgicalText\LiturgicalBooks\data\logos\saas_bible_chapter_progress.txt"
failureLogPath := "D:\AppDev\LiturgicalText\LiturgicalBooks\data\logos\saas_bible_chapter_failures.txt"
undercountLogPath := "D:\AppDev\LiturgicalText\LiturgicalBooks\data\logos\saas_bible_chapter_undercounted_books.txt"
lastClipboardPath := "D:\AppDev\LiturgicalText\LiturgicalBooks\data\logos\saas_bible_chapter_last_clipboard.txt"
logosWindowTitle := "Logos Pro"
loadDelayMs := 4500
retryDelayMs := 6500

global gRefX := 0
global gRefY := 0
global gCopyX := 0
global gCopyY := 0
global gStop := false

MsgBox(
    "SAAS Bible chapter exporter is running.`n`n"
    . "Ctrl+Alt+R = save Reference box position`n"
    . "Ctrl+Alt+C = save Copy button position`n"
    . "Ctrl+Alt+S = start queue`n"
    . "Esc = stop",
    "SAAS Bible Chapter Exporter"
)

Esc:: {
    global gStop := true
    TrayTip("SAAS Bible export", "Stop requested", 1)
}

^!r:: {
    global gRefX, gRefY
    MouseGetPos(&gRefX, &gRefY)
    MsgBox("Saved Reference box position: " gRefX ", " gRefY)
}

^!c:: {
    global gCopyX, gCopyY
    MouseGetPos(&gCopyX, &gCopyY)
    MsgBox("Saved Copy button position: " gCopyX ", " gCopyY)
}

^!s:: {
    RunQueue()
}

RunQueue() {
    global gRefX, gRefY, gCopyX, gCopyY, gStop
    if (!gRefX or !gRefY or !gCopyX or !gCopyY) {
        MsgBox("Calibrate first.`nCtrl+Alt+R over Reference box`nCtrl+Alt+C over Copy button")
        return
    }

    gStop := false
    queueText := FileRead(queuePath, "UTF-8")
    queue := ParseQueue(queueText)
    if (queue.Length = 0) {
        MsgBox("Queue is empty: " queuePath)
        return
    }

    startIndex := 1
    if FileExist(progressPath) {
        saved := Trim(StrReplace(FileRead(progressPath, "UTF-8"), Chr(0xFEFF), ""))
        if RegExMatch(saved, "^\d+$", &m)
            startIndex := m[0] + 0
    }

    Loop queue.Length {
        index := A_Index
        if (index < startIndex)
            continue
        if gStop
            break

        item := queue[index]
        exportPath := exportsDir "\" item.export_file

        if HasValidVerseContent(exportPath) {
            UpdateProgress(index + 1)
            continue
        }

        if !WinExist(logosWindowTitle) {
            MsgBox("Could not find Logos window: " logosWindowTitle)
            return
        }

        WinActivate(logosWindowTitle)
        WinWaitActive(logosWindowTitle, , 3)
        Sleep(250)

        MouseClick("left", gRefX, gRefY)
        Sleep(150)
        Send("^a")
        Sleep(100)
        A_Clipboard := item.logos_reference
        ClipWait(1)
        Send("^v")
        Sleep(100)
        Send("{Enter}")
        Sleep(loadDelayMs)

        text := TryCopyPassage()
        if !HasValidVerseClipboard(text)
            text := TryCopyPassage(retryDelayMs)
        if !HasValidVerseClipboard(text)
            text := TryCopyPassage(retryDelayMs)

        if !HasValidVerseClipboard(text) {
            FileAppend(item.reference "`t" item.export_file "`n", failureLogPath, "UTF-8")
            MsgBox("Copy failed or returned non-verse text for:`n" item.reference)
            return
        }

        if IsSameAsLastClipboard(text) {
            FileAppend(item.reference "`t" item.export_file "`tduplicate_previous_clipboard`n", failureLogPath, "UTF-8")
            MsgBox("Copied passage matched the previous clipboard text:`n" item.reference)
            return
        }

        if FileExist(exportPath)
            FileDelete(exportPath)
        FileAppend(text, exportPath, "UTF-8")
        SaveLastClipboard(text)
        UpdateProgress(index + 1)
        TrayTip("Saved", item.reference " -> " item.export_file, 1)

        nextItem := (index < queue.Length) ? queue[index + 1] : ""
        if ShouldProbeNextChapter(item, nextItem) {
            probeReference := item.book_logos_title " " (Integer(item.chapter) + 1)
            probeText := TryProbeReference(probeReference)
            if (probeText != "__INVALID__" && probeText != "" && !IsSameAsText(probeText, text)) {
                FileAppend(item.book_saas_title "`t" probeReference "`tundercounted`n", undercountLogPath, "UTF-8")
            }
        }

        Sleep(450)
    }

    MsgBox("Queue finished or stopped.")
}

UpdateProgress(nextIndex) {
    global progressPath
    if FileExist(progressPath)
        FileDelete(progressPath)
    FileAppend(String(nextIndex), progressPath, "UTF-8")
}

ParseQueue(text) {
    lines := StrSplit(StrReplace(text, "`r", ""), "`n")
    queue := []
    for index, line in lines {
        line := Trim(line)
        if (line = "" || index = 1)
            continue
        parts := StrSplit(line, "`t")
        if (parts.Length < 8)
            continue
        queue.Push({
            book_order: parts[1],
            book_source_title: parts[2],
            book_saas_title: parts[3],
            book_logos_title: parts[4],
            chapter: parts[5],
            reference: parts[6],
            logos_reference: parts[7],
            export_file: parts[8]
        })
    }
    return queue
}

TryCopyPassage(extraDelay := 0) {
    global gCopyX, gCopyY
    A_Clipboard := ""
    Sleep(100)
    if (extraDelay > 0)
        Sleep(extraDelay)
    MouseClick("left", gCopyX, gCopyY)
    if !ClipWait(5)
        return ""
    return ReadClipboardText()
}

TryProbeReference(reference) {
    global gRefX, gRefY, loadDelayMs, retryDelayMs
    MouseClick("left", gRefX, gRefY)
    Sleep(150)
    Send("^a")
    Sleep(100)
    A_Clipboard := reference
    ClipWait(1)
    Send("^v")
    Sleep(100)
    Send("{Enter}")
    Sleep(loadDelayMs)

    text := TryCopyPassage()
    if !HasValidVerseClipboard(text)
        text := TryCopyPassage(retryDelayMs)
    if !HasValidVerseClipboard(text)
        text := TryCopyPassage(retryDelayMs)
    if !HasValidVerseClipboard(text)
        return "__INVALID__"
    return text
}

ShouldProbeNextChapter(item, nextItem) {
    if !IsObject(nextItem)
        return true
    return item.book_saas_title != nextItem.book_saas_title
}

HasValidVerseClipboard(text) {
    if (text = "")
        return false
    lines := []
    for _, line in StrSplit(text, "`n") {
        line := Trim(line)
        if (line != "")
            lines.Push(line)
    }
    if (lines.Length = 0)
        return false
    verseCount := 0
    for _, line in lines {
        if RegExMatch(line, "^(?:\d+:\d+|\d+|[A-Za-z]{1,6}:\d+):\s+")
            verseCount += 1
    }
    return verseCount >= 1 && verseCount = lines.Length
}

HasValidVerseContent(path) {
    if !FileExist(path)
        return false
    text := Trim(FileRead(path, "UTF-8"))
    if (text = "")
        return false
    if InStr(text, "# Paste SAAS chapter text here")
        return false
    return HasValidVerseClipboard(text)
}

IsSameAsLastClipboard(text) {
    global lastClipboardPath
    if !FileExist(lastClipboardPath)
        return false
    previous := Trim(FileRead(lastClipboardPath, "UTF-8"))
    if (previous = "")
        return false
    return NormalizeForCompare(previous) = NormalizeForCompare(text)
}

IsSameAsText(textA, textB) {
    return NormalizeForCompare(textA) = NormalizeForCompare(textB)
}

SaveLastClipboard(text) {
    global lastClipboardPath
    if FileExist(lastClipboardPath)
        FileDelete(lastClipboardPath)
    FileAppend(text, lastClipboardPath, "UTF-8")
}

NormalizeClipboard(text) {
    text := StrReplace(text, "`r`n", "`n")
    text := StrReplace(text, "`r", "`n")
    return Trim(text) "`n"
}

ReadClipboardText() {
    Loop 10 {
        try {
            return NormalizeClipboard(A_Clipboard)
        } catch {
            Sleep(250)
        }
    }
    return ""
}

NormalizeForCompare(text) {
    text := StrReplace(text, "`r`n", "`n")
    text := StrReplace(text, "`r", "`n")
    text := RegExReplace(text, "\s+", " ")
    return Trim(text)
}
