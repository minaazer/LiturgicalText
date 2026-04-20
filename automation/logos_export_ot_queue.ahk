#Requires AutoHotkey v2.0
#SingleInstance Force

CoordMode("Mouse", "Screen")

; Holy Week SAAS export helper for Logos Copy Bible Verses
; 1. Open Logos and keep the Copy Bible Verses panel visible.
; 2. Run this script.
; 3. Press Ctrl+Alt+R with your mouse over the Reference input.
; 4. Press Ctrl+Alt+C with your mouse over the Copy button.
; 5. Press Ctrl+Alt+S to start the OT export queue.
; 6. Press Esc to stop.

queuePath := "D:\AppDev\LiturgicalText\LiturgicalBooks\data\logos\saas_holy_week_ot_queue.tsv"
exportsDir := "D:\AppDev\LiturgicalText\LiturgicalBooks\data\logos\saas_holy_week_exports"
progressPath := "D:\AppDev\LiturgicalText\LiturgicalBooks\data\logos\saas_holy_week_ot_progress.txt"
logosWindowTitle := "Logos Pro"
failureLogPath := "D:\AppDev\LiturgicalText\LiturgicalBooks\data\logos\saas_holy_week_ot_failures.txt"
loadDelayMs := 4500
retryDelayMs := 6500

global gRefX := 0
global gRefY := 0
global gCopyX := 0
global gCopyY := 0
global gStop := false

MsgBox(
    "Logos OT exporter is running.`n`n"
    . "Ctrl+Alt+R = save Reference box position`n"
    . "Ctrl+Alt+C = save Copy button position`n"
    . "Ctrl+Alt+S = start queue`n"
    . "Esc = stop",
    "Logos OT Exporter"
)

Esc:: {
    global gStop := true
    TrayTip("Logos export", "Stop requested", 1)
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
        saved := Trim(FileRead(progressPath, "UTF-8"))
        if RegExMatch(saved, "^\d+$")
            startIndex := Integer(saved)
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
            if FileExist(progressPath)
                FileDelete(progressPath)
            FileAppend(String(index + 1), progressPath, "UTF-8")
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
        if !ClipboardMatchesExpected(text, item.expected_start, item.expected_end) {
            FileAppend(item.reference "`t" item.export_file "`tmismatch`n", failureLogPath, "UTF-8")
            MsgBox("Copied passage did not match expected reading:`n" item.reference)
            return
        }

        FileDelete(exportPath)
        FileAppend(text, exportPath, "UTF-8")
        if FileExist(progressPath)
            FileDelete(progressPath)
        FileAppend(String(index + 1), progressPath, "UTF-8")
        TrayTip("Saved", item.reference " -> " item.export_file, 1)
        Sleep(450)
    }

    MsgBox("Queue finished or stopped.")
}

ParseQueue(text) {
    lines := StrSplit(StrReplace(text, "`r", ""), "`n")
    queue := []
    for index, line in lines {
        line := Trim(line)
        if (line = "" || index = 1)
            continue
        parts := StrSplit(line, "`t")
        if (parts.Length < 3)
            continue
        queue.Push({
            reference: parts[1],
            logos_reference: parts[2],
            export_file: parts[3],
            service: parts.Length >= 4 ? parts[4] : "",
            hour: parts.Length >= 5 ? parts[5] : "",
            section: parts.Length >= 6 ? parts[6] : "",
            expected_start: parts.Length >= 7 ? parts[7] : "",
            expected_end: parts.Length >= 8 ? parts[8] : ""
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
        if RegExMatch(line, "^\d+(?::\d+)?:\s+")
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
    if InStr(text, "# Paste SAAS verses here")
        return false
    return HasValidVerseClipboard(text)
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

ClipboardMatchesExpected(text, expectedStart, expectedEnd) {
    normalized := NormalizeForMatch(text)
    if (expectedStart != "" && !InStr(normalized, expectedStart))
        return false
    if (expectedEnd != "" && !InStr(normalized, expectedEnd))
        return false
    return true
}

NormalizeForMatch(text) {
    text := StrLower(text)
    text := StrReplace(text, "’", "'")
    text := StrReplace(text, "‘", "'")
    text := StrReplace(text, "“", '"')
    text := StrReplace(text, "”", '"')
    text := RegExReplace(text, "[^a-z0-9'\s]+", " ")
    text := RegExReplace(text, "\s+", " ")
    return Trim(text)
}
