# Documentación del Proyecto: Misión Git Flow

---

## 1. Nombre y descripción breve del proyecto

* **Nombre:** Plataforma Educativa Solaris (Misión Git Flow)
* **Descripción:** Aplicación web interactiva que incluye un módulo de inicio de sesión y registro de usuarios, desarrollada en HTML5, CSS3 y JavaScript vanilla. El proyecto está estructurado para trabajar de forma colaborativa mediante un flujo organizado de control de versiones con Git y GitHub.

---

## 2. Integrantes del equipo

* **Julián Vargas**
* **Jesús Torres**
* **Nicole Bolívar**

---

## 3. Estrategia de ramas elegida

Se escogió la metodología **Git Flow**, dividiendo el trabajo en ramas principales y auxiliares:

* **`main` (o `master`):** Rama de producción. Contiene únicamente código estable y listo para despliegue.
* **`develop`:** Rama principal de integración. Acumula los avances del equipo antes de ser lanzados a producción.
* **`feature/<nombre-funcionalidad>`:** Ramas temporales creadas a partir de `develop` para el desarrollo individual de cada tarea o módulo (ej. `feature/login-ui`, `feature/valida-script`).
* **`hotfix/<nombre-arreglo>`:** Ramas de emergencia creadas directamente desde `main` para solventar errores críticos en producción.

---

## 4. Reglas y convenciones para commits, creación y gestión de PRs y fusiones (merges)

### A. Convención para Mensajes de Commit
Se sigue el estándar *Conventional Commits* para mantener un historial de cambios legible y profesional:

* `feat:` Para la incorporación de una nueva funcionalidad (ej. `feat: implementar estructura HTML de formulario`).
* `fix:` Para la corrección de errores o bugs en el código (ej. `fix: corregir evento submit en script.js`).
* `style:` Para cambios estéticos o de formato que no modifican la lógica del programa (ej. `style: ajustar colores y fuentes en styles.css`).
* `docs:` Para adición o modificación de documentación (ej. `docs: actualizar README del proyecto`).
* `refactor:` Para reestructuración de código sin alterar su funcionamiento.

### B. Creación y gestión de Pull Requests (PR)
* **Prohibición de pushes directos:** Queda estrictamente prohibido subir cambios directamente a las ramas `main` o `develop`.
* **Origen y Destino:** Toda nueva característica completada en una rama `feature/*` debe enviarse mediante un Pull Request (PR) apuntando hacia la rama `develop`.
* **Descripción obligatoria:** Cada PR debe detallar claramente los cambios realizados, las pruebas ejecutadas y las pantallas o archivos afectados.
* **Revisión de código (Code Review):** Un PR requiere la aprobación previa de al menos uno de los otros integrantes del equipo antes de ser fusionado.

### C. Reglas de Fusión (Merges)
* **Estrategia de Merge:** Se empleará *Merge Commit* o *Squash and Merge* al integrar una rama `feature` en `develop`, asegurando mantener la trazabilidad de los commits.
* **Limpieza de ramas:** Una vez completada exitosamente la integración del PR en `develop`, la rama `feature` correspondiente debe ser eliminada tanto local como remotamente para evitar desorden en el repositorio.
