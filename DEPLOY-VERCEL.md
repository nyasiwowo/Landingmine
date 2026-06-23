# Desplegar en Vercel

Esta landing es **100% estática** (no usa base de datos ni servidor propio).
El formulario de contacto funciona con Web3Forms (servicio externo, sin backend).

## Pasos

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importa el repo.
3. Vercel detecta automáticamente la configuración desde `vercel.json`:
   - **Build Command:** `bun run build:web`
   - **Output Directory:** `packages/web/dist`
   - **Install Command:** `bun install`
4. Agrega la variable de entorno (Project Settings → Environment Variables):
   - `VITE_WEB3FORMS_KEY` = tu llave de https://web3forms.com (gratis)
5. **Deploy**. Listo.

> El `vercel.json` ya incluye los *rewrites* para que `/terminos` y `/privacidad`
> funcionen al recargar la página (SPA routing) y cache agresivo para `/assets`.

## Build local (probar antes de subir)

```bash
bun install
bun run build:web      # genera packages/web/dist/
```

## Notas de optimización aplicadas

- Imágenes del sitio comprimidas (~12 MB → ~2.6 MB) sin pérdida visible.
- `og-image` redimensionada a 1200×630 y convertida a JPG (6.5 MB → 254 KB).
- Eliminado código del cliente API (Hono) que no se usaba.
- Metadatos SEO/Open Graph en español agregados en `index.html`.
- Bundle final: ~3.4 MB (antes ~13 MB).
