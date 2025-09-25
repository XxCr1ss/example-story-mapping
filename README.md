# User Story Mapping — Demo

Demo de un Story Map estático para una aplicación móvil de compras en línea. Presenta un ejemplo visual (readonly) para stakeholders y presentaciones.

## 🖼️ Vista previa

- Título y subtítulo descriptivo
- Imagen de referencia (`/public/example-storymap.png`)
- Story map representado en HTML/CSS/React (no editable)
- Diseño responsivo y accesible

## 🚀 Instalación y ejecución local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🌐 Despliegue en Vercel

### Opción 1: UI Web
1. Ve a [https://vercel.com/import](https://vercel.com/import)
2. Importa este repositorio desde GitHub o sube el código manualmente.
3. Sigue los pasos de la interfaz (Next.js es detectado automáticamente).
4. Espera a que termine el build y accede a la URL generada.

### Opción 2: CLI
1. Instala Vercel CLI si no la tienes:
   ```bash
   npm i -g vercel
   ```
2. Ejecuta:
   ```bash
   vercel
   ```
3. Sigue las instrucciones interactivas.

## 📁 Estructura de archivos

```
example-story-mapping/
├── components/
│   └── StoryMap.jsx
├── pages/
│   └── _app.js
│   └── index.js
├── public/
│   └── example-storymap.png
├── styles/
│   └── globals.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md
```

## ✅ Checklist de aceptación
- [ ] La app corre localmente con `npm run dev` sin errores.
- [ ] Se muestra el título, subtítulo, la imagen de referencia y el story map estático.
- [ ] El story map es responsivo y accesible (tab-navegable, roles ARIA, contraste adecuado).
- [ ] El diseño es atractivo, con tarjetas elevadas y microinteracciones.
- [ ] El README explica cómo desplegar en Vercel (UI y CLI).
- [ ] El meta tag `og:image` usa `/public/example-storymap.png`.
