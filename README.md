# Google SSO App - Login con Google

Aplicacion web con autenticación **SSO (Single Sing-On)** usando **Google OAuth 2.0**.

---

## 🛠️ Tecnologías utilizadas

- 🧠 Backend: Express.js + Passport.js (passport-google-oauth20)
- 💻 Frontend: React (con Vite)
- 🍪 Persistencia: Cookies (con express-session)
- 🐳 Dockerizado con Docker Compose
- 🌐 SSO con Google OAuth2

---

## 📁 Estructura del proyecto
```sh
ProdigiosoVolcan-sso-app/
├── 📁 server/
│   ├── Dockerfile
│   ├── index.js
│   └── auth.js
├── 📁 client/
│   ├── Dockerfile
│   ├── vite.config.js
│   ├── index.html
│   └── 📁 src/
│       ├── App.jsx
│       └── main.jsx
├── docker-compose.yml
└── .env
```
---

## 🚀 Requisitos

- Node.js instalado (v18+ recomendado)
- Cuenta de Google
- Acceso a [Google Cloud Console](https://console.cloud.google.com)
- Docker + Docker Compose

---

## ⚙️ Configuración inicial

### 1. Crear proyecto en Google Cloud

1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Crea un nuevo proyecto
3. Habilita **Google Identity Services**
4. En **Credenciales**, crea un **ID de cliente de OAuth 2.0**
   - Tipo de aplicación: Aplicación Web
   - Origenes autorizados de JavaScript
     ```
     http://localhost:9778
     ```
   - URI de redirección autorizada:
     ```
     http://localhost:3001/auth/google/callback
     ```
5. Copia el `CLIENT_ID` y `CLIENT_SECRET`

### 2. Clonar el repositorio

```bash
git clone https://github.com/sheilalg10/SSO-App.git
cd SSO-App
```

### 3. Configurar el backend

```bash
cd server
npm install
```

### 4. Configurar el frontend

```bash
cd client
npm install
```

## 🔐 Configura las variables de entorno
Crear un archivo **.env** en la raiz del proyecto:

```env
CLIENT_ID=TU_CLIENT_ID
CLIENT_SECRET=TU_CLIENT_SECRET
SESSION_SECRET=una_clave_secreta_segura
```

---

## 🚀 Ejecutar la aplicación

Desde la raiz del proyecto:

```bash
docker compose up --build
```

## 🔐 Flujo de autenticación

1. El usuario hace clic en el botón de **"Iniciar sesión"**.
2. Se redirige a Google para autorizar el acceso.
3. Google responde al backend con el token y perfil.
4. El backend guarda la sesión y redirige al frontend.
5. El frontend consulta **api/user/** para obtener el nombre del usuario.

---

## 📦 Endpoints del backend
| Método | Ruta                    | Descripción                           |
| ------ | ----------------------- | ------------------------------------- |
| GET    | `/auth/google`          | Inicia el login con Google            |
| GET    | `/auth/google/callback` | Ruta de callback después del login    |
| GET    | `/api/user`             | Devuelve info del usuario autenticado |

---

## 🧠 Tecnologías utilizadas
- Node.js
- Express
- Passport.js
- Google OAuth2
- React
- Vite
- dotenv
- express-session
- cors

---
✍️ **Autor:** [Sheila Lara García](https://github.com/sheilalg10)
