# Replace favicon with the uploaded circular VR logo

1. Take the uploaded image (`user-uploads://Screenshot_2026-08-25_at_10.11.30_pm.png`) and create a square 64×64 PNG favicon from it, cropping/padding to preserve the circular VR mark.
2. Overwrite `public/favicon.png` with the new square version.
3. Keep `src/routes/__root.tsx` pointing to `/favicon.png` (already configured).
4. Verify the build passes after the swap.
