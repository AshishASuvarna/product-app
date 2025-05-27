# 🛍️ ProductApp – Angular Assignment

This project was created as part of a technical assessment to demonstrate Angular skills including:

- Component-based architecture
- Services and data handling
- Routing and navigation
- Data binding using `@Input()` and `@Output()`
- Observable-based asynchronous logic

---

## ✨ Features

- View a list of products on `/products`
- Each product is displayed using a reusable `ProductCardComponent`
- "Add to Cart" functionality (logs product to console)
- Navigate to individual product detail via `/products/:id`
- Modular structure with clean file organization

---

## 🚀 How to Run the Application Locally

### ✅ Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) installed (v16+ recommended)
- [Angular CLI](https://angular.io/cli)

Install Angular CLI globally if needed:
```bash
npm install -g @angular/cli
```

---

### 🔧 Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/YOUR_USERNAME/product-app.git
cd product-app
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the dev server**
```bash
ng serve
```

4. **Open the app**
Go to [http://localhost:4200](http://localhost:4200)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── product-card/
│   │   ├── product-list/
│   │   └── product-detail/
│   ├── services/
│   │   └── product.service.ts
│   ├── product.model.ts
│   ├── app-routing.module.ts
│   └── app.module.ts
...
```

---

## 🧪 Usage Demo

- Visit `/products` to view the product list.
- Click **"View Details"** to go to `/products/:id`
- Click **"Add to Cart"** to simulate adding a product (console log output)

---

## 🛠️ Technologies Used

- Angular 17
- TypeScript
- RxJS
- HTML + CSS

---

## 📬 Contact

For questions, feel free to reach out:  
📧 ashishasuvarna@gmail.com

---
