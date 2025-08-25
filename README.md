# 🏀 Proyecto React - Autenticación con FakeStoreAPI

## 📌 Nombre del proyecto
Kobe Store - Simulación de autenticación y registro de usuarios

---

## 🎯 Objetivo general
Desarrollar una aplicación web en **React** que permita simular el registro e inicio de sesión de usuarios utilizando la **FakeStoreAPI**, implementando un flujo básico de autenticación y navegación.

---

## 👨‍💻 Tecnologías utilizadas

## React 18 + Vite

## React Router DOM

## Context API (useContext, useState)

## CSS personalizado

## FakeStoreAPI

## ⚙️ Funcionalidades implementadas
- 📄 **Registro de usuarios** (con FakeStoreAPI `/users`)
- 🔑 **Inicio de sesión** (con FakeStoreAPI `/auth/login`)
- 🚪 **Cerrar sesión** (logout con `setUser(null)`)
- 🔄 **Redirección entre pantallas** (`/login`, `/register`, `/home`)
- 🎨 **Diseño estilizado** con CSS personalizado
- 🧩 **Context API** para manejo global de la sesión (`UserContext`)

---

## 📝 Notas importantes
-🔑 **Para probar el login real en FakeStoreAPI, se deben usar credenciales ya existentes en la API. Por ejemplo:** {
  "username": "mor_2314",
  "password": "83r5^_"
}

## 👤 Los usuarios creados en /users mediante el formulario de registro no pueden loguearse en el endpoint /auth/login, ya que la API no persiste los datos como un backend real.
**Sin embargo, en este proyecto, simulamos el inicio de sesión automático con:** (setUser(true))

## 🚀 Instrucciones para ejecutar localmente

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/23hr03/Kobe-s-legacy.git
   cd kobe-store

## 📌 Conclusión
## Este proyecto permite comprender cómo funcionan los flujos básicos de autenticación en aplicaciones web modernas, simulando un backend real a través de FakeStoreAPI.
## Además, implementa un patrón de manejo global de estado con React Context, navegación entre pantallas, validación de formularios y conexión a APIs externas.
