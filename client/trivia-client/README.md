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

# Trabajo practico computacion - Aplicacion de Trivia

# 🎮 El Quizito - ¡Demuestra tu conocimiento! 🌟

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

##  Instalacion

```bash
node --version
# Verifica tu versión de Node

## 1️⃣ Clona el repositorio
    git clone https://github.com/Maxi49/Trivia-tp-computacion.git

## 2️⃣ Accede al directorio del proyecto
    cd client
    cd trivia-client

## 3️⃣ Instala las dependencias
    npm install

## 4️⃣ Crea la carpeta Dist
    npm run build

## 5️⃣ Inicializa el proyecto en preview
    npm run preview

| 💡 Tip: La aplicación se abrirá automáticamente en http://localhost:4173/

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
```

## 🛠️ Tecnologías Utilizadas

<div align="center">
  <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; margin: 24px 0;">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite">
    <img src="https://img.shields.io/badge/CSS_Modules-000000?style=for-the-badge&logo=css3&logoColor=white" alt="CSS Modules">
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios">
    <img src="https://img.shields.io/badge/OpenTrivia_API-009688?style=for-the-badge&logo=api&logoColor=white" alt="OpenTrivia API">
  </div>
</div>

**Stack completo**:
- **Frontend**: React 18 + TypeScript
- **Bundler**: Vite (ultrarrápido ⚡)
- **Estilos**: CSS Modules para componentes encapsulados
- **Gestión de estado**: React Context API
- **HTTP Client**: Axios para llamadas a la API
- **Enrutamiento**: React Router DOM v6
- **Tipado fuerte**: TypeScript para mejor mantenibilidad

## 🫂 Leer contribuidores
