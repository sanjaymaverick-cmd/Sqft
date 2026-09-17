# Vedam SqFt — Android app

Native wrapper around the same measurement calculator:

- Scan handwritten sheets (inches or feet)
- `"` / `do` / OCR `11` = ditto (same as row above)
- Export PDF to phone Downloads

Package: `com.vedamgranites.sqft`
Min Android: 8.0 (API 26)

## Download APK from GitHub Actions

1. Open [Actions → Build APK](https://github.com/sanjaymaverick-cmd/Sqft/actions/workflows/android.yml)
2. Click **Run workflow** (or wait for the latest green run on `main`)
3. Open the finished run → **VedamSqFt-debug** artifact → download the zip
4. Unzip `app-debug.apk` and install on the phone (allow Unknown sources)

The workflow copies root `index.html` into `android/app/src/main/assets/` then runs `gradle assembleDebug`.

## Build locally (Android Studio)

1. Install [Android Studio](https://developer.android.com/studio)
2. File → Open → the `android` folder in this repo
3. Copy root `index.html` into `android/app/src/main/assets/index.html`
4. Run ▶ or **Build → Generate Signed App Bundle or APK**

First scan needs internet (Tesseract OCR + PDF libraries load from CDN).

## Use on the floor

1. Tap **Scan images**
2. Choose Camera or Gallery (multiple photos allowed)
3. Correct any missed L / W / unit
4. **Export PDF** → saved in Downloads
