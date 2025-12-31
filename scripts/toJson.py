
import json
import re
import sys
from pathlib import Path
try:
    from bs4 import BeautifulSoup
except ModuleNotFoundError:
    sys.stderr.write(
        "Missing dependency: beautifulsoup4 is required. "
        "Install it with `pip install beautifulsoup4` and rerun the script.\n"
    )
    sys.exit(1)

def clean_text(text):
    """Clean text by removing extra newlines, tabs, and excessive whitespace."""
    if not text:
        return ""
    # Replace multiple newlines, tabs, and excessive spaces with a single space
    cleaned = re.sub(r'\s+', ' ', text.strip())
    return cleaned

def parse_glorification_ts(file_path):
    # Read the entire .ts file content
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract all HTML strings using regex (multiline backticks).
    # Some .ts files hold several functions, each with its own `const html =`.
    html_blocks = re.findall(r'const html = `(.*?)`;', content, re.DOTALL)

    # If nothing matched, fall back to any template literal that contains a table.
    # This covers files that `return` a template literal without assigning to const html.
    if not html_blocks:
        html_blocks = [
            m.group(1)
            for m in re.finditer(r'`([\s\S]*?<table[\s\S]*?)`', content)
        ]

    if not html_blocks:
        raise ValueError("Could not find any HTML strings in the .ts file.")

    # List to hold the JSON objects (similar to songs.json)
    glorifications = []

    for html_content in html_blocks:
        # Parse the HTML with BeautifulSoup
        soup = BeautifulSoup(html_content, 'html.parser')
        
        # Find all <table> elements
        tables = soup.find_all('table')
        
        for table in tables:
            # Get the title attribute (if present)
            table_title = clean_text(table.get('title', ''))
            table_class = ' '.join(table.get('class', []))
            
            # Get the caption
            caption = table.find('caption')
            english_title = ''
            coptic_title = ''
            arabic_title = ''
            caption_class = ''
            explanation_button = ''
            image_button = ''
            display_style = ''
            
            if caption:
                # English title is the first text node in caption
                if caption.contents and isinstance(caption.contents[0], str):
                    english_title = clean_text(caption.contents[0])
                
                # Coptic caption
                coptic_span = caption.find('span', class_='coptic-caption')
                if coptic_span:
                    coptic_title = clean_text(coptic_span.text)
                
                # Arabic caption
                arabic_span = caption.find('span', class_='arabic-caption')
                if arabic_span:
                    arabic_title = clean_text(arabic_span.text)

                # Optional explanation button message
                explanation_span = caption.find('span', class_='explanation-button')
                if explanation_span:
                    msg = explanation_span.get('data-message', '') or explanation_span.text
                    explanation_button = clean_text(msg)
                # Optional image button message
                image_span = caption.find('span', class_='image-button')
                if image_span:
                    msg = image_span.get('data-message', '') or image_span.text
                    image_button = clean_text(msg)
                    
                # Caption display style
                style_attr = caption.get('style', '')
                if re.search(r'display\s*:\s*none', style_attr, re.IGNORECASE):
                    display_style = 'none'
                
                # Caption class list
                caption_class = ' '.join(caption.get('class', []))
            
            # If no caption, use table title as english_title
            if not english_title and table_title:
                english_title = table_title
            
            # Themes: empty array (as in songs.json, but no themes here)
            themes = []
            
            # Find all <tbody> in the table. If none, treat direct <tr> children as a tbody.
            tbodies = table.find_all('tbody')
            if not tbodies:
                tbodies = [table]
            tbodies_list = []
            
            for tbody in tbodies:
                rows = []
                # If tbody is actually the table (no tbody tags), only look at direct child trs.
                if tbody.name == 'table':
                    tr_list = tbody.find_all('tr', recursive=False)
                else:
                    tr_list = tbody.find_all('tr')

                for tr in tr_list:
                    row_class = tr.get('class', [''])[0]  # Get the row class (e.g., 'north', 'south')
                    
                    cells = []
                    for td in tr.find_all('td'):
                        # Get the first class of the <td> element dynamically
                        lang = td.get('class', [''])[0]
                        if not lang:  # Skip if no class is present
                            continue
                        text = clean_text(td.text)
                        
                        # Use the class name directly as the key
                        cell_dict = {lang: text}

                        # Capture optional explanation button message inside the cell.
                        exp_span = td.find('span', class_='explanation-button')
                        if exp_span:
                            msg = exp_span.get('data-message', '').strip()
                            if msg:
                                cell_dict["explanation-button"] = msg

                        # Capture optional image button message inside the cell.
                        img_span = td.find('span', class_='image-button')
                        if img_span:
                            img_msg = (img_span.get('data-message', '') or img_span.text).strip()
                            if img_msg:
                                cell_dict["image-button"] = img_msg

                        cells.append(cell_dict)
                    
                    row_obj = {"row-class": row_class}
                    # Optional navigation data on row (placed before cells)
                    data_nav = tr.get('data-navigation')
                    if data_nav:
                        try:
                            nav_obj = json.loads(data_nav)
                            # Only keep destination/source if present
                            nav_filtered = {}
                            if isinstance(nav_obj, dict):
                                if "destination" in nav_obj:
                                    nav_filtered["destination"] = nav_obj["destination"]
                                if "source" in nav_obj:
                                    nav_filtered["source"] = nav_obj["source"]
                            if nav_filtered:
                                row_obj["data-navigation"] = nav_filtered
                        except json.JSONDecodeError:
                            pass
                    # Cells come after navigation info
                    row_obj["cells"] = cells
                    
                    # Add row even if empty (like separators in HTML)
                    rows.append(row_obj)
                
                tbodies_list.append({"rows": rows})
            
            # Create the object similar to songs.json
            # Build object with explanation-button before themes (if present)
            glorification_obj = {
                "english_title": english_title,
                "coptic_title": coptic_title,  # Always include, even if empty
                "arabic_title": arabic_title,  # Always include, even if empty
            }
            if table_class:
                glorification_obj["table_class"] = table_class
            if display_style:
                glorification_obj["caption_display"] = display_style
            if caption_class:
                glorification_obj["caption_class"] = caption_class
            if explanation_button:
                glorification_obj["explanation_button"] = explanation_button
            if image_button:
                glorification_obj["image_button"] = image_button
            glorification_obj.update({
                "themes": themes,
                "tbodies": tbodies_list
            })
            
            glorifications.append(glorification_obj)
    
    return glorifications

# Usage example
if __name__ == "__main__":
    input_path = input("Enter the path of the .ts file to convert: ").strip()
    if not input_path:
        print("Error: No input file provided.")
        sys.exit(1)

    ts_path = Path(input_path).expanduser().resolve()
    if not ts_path.exists() or not ts_path.is_file():
        print(f"Error: File not found -> {ts_path}")
        sys.exit(1)

    output_file = ts_path.with_suffix(".json")
    try:
        result = parse_glorification_ts(str(ts_path))
        
        # Output to JSON file
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        
        print(f"JSON file '{output_file}' created successfully.")
    except Exception as e:
        print(f"Error: {e}")
