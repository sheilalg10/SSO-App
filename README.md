# Google SSO App - Login con Google (React + Express)

Aplicacion web con autenticación **SSO (Single Sing-On)** usando **Google OAuth 2.0**.

---

## 🛠️ Tecnologías utilizadas

- 🧠 **Backend:** Express.js + Passport.js (passport-google-oauth20)
- 💻 **Frontend:** React (con Vite)
- 🍪 **Persistencia:** Cookies (con express-session)
- 🐳  **Contenedores**: Docker + Docker Compose
- 🔐 **Autenticación**: Google OAuth2

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
- Acceso a [Google Cloud Console](https://console.cloud.google.com) y configurado
- Docker + Docker Compose

---

## ⚙️ Configuración inicial

### 1. Crear proyecto en Google Cloud

1. Ve a [Google Cloud Console](https://console.cloud.google.com)
2. Crea un nuevo proyecto
3. Habilita **Google Identity Services (OAuth2)**
4. En **Credenciales**, crea un **ID de cliente de OAuth 2.0**
   - **Tipo de aplicación:** Aplicación Web
   - **Orígenes autorizados de JavaScript:**
     ```
     http://localhost:9778
     ```
   - **URI de redirección autorizada:**
     ```
     http://localhost:3001/auth/google/callback
     ```
5. Copia el `CLIENT_ID` y `CLIENT_SECRET`

---

## 🚀 Instalación y ejecución de la aplicación con Docker

### 1. Clonar repositorio

```bash
git clone https://github.com/sheilalg10/SSO-App.git
cd SSO-App
```

### 2. Configurar variables de entorno

Crear un archivo **.env** en la raiz del proyecto:

```env
CLIENT_ID=TU_CLIENT_ID
CLIENT_SECRET=TU_CLIENT_SECRET
SESSION_SECRET=una_clave_secreta_segura
```

### 3. Ejecutar aplicación
Antes de ejecutar la aplicación si la aplicación se ejecuta en **Windows** o **Mac** hay que instalar instala [Docker Desktop](https://www.docker.com/products/docker-desktop/). Si se hace desde **Linux** no hace falta la instalación.

Una vez instalado **Docker Destop**, lo abriremos y esperaremos a que se inicie.

Ahora desde la raiz del proyecto:

```bash
docker compose up --build
```

Esto hará:

- **Backend (Express)** en: http://localhost:3001
- **Frontend (React)** en: http://localhost:9778

---

## 🚀 Instalación y ejecución de la aplicación sin Docker (desarrollo local)

```bash
git clone https://github.com/sheilalg10/SSO-App.git
cd SSO-App
```

### 2. Configurar variables de entorno

Crear un archivo **.env** en la carpeta **server** del proyecto:

```env
CLIENT_ID=TU_CLIENT_ID
CLIENT_SECRET=TU_CLIENT_SECRET
SESSION_SECRET=una_clave_secreta_segura
```

### 3. Ejecutar aplicación

- **Backend**

```bash
cd server
npm install
npm start
```

- **Frontend**

```bash
cd client
npm install
npm run dev
```

---

## 🧪 Flujo de uso

1. Accede a http://localhost:9778
2. Pulsa **Iniciar sesión con Google**
3. Serás redirigido a Google para autenticarte
4. Una vez autenticado, volverás al frontend y verás tu nombre

---

## 🔐 Flujo de autenticación

1. El usuario hace clic en el botón de **"Iniciar sesión con Google"**.
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

✍️ **Autor:** [Sheila Lara García](https://github.com/sheilalg10)
