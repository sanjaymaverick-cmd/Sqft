# Vedam Granites — Sq Ft Calculator

Live: https://sanjaymaverick-cmd.github.io/Sqft/

Scan handwritten or printed granite measurement sheets in **inches or feet**, then get a running **total in square feet**.

## How area is calculated

- Inches: `(Length × Width) / 144`
- Feet: `Length × Width`
- Feet+inches on the sheet (`6'6" x 3'2"`) are converted to inches first
- Qty multiplies the row area

## Use on the floor

1. Open the live page on a phone or desktop
2. Choose **Auto**, **Force inches**, or **Force feet** for new rows
3. Photograph the sheet straight-on and tap **Scan images**
4. Correct any missed L / W / unit in the table (or tap **Add row**)
5. Export a PDF measurement sheet

Auto treats numbers **24 and above** as inches and **16 and below** as feet. A `12 x 12` tile is ambiguous — switch the row unit to `in` or set the sheet mode to Force inches before scanning.

## Repo

Single-page app: `index.html` (Tesseract.js OCR + jsPDF). No server.
