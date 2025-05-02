PRUEBA DE AUTOMATIZACIÓN - SAUCEDEMO
=======================================

Objetivo:
Que podamos validar el flujo completo de compra en SauceDemo mediante pruebas E2E como pide los requerimientos.

Tecnologías Usadas:
- WebdriverIO (v8+)
- Serenity/JS (Se lo utiliza para los reportes estructurados)
- TypeScript
- Chrome Headless

Instalación:
1. Clonamos repositorio:
   `git clone [repo-url] && cd [repo-folder]`
2. Instalamos las dependencias necesarias para la ejecucion:
   `npm install`

Ejecución:
- Modo estándar (headless):
  `npm test`
- Modo debug (con navegador visible):
  `npm run test:debug`
  *// Remover flag --headless en wdio.conf.ts*

Reportes:

- Evidencia fotográfica: `/target/site/serenity/artifacts/screenshots`

Configuración Clave:

Timeout aumentado (60 seg)
Photographer para captura de interacciones