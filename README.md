# Ecommerce

# 🛍️ A&N E-commerce

**A&N E-commerce** es una tienda online moderna enfocada en ofrecer productos esenciales de moda y estilo de vida, creado por Angel Aquino y Nicole Tineo. El sitio está diseñado para ofrecer una experiencia rápida, segura y visualmente atractiva para los usuarios.

---

## 🚀 Tech Stack

- ⚛️ **React** – Framework principal del frontend
- 📘 **TypeScript** – Tipado estático para mayor robustez
- 🌊 **Supabase** – Backend-as-a-Service para autenticación y base de datos
- 🌐 **Netlify** – Hosting y funciones serverless
- 🎨 **TailwindCSS** – Estilos modernos y responsivos
- 🧠 **Tankstack Query** – Manejo de estado global
- ✅ **Zod** – Validación de formularios y datos
- **Framer Motion** – Animaciones y transiciones fluidas 

---

## ✨ Funcionalidades

- 🛒 Carrito de compras funcional
- 📈 Panel de administración con la flexibilidad de Crear, eliminar, actualizar y ver productos y usuarios
- 🧑‍💼 Gestión de productos y órdenes desde el panel admin
- 🗺️ Interfaz de usuario intuitiva y fácil de usar
- 📱 Responsive y optimizado para móviles
- 🔐 Registro e inicio de sesión con autenticación segura vía Supabase
- Opción de filtrado de productos por marcas y un buscador de productos por nombre.
- Utilice la API de EmailJS para enviar correos electrónicos

---

## 📸 Capturas de pantalla de toda la tienda

1. HomePage de la pagina principal de la tienda

![Home Page](</Ecommerce/public/screenshot/Home.png>)

2. Carrito de compras

![Carrito de compras](</Ecommerce/public/screenshot/Carrito.png>)

3. About de la pagina de la tienda

![About de la tienda](</Ecommerce/public/screenshot/AboutPage.png>)

4. Contacto de la pagina de la tienda

En esta parte tenemos lo que es el sección de contacto de la tienda donde se puede enviar un mensaje al correo electrónico de la tienda.

![Contacto de la tienda](</Ecommerce/public/screenshot/ContactUs.png>)

5. Sección de productos de la tienda y filtrado por marca y buscador de productos por nombre.

![Pagina de productos](</Ecommerce/public/screenshot/ShopAll.png>)

![contenedor de filtros](</Ecommerce/public/screenshot/FilterContainer.png>)

![Buscador de productos por nombre](</Ecommerce/public/screenshot/BuscadorDeProductos.png>)

6. Sección en la que el usuario puede ver sus compras y detalle de la compra.

![Tabla de ordenes](</Ecommerce/public/screenshot/UsuariosOrdenes.png>)

![Ordenes detalladas](</Ecommerce/public/screenshot/PaginaDeOrdenDetallada.png>)

7. Registro de usuario

![Registro de la tienda](</Ecommerce/public/screenshot/PaginaDeRegistro.png>)

8. Login de usuario

![Login de la tienda](</Ecommerce/public/screenshot/InicioDeSesion.png>)

9. Sección de productos de confirmación de pago de la tienda

![Pagina de confirmación de pago](</Ecommerce/public/screenshot/SeccionDePago.png>)

10. Sección del slug de cada producto individual de la tienda

![Pagina de productos individual](</Ecommerce/public/screenshot/ProductoIndividual.png>)

---

## 🧑‍💻 Cómo usarlo 

1. Para usar el proyecto debe crear sus propias variables de entorno en  `/.env` con el siguiente formato: 

VITE_PROJECT_URL_SUPABASE = https://ytqtfazibwbtggqvxxxxxxxxx.supabase.co

VITE_SUPABASE_API_KEY = eyJhbGciOiJIUzIxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

2. También debe crear una base de datos en supabase y configurar las tablas en la base de datos con los nombres y tipos de datos correctos.