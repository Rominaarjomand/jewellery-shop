# 💎 Roma Jewellery Shop

## 📌 Project Overview

**Roma Jewellery Shop** is a React-based jewellery store web application built with **Vite**.  
The project includes a modern storefront for displaying jewellery products, product collections, product details, a shopping cart, customer/user sections, comments, contact page, about page, and dynamic menu/footer data.

The application uses **JSON Server** as a mock REST API for local development. Most website data such as products, collections, menu items, users, comments, footer links, and shopping cart items are stored inside `src/db.json` and served on port `3005`.

---

## 🧱 Tech Stack

### ⚛️ Core

- **React** → Component-based UI library
- **Vite** → Fast development server and build tool
- **JavaScript / JSX** → Main programming language

### 🧭 Routing

- **React Router / React Router DOM** → Client-side routing between pages

### 🧠 State Management

- **Redux** → Global state management
- **React Redux** → Connecting React components to Redux store

### 🌐 Data Fetching

- **Axios** → HTTP requests to the mock API
- **Fetch API** → Used in some components for API requests
- **JSON Server** → Local mock REST API based on `src/db.json`

### 🎨 Styling

- **CSS Modules / Component CSS files** → Component-level styling
- **Bootstrap 5** → Responsive grid, layout, and UI utilities
- **Custom Font** → `BYekan.ttf` for Persian UI typography

### 🎯 UI Utilities

- **React Icons** → Icon library used across menu, home page, cart, and UI sections
- **SweetAlert2** → Alert and confirmation dialogs

---

## ✨ Features

- 🏠 Home page with slider, featured products, product collections, and brand introduction
- 💍 Jewellery product listing
- 🔎 Product details page
- 🛍️ Shopping cart page
- 🧾 Product collections page
- 👤 User/customer registration and management pages
- 💬 Comment display and comment creation sections
- 📞 Contact page
- ℹ️ About us page
- 🧭 Dynamic menu loaded from JSON Server
- 🦶 Dynamic footer loaded from JSON Server
- 💰 Gold price display from external API
- 📱 Responsive layout using Bootstrap grid system

---

## 📁 Project Structure

```txt
romashop/
├── public/                 # Public static files, if added later
├── src/
│   ├── Component/
│   │   ├── Aboutus/         # About us page
│   │   ├── Allproducts/     # All product list and product item pages
│   │   ├── App/             # Main App component and routes
│   │   ├── Collections/     # Product collections
│   │   ├── Comment/         # Comments and create comment pages
│   │   ├── Contact/         # Contact page
│   │   ├── Counter/         # Add-to-cart related logic
│   │   ├── Footer/          # Footer component
│   │   ├── Home/            # Home page
│   │   ├── Menu/            # Navigation menu
│   │   ├── Products/        # Featured products and product details
│   │   ├── ShopingCard/     # Shopping cart page
│   │   ├── Slider/          # Home page slider
│   │   ├── User/            # User/customer pages
│   │   └── assets/          # Fonts and shared assets
│   ├── Redux/
│   │   ├── Allproducts/     # Redux actions/reducer for all products
│   │   ├── Counter/         # Redux actions/reducer for counter/cart logic
│   │   ├── Footer/          # Redux actions/reducer for footer
│   │   ├── Menu/            # Redux actions/reducer for menu
│   │   ├── Products/        # Redux actions/reducer for products
│   │   ├── Store.jsx        # Redux store
│   │   └── rootreducer.jsx  # Root reducer
│   ├── db.json              # JSON Server mock database
│   ├── main.jsx             # React entry point
│   └── package.json         # JSON Server script
├── index.html               # Vite HTML entry
├── index.css                # Global CSS
├── package.json             # Main project dependencies and scripts
├── package-lock.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Rominaarjomand/jewellery-shop.git
```

```bash
cd jewellery-shop
```

---

### 2. Install main project dependencies

Run this command in the project root:

```bash
npm install
```

---

### 3. Install JSON Server dependencies

The mock API has its own `package.json` inside the `src` folder.

```bash
cd src
npm install
```

---

### 4. Run the mock API server

Stay inside the `src` folder and run:

```bash
npm run server
```

The JSON Server will run on:

```txt
http://localhost:3005
```

Main API resources include:

```txt
http://localhost:3005/Menu
http://localhost:3005/Slider
http://localhost:3005/Products
http://localhost:3005/Allproducts
http://localhost:3005/Collection
http://localhost:3005/Footer
http://localhost:3005/Users
http://localhost:3005/Comments
http://localhost:3005/ShopingCard
```

> Keep this terminal open while running the frontend.

---

### 5. Run the React development server

Open a **new terminal**, go back to the project root, and run:

```bash
cd jewellery-shop
npm run dev
```

The project will usually run on:

```txt
http://localhost:5173
```

If port `5173` is busy, Vite may use another port. Check the terminal output.

---

## 📜 Available Scripts

### Main project scripts

Run these commands from the project root:

| Script | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build the project for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

### Mock API script

Run this command from the `src` folder:

| Script | Description |
|---|---|
| `npm run server` | Start JSON Server on port `3005` |

---

## 🧪 Build for Production

To create a production build, run:

```bash
npm run build
```

The final build files will be generated inside:

```txt
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔗 API Notes

This project currently uses hardcoded local API URLs such as:

```js
http://localhost:3005/Products
http://localhost:3005/Allproducts
http://localhost:3005/Users
```

So before running the frontend, make sure JSON Server is running on port `3005`.

The menu also fetches gold price data from an external API. If the external service is unavailable or the internet connection is limited, the gold price section may not load correctly.

---

## 📌 Important Development Notes

- Do **not** commit `node_modules` to GitHub.
- The `.gitignore` file already includes `node_modules` and `dist`.
- Run the JSON Server before testing pages that depend on product, menu, user, cart, or comment data.
- This project is currently a frontend store project with a mock local backend.
- For real deployment, API URLs should be moved to environment variables and connected to a real backend.

---

## 🎯 Future Improvements

- Add real backend integration
- Add authentication and user login system
- Improve cart and checkout flow
- Add payment gateway integration
- Add product filtering and search
- Add admin panel for product management
- Improve responsive design for all pages
- Move API base URL to `.env`
- Add loading, error, and empty-state components
- Add unit and UI tests

---

# 💎 فروشگاه جواهرات روما

## 📌 معرفی پروژه

**Roma Jewellery Shop** یک وب‌اپلیکیشن فروشگاهی برای نمایش و فروش محصولات طلا و جواهر است که با **React** و **Vite** ساخته شده است.

این پروژه شامل صفحه اصلی، لیست محصولات، جزئیات محصول، کالکشن‌ها، سبد خرید، بخش کاربران، نظرات، صفحه تماس با ما، صفحه درباره ما، منوی داینامیک و فوتر داینامیک است.

داده‌های پروژه به صورت محلی از طریق **JSON Server** مدیریت می‌شوند. فایل اصلی دیتابیس پروژه در مسیر زیر قرار دارد:

```txt
src/db.json
```

این فایل شامل داده‌های منو، اسلایدر، محصولات، کالکشن‌ها، کاربران، نظرات، فوتر و سبد خرید است.

---

## 🚀 نحوه اجرای پروژه

### 1. دریافت پروژه

```bash
git clone https://github.com/Rominaarjomand/jewellery-shop.git
```

```bash
cd jewellery-shop
```

### 2. نصب پکیج‌های اصلی پروژه

در ریشه پروژه اجرا کنید:

```bash
npm install
```

### 3. نصب پکیج‌های JSON Server

وارد پوشه `src` شوید:

```bash
cd src
npm install
```

### 4. اجرای سرور دیتای محلی

داخل همان پوشه `src` اجرا کنید:

```bash
npm run server
```

سرور روی آدرس زیر اجرا می‌شود:

```txt
http://localhost:3005
```

### 5. اجرای فرانت‌اند

یک ترمینال جدید باز کنید، به ریشه پروژه برگردید و اجرا کنید:

```bash
cd jewellery-shop
npm run dev
```

آدرس اجرای پروژه معمولاً این است:

```txt
http://localhost:5173
```

---

## 📜 اسکریپت‌های پروژه

| دستور | توضیح |
|---|---|
| `npm run dev` | اجرای پروژه در حالت توسعه |
| `npm run build` | ساخت نسخه نهایی پروژه |
| `npm run preview` | مشاهده نسخه build شده |
| `npm run lint` | بررسی کد با ESLint |

برای اجرای دیتابیس محلی، داخل پوشه `src`:

| دستور | توضیح |
|---|---|
| `npm run server` | اجرای JSON Server روی پورت `3005` |

---

## 📌 وضعیت پروژه

این پروژه در حال حاضر یک فروشگاه فرانت‌اند با دیتابیس محلی است. برای استفاده واقعی و آنلاین، لازم است به یک backend واقعی، سیستم احراز هویت، درگاه پرداخت و API production متصل شود.
