PRUEBA DE AUTOMATIZACIÓN - SAUCEDEMO
=======================================

Objetivo:
Que podamos validar el flujo completo de compra en SauceDemo mediante pruebas E2E como pide los requerimientos.

Tecnologías Usadas:
- WebdriverIO (v8+)
- Serenity/JS (Se lo utiliza para los reportes estructurados)
- TypeScript
- Chrome Headless

Flujo Automatizado: Compra Exitosa en SauceDemo

Este script realiza las siguientes acciones paso a paso:

1. Inicio de sesión:
   - Abre la página de login de SauceDemo.
   - Ingresa credenciales (standard_user / secret_sauce).
   - Hace clic en el botón de login.

2. Agregar productos al carrito:
   - Agrega dos productos: una mochila y una luz para bicicleta.
   - Verifica que el contador del carrito muestre el número correcto de artículos (2).

3. Proceso de pago (Checkout):
   - Accede al carrito y hace clic en "Checkout".
   - Rellena el formulario con nombre, apellido y código postal.

4. Finaliza la compra:
   - Hace clic en "Continue" y luego en "Finish".
   - Verifica que el mensaje de confirmación sea Thank you for your order!.

📁 Estructura del Proyecto

├── test
│   └── specs
│       └── example.spec.ts   # Prueba automatizada de compra
├── wdio.conf.ts              # Configuración WebdriverIO + Serenity
├── tsconfig.json             # Configuración de TypeScript
└── package.json              # Dependencias y scripts

Instalación:
1. Clonamos repositorio:
   git clone [repo-url] && cd [repo-folder]
2. Instalamos las dependencias necesarias para la ejecucion:
   npm install

Ejecución:
- Modo estándar (headless):
  npm test
- Modo debug (con navegador visible):
  npm run test:debug
  // Remover flag --headless en wdio.conf.ts

Reportes:

- Evidencia fotográfica: /target/site/serenity/artifacts/screenshots

Configuración Clave:

Timeout aumentado (60 seg)
Photographer para captura de interacciones
