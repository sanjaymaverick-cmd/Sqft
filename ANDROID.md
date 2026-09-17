# Vedam SqFt — Android app

Native wrapper around the same measurement calculator:

- Scan handwritten sheets (inches or feet)
- `"` / `do` / OCR `11` = ditto (same as row above)
- Export PDF to phone Downloads

Package: `com.vedamgranites.sqft`
Min Android: 8.0 (API 26)

## Build an APK (Android Studio)

1. Install [Android Studio](https://developer.android.com/studio)
2. File → Open → the `android` folder in this repo
3. Let Gradle sync
4. Connect a phone with USB debugging, or use an emulator
5. Run ▶
6. To share the installer: **Build → Generate Signed App Bundle or APK → APK**

First scan needs internet (Tesseract OCR + PDF libraries load from CDN). After that, the screen itself is local.

## Use on the floor

1. Tap **Scan images**
2. Choose Camera or Gallery (multiple photos allowed)
3. Correct any missed L / W / unit
4. **Export PDF** → saved in Downloads
