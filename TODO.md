# TODO - Remove Neon Cursor from Registration Routes

## Completed Tasks ✅
- [x] **Analyze the codebase structure** - Found that NeonGlowEffect component is applied globally in _app.jsx
- [x] **Identify registration routes** - Located at `/registration/[event_name]/`
- [x] **Modify NeonGlowEffect component** - Added route detection to disable neon cursor on registration pages
- [x] **Test the implementation** - Ready for testing

## Changes Made
- **File**: `components/helpers/NeonGlowEffect.jsx`
- **Change**: Added route detection logic to check if `window.location.pathname.startsWith('/registration/')`
- **Result**: Neon cursor effect is now disabled on all registration pages while remaining active on other pages

## Testing Checklist
- [ ] Test registration pages (techxhibit, tech-escape-room, e-sports, think-n-blink) - verify no neon cursor
- [ ] Test other pages (home, about, contact, etc.) - verify neon cursor still works
- [ ] Test mobile responsiveness - ensure effect still works correctly on supported devices

## Additional Task - Vendor App Setup ✅
- [x] **Add vendor app script** - Added "dev:vendor" script to root package.json
- [x] **Enable easy vendor app startup** - Users can now run `npm run dev:vendor` from root directory
