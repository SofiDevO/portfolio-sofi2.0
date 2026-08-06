# Proyecto: Portfolio Sofi 2.0

> [!CAUTION]
> Siempre haz **GIT PULL** antes de comenzar a hacer cambios, ya que se suben cambios y PR de manera constante.

Este proyecto es una nueva versión del portafolio personal, diseñado y desarrollado por **SofiDev**. El objetivo de esta versión es ofrecer un portafolio actualizado utilizando tecnologías modernas y una estructura modular.

## Descripción del Proyecto

- **Nombre**: `portfolio-sofi-2.0`
- **Versión**: `1.0.0`
- **Descripción**: Nueva versión del portafolio.
- **Autor**: SofiDev

---

## Acceso a Datos

El proyecto utiliza modelos de datos estructurados en TypeScript/JSON ubicados en las carpetas de entidades (`@entities/*/model/*`). Los datos disponibles incluyen información sobre habilidades, portafolio, herramientas, íconos sociales, menú de navegación y detalles del usuario.

Los datos se importan directamente en los componentes y funciones auxiliares (como `getData()` en `@entities/user/api/getData`) sin depender de peticiones HTTP `fetch` internas ni configuraciones de URL de entorno para el consumo local.

### Tipos de Datos Disponibles

| Clave de Datos | Descripción                                            | Ubicación en Entidades                       |
| -------------- | ------------------------------------------------------ | -------------------------------------------- |
| `skills`       | Devuelve los datos relacionados con las habilidades.   | `@entities/skill/model/skillsData`           |
| `menu`         | Devuelve los datos del menú de navegación.             | `@entities/navigation/model/menuData`        |
| `portafolio`   | Devuelve los datos sobre los proyectos del portafolio. | `@entities/project/model/portfolioData`      |
| `socialIcons`  | Devuelve los íconos de redes sociales.                 | `@entities/social/model/socialIconsData`     |
| `tools`        | Devuelve los datos sobre las herramientas del usuario. | `@entities/skill/model/toolsData`            |
| `user`         | Devuelve los datos del perfil de usuario.              | `@entities/user/model/userData`              |


---

## Contribuidores

| Usuario     | Perfil de GitHub                             | Foto                                                                 |
|-------------|----------------------------------------------|----------------------------------------------------------------------|
 ElStron     | [@ElStron](https://github.com/ElStron)         | <img src="https://github.com/ElStron.png" width="50" height="50" />    |
| Rickytodev  | [@rickytodev](https://github.com/rickytodev)   | <img src="https://github.com/rickytodev.png" width="50" height="50" /> |

---

## Instalación

Clona el repositorio y ejecuta el siguiente comando para instalar todas las dependencias:

```bash
npm install
```

---

### Uso

Para comenzar a desarrollar el proyecto, utiliza el siguiente comando para levantar el servidor de desarrollo:

```bash
npm run dev
```

Este comando iniciará el servidor en `http://localhost:4322`.

---

## Reglas para Contribuir
>[!CAUTION]
>Si deseas colaborar en este proyecto, por favor sigue estas reglas:

1. **Fork o Clonar**: Realiza un fork o clona el repositorio para comenzar.
2. **Crea una Rama Exclusiva**: Usa un nombre descriptivo para la rama que identifique claramente el cambio que vas a realizar.
3. **Cambios en el PR**: No realices demasiados cambios en un solo Pull Request. Mantén los cambios específicos y organizados.
4. **Consulta para Refactorización**: Si vas a refactorizar código que maneja *services* o *controladores*, es obligatorio consultar antes.
5. **Estilos de Figma**: No alteres los estilos (paleta de colores, tipografía) del diseño en Figma.
6. **Dependencias**: No instales nuevas dependencias sin consultar previamente.
7. **Extensiones de Componentes**: No cambies las extensiones de los componentes (por ejemplo, de `.astro` a `.jsx`) sin antes consultar.
8. **Sugerencia de Nuevos Componentes**: Si deseas sugerir un nuevo componente, este debe ser propuesto primero en el Figma. [Enlace al diseño de Figma](https://www.figma.com/design/0ZhwLY2yydYgZwSw1lkQu7/SofiDev-Portfolio-2.0?node-id=3-2&t=0j94Gnt9WYl6Z86U-1) (solicita permisos de edición si es necesario).

---

## Próximas Actualizaciones

Se incluirán más detalles acerca de las funcionalidades, estilos y módulos adicionales a medida que avance el desarrollo del proyecto.

---