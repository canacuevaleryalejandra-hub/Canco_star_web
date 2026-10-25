# Canco Star

Sitio web de **Canco Star**, café de especialidad de la familia Canacue-Collazos, en Acevedo, Huila (Colombia).

## Estructura

```
prueba-proyecto/
├── frontend/   La página web (React + Vite). Es lo que se publica en Vercel.
├── backend/    La API (PHP con Leaf) y lo relacionado con la base de datos MySQL "canco".
├── vercel.json Le dice a Vercel que instale y compile desde frontend/.
└── CLAUDE.md   Guía técnica del proyecto.
```

## Frontend (la página)

```bash
cd frontend
npm install      # solo la primera vez, o cuando cambien las dependencias
npm run dev      # abre la página en http://localhost:5173
npm run build    # versión final, en frontend/dist
npm run lint     # revisa el código
```

## Backend (la API)

Necesita PHP 8.1+, Composer y MySQL (por ejemplo, con XAMPP).

```bash
cd backend
composer install            # solo la primera vez: descarga las librerías en vendor/
cp .env.example .env        # solo la primera vez: configuración local (no se sube a GitHub)
php leaf serve              # inicia la API
```

- Rutas actuales: `GET /api/users` y `POST /api/users` (en `backend/app/routes/index.php`).
- `GET /api/users` no devuelve las contraseñas, y `POST /api/users` las guarda encriptadas.
- **Pendiente:** aplicar `backend/database/2026-10-25-contrasena-255.sql` en phpMyAdmin, para que la
  columna de contraseñas tenga espacio para la versión encriptada.

## Publicación

El sitio se publica en Vercel desde este repositorio. `vercel.json`, en la raíz, indica que se instale y
compile dentro de `frontend/` y que se publique `frontend/dist`. La API no se publica en Vercel: necesita
un hosting con PHP y MySQL.
