# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

# El Quizito

## Descripción
**El Quizito** es un quizz interactivo que te desafía con una variedad de preguntas. Se conecta a la API de [OpenTriviaDB](https://opentdb.com) para obtener contenido dinámico y actualizado, convirtiéndolo en una experiencia única para cada usuario.  
Este proyecto es un trabajo práctico para la materia de Laboratorio de Computación.

## Requisitos
- Todas las dependencias están especificadas en el archivo `package.json`.
- Para instalar todo, simplemente ejecutá un `npm install` dentro de la carpeta **trivia-client**.  
  *No es necesario instalar nada adicional.*

# 🎮 El Quizito - ¡Demuestra tu conocimiento! 🌟

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-purple.svg)](https://vitejs.dev/)
[![OpenTriviaDB](https://img.shields.io/badge/API-OpenTriviaDB-success.svg)](https://opentdb.com/)

¡Bienvenido/a a **El Quizito**! Un trivia interactiva con preguntas dinámicas que desafiarán tu conocimiento. ¡Perfecto para aprender y divertirse!

<div align="center">
  <img src="https://media.giphy.com/media/l0MYEqEzwMWFCg8rm/giphy.gif" width="400" alt="Demo Quiz">
</div>

## ✨ Características
- 🎯 Preguntas aleatorias de múltiples categorías
- 🌐 Conexión a la API de OpenTriviaDB
- 📊 Resultados detallados al finalizar
- ⚙️ Configuración de dificultad y categoría
- 🎨 Interfaz intuitiva y responsive

## 📦 Requisitos
- Node.js >= 16.0.0
- NPM >= 7.0.0

```bash
node --version
# Verifica tu versión de Node

## 1️⃣ Clona tu repositorio
git clone https://github.com/tu-usuario/el-quizito.git

## 2️⃣ Accede al directorio del proyecto
cd client/trivia-client

## 3️⃣ Instala las dependencias
npm install

##m 4️⃣ Inicia la aplicacion
npm run dev

| 💡 Tip: La aplicación se abrirá automáticamente en http://localhost:5173

📦 client/trivia-client
┣ 📂 src
┃ ┣ 📂 api         # Conexión con la API
┃ ┣ 📂 components  # Componentes reutilizables
┃ ┣ 📂 context     # Gestión de estado global
┃ ┣ 📂 routes      # Configuración de rutas
┃ ┗ 📂 utils       # Funciones auxiliares
┣ 📜 .gitignore
┣ 📜 index.html
┣ 📜 package.json
┗ 📜 vite.config.js