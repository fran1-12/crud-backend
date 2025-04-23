# CRUD Fullstack (React + Node.js)

Aplicación fullstack sencilla que permite realizar operaciones CRUD sobre una lista de productos utilizando React para el frontend y Node.js con Express para el backend.

---

## Tecnologías utilizadas
- Backend: Node.js, Express, UUID, CORS
- Frontend: React, Axios
- Persistencia de datos: Archivo JSON

---

## Instalación y ejecución

### 1. Clonar el repositorio
```bash
git x poner
cd proyecto-crud
```

### 2. Backend - Node.js + Express

#### Ir a la carpeta del backend
```bash
cd BACKEND
```

#### Instalar dependencias
```bash
npm install
```

####  Crear el archivo `data.json`
```bash
mkdir data
echo [] > data/data.json
```

> El archivo debe contener al menos:
```json
[]
```

#### Iniciar el servidor
```bash
node server.js
```

---

### 3. Frontend - React

####  Ir a la carpeta del frontend
```bash
cd ../frontend
```

####  Instalar dependencias
```bash
npm install
```

####  Iniciar la aplicación
```bash
npm start
```

---

### 4. Acceder a la aplicación

- Frontend (React): `http://localhost:3000`
- Backend (API REST): `http://localhost:3001/api/products`

---

### 5. Endpoints para pruebas con Postman

- `GET /api/products` → Lista todos los productos
- `GET /api/products/:id` → Obtener un producto por ID
- `POST /api/products` → Crear un nuevo producto
  - Body ejemplo:
```json
{
  "name": "Zapato deportivo"
}
```
- `PUT /api/products/:id` → Actualizar producto existente
- `DELETE /api/products/:id` → Eliminar producto

---
