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

## 1️⃣ Clona tu repositorio
    git clone https://github.com/Maxi49/Trivia-tp-computacion.git

## 2️⃣ Accede al directorio del proyecto
    cd client/trivia-client

## 3️⃣ Instala las dependencias
    npm install

## 4️⃣ Inicia la aplicacion
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

