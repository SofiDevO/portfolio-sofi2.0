
## [Versión en Español](./README-es.md)
---

# Project: Portfolio Sofi 2.0


This project is a new version of the personal portfolio, designed and developed by **SofiDev**. The goal of this version is to offer an updated portfolio using modern technologies and a modular structure.

## Project Description

- **Name**: `portfolio-sofi-2.0`
- **Version**: `1.0.0`
- **Description**: New version of the portfolio.
- **Author**: SofiDev
---

## API Endpoints

The project includes several API endpoints that provide access to different sets of structured data. The available data includes information about skills, portfolio, tools, social icons, navigation menu, and user details.

### Available Endpoints

Each data type has its own endpoint, and there is also an endpoint to retrieve all data at once.

| Endpoint              | Description                                            |
|-----------------------|--------------------------------------------------------|
| `/api/all`            | Returns all available data types.                      |
| `/api/skills`         | Returns skill-related data.                            |
| `/api/menu`           | Returns navigation menu data.                          |
| `/api/portfolio`      | Returns portfolio project data.                        |
| `/api/socialIcons`    | Returns social media icons.                            |
| `/api/tools`          | Returns user tools data.                               |
| `/api/user`           | Returns user data.                                     |

### Error Handling

If a non-existent data type is requested, the API will return a 404 response with the following format:

```json
{
  "status": 404
}
```






## Contribution Rules
>[!CAUTION]
>If you want to contribute to this project, please follow these rules:

1. **Fork or Clone**: Fork or clone the repository to start.
2. **Create a Specific Branch**: Use a descriptive branch name that clearly identifies the change you are making.
3. **PR Changes**: Do not make too many changes in a single Pull Request. Keep changes specific and organized.
4. **Consult for Refactoring**: If you are refactoring code handling *services* or *controllers*, consultation is mandatory.
5. **Figma Styles**: Do not alter the design styles (color palette, typography) in Figma.
6. **Dependencies**: Do not install new dependencies without prior consultation.
7. **Component Extensions**: Do not change component extensions (e.g., from `.astro` to `.jsx`) without consulting first.
8. **Suggesting New Components**: If you want to suggest a new component, it must first be proposed in Figma. [Figma Design Link](https://www.figma.com/design/0ZhwLY2yydYgZwSw1lkQu7/SofiDev-Portfolio-2.0?node-id=3-2&t=0j94Gnt9WYl6Z86U-1) (request edit permissions if needed).

---


