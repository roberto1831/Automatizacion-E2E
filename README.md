# 🤖 Prueba de Automatización E2E - SauceDemo

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![WebdriverIO](https://img.shields.io/badge/WebdriverIO-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white)
![Serenity](https://img.shields.io/badge/Serenity%2FJS-4a90d9?style=for-the-badge)
![Chrome](https://img.shields.io/badge/Chrome_Headless-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)

## 📋 Objetivo

Validar el flujo completo de compra en **SauceDemo** mediante pruebas E2E automatizadas, cubriendo desde el inicio de sesión hasta la confirmación del pedido.

---

## 🛠️ Tecnologías Usadas

| Herramienta | Versión | Uso |
|---|---|---|
| WebdriverIO | v8+ | Framework de automatización |
| Serenity/JS | Latest | Reportes estructurados |
| TypeScript | Latest | Lenguaje principal |
| Chrome Headless | Latest | Navegador de pruebas |

---

## 🔄 Flujo Automatizado: Compra Exitosa en SauceDemo

### 1. 🔐 Inicio de Sesión
- Abre la página de login de SauceDemo
- Ingresa credenciales (`standard_user` / `secret_sauce`)
- Hace clic en el botón de login

### 2. 🛒 Agregar Productos al Carrito
- Agrega dos productos: una mochila y una luz para bicicleta
- Verifica que el contador del carrito muestre el número correcto de artículos (2)

### 3. 💳 Proceso de Pago (Checkout)
- Accede al carrito y hace clic en "Checkout"
- Rellena el formulario con nombre, apellido y código postal

### 4. ✅ Finalización de la Compra
- Hace clic en "Continue" y luego en "Finish"
- Verifica que el mensaje de confirmación sea **"Thank you for your order!"**

---

## 📁 Estructura del Proyecto

```
├── test/
│   └── specs/
│       └── example.spec.ts    # Prueba automatizada de compra
├── wdio.conf.ts               # Configuración WebdriverIO + Serenity
├── tsconfig.json              # Configuración de TypeScript
└── package.json               # Dependencias y scripts
```

---

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js v16+
- npm

### Instalación

```bash
git clone https://github.com/roberto1831/Automatizacion-E2E.git
cd Automatizacion-E2E
npm install
```

### Ejecución

```bash
# Modo estándar (headless)
npm test

# Modo debug (con navegador visible)
npm run test:debug
```

> 💡 Para ver el navegador durante la ejecución, elimina el flag `--headless` en `wdio.conf.ts`

---

## 📊 Reportes

Los reportes y evidencias fotográficas se generan automáticamente en:

```
/target/site/serenity/artifacts/screenshots
```

---

## ⚙️ Configuración Clave

| Parámetro | Valor |
|---|---|
| Timeout | 60 segundos |
| Captura de pantalla | Activada (Photographer) |
| Modo por defecto | Headless |

---

## 👤 Autor

**Roberto Toapanta** · [GitHub](https://github.com/roberto1831) · [LinkedIn](https://linkedin.com/in/roberto-1831)
