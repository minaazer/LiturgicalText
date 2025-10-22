
import json
import re
from bs4 import BeautifulSoup

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

    # Extract the HTML string using regex (multiline backticks)
    match = re.search(r'const html = `(.*?)`;', content, re.DOTALL)
    if not match:
        raise ValueError("Could not find the HTML string in the .ts file.")
    
    html_content = match.group(1)
    
    # Parse the HTML with BeautifulSoup
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # Find all <table> elements
    tables = soup.find_all('table')
    
    # List to hold the JSON objects (similar to songs.json)
    glorifications = []
    
    for table in tables:
        # Get the title attribute (if present)
        table_title = clean_text(table.get('title', ''))
        
        # Get the caption
        caption = table.find('caption')
        english_title = ''
        coptic_title = ''
        arabic_title = ''
        
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
        
        # If no caption, use table title as english_title
        if not english_title and table_title:
            english_title = table_title
        
        # Themes: empty array (as in songs.json, but no themes here)
        themes = []
        
        # Find all <tbody> in the table
        tbodies = table.find_all('tbody')
        tbodies_list = []
        
        for tbody in tbodies:
            rows = []
            for tr in tbody.find_all('tr'):
                row_class = tr.get('class', [''])[0]  # Get the row class (e.g., 'north', 'south')
                
                cells = []
                cell_dict = {}
                
                for td in tr.find_all('td'):
                    # Get the first class of the <td> element dynamically
                    lang = td.get('class', [''])[0]
                    if not lang:  # Skip if no class is present
                        continue
                    text = clean_text(td.text)
                    
                    # Use the class name directly as the key
                    cell_dict[lang] = text
                
                if cell_dict:
                    cells.append(cell_dict)
                
                # Add row even if empty (like separators in HTML)
                rows.append({
                    "row-class": row_class,
                    "cells": cells
                })
            
            tbodies_list.append({"rows": rows})
        
        # Create the object similar to songs.json
        glorification_obj = {
            "english_title": english_title,
            "coptic_title": coptic_title,  # Always include, even if empty
            "arabic_title": arabic_title,  # Always include, even if empty
            "themes": themes,
            "tbodies": tbodies_list
        }
        
        glorifications.append(glorification_obj)
    
    return glorifications

# Usage example
if __name__ == "__main__":
    file_path = "glorification.ts"  # Replace with the actual path to glorification.ts
    try:
        result = parse_glorification_ts(file_path)
        
        # Output to JSON file
        output_file = "glorifications.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(result, f, ensure_ascii=False, indent=2)
        
        print(f"JSON file '{output_file}' created successfully.")
    except Exception as e:
        print(f"Error: {e}")
