## [Versión en Español](./README-es.md)

---

# Project: Portfolio Sofi 2.0

> [!CAUTION]
> Always **GIT PULL** before making changes, as updates and PRs are frequently submitted.

> [!TIP]
> I hightly recomend you to install the VSCODE extension 'BETTER COMMENTS' So you will be able to see all note/instructions in distinctive colors [install it ](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

This project is a new version of the personal portfolio, designed and developed by **SofiDev**. The goal of this version is to offer an updated portfolio using modern technologies and a modular structure.

## Project Description

- **Name**: `portfolio-sofi-2.0`
- **Version**: `1.0.0`
- **Description**: New version of the portfolio.
- **Author**: SofiDev

---

## Data Access

The project uses structured TypeScript/JSON data models located under entity folders (`@entities/*/model/*`). The data includes information about skills, portfolio, tools, social icons, navigation menu, and user details.

Data is imported directly into components and helper functions (such as `getData()` in `@entities/user/api/getData`) without relying on internal HTTP API fetch calls or environment URL configurations for local data fetching.

### Data Types Available

| Data Key      | Description                                            | Entity Location                              |
| ------------- | ------------------------------------------------------ | -------------------------------------------- |
| `skills`      | Returns skill-related data.                            | `@entities/skill/model/skillsData`           |
| `menu`        | Returns navigation menu data.                          | `@entities/navigation/model/menuData`        |
| `portafolio`  | Returns portfolio project data.                        | `@entities/project/model/portfolioData`      |
| `socialIcons` | Returns social media icons.                            | `@entities/social/model/socialIconsData`     |
| `tools`       | Returns user tools data.                               | `@entities/skill/model/toolsData`            |
| `user`        | Returns user profile data.                             | `@entities/user/model/userData`              |


---

## Contributors

| Username   | GitHub Profile                               | Photo                                                                  |
| ---------- | -------------------------------------------- | ---------------------------------------------------------------------- |
| ElStron    | [@ElStron](https://github.com/ElStron)       | <img src="https://github.com/ElStron.png" width="50" height="50" />    |
| Rickytodev | [@rickytodev](https://github.com/rickytodev) | <img src="https://github.com/rickytodev.png" width="50" height="50" /> |

---

## Installation

Clone the repository and run the following command to install all dependencies:

```bash
npm install
```

---

### Usage

> [!TIP]
> To start developing the project, use the following command to run the development server:

```bash
npm run dev
```

This command will start the server at `http://localhost:4322`.

---

## Contribution Rules

> [!CAUTION]
> If you want to contribute to this project, please follow these rules:

1. **Fork or Clone**: Fork or clone the repository to start.
2. **Create a Specific Branch**: Use a descriptive branch name that clearly identifies the change you are making.
3. **PR Changes**: Do not make too many changes in a single Pull Request. Keep changes specific and organized.
4. **Consult for Refactoring**: If you are refactoring code handling _services_ or _controllers_, consultation is mandatory.
5. **Figma Styles**: Do not alter the design styles (color palette, typography) in Figma.
6. **Dependencies**: Do not install new dependencies without prior consultation.
7. **Component Extensions**: Do not change component extensions (e.g., from `.astro` to `.jsx`) without consulting first.
8. **Suggesting New Components**: If you want to suggest a new component, it must first be proposed in Figma. [Figma Design Link](https://www.figma.com/design/0ZhwLY2yydYgZwSw1lkQu7/SofiDev-Portfolio-2.0?node-id=3-2&t=0j94Gnt9WYl6Z86U-1) (request edit permissions if needed).

---

## Upcoming Updates

More details on functionality, styles, and additional modules will be included as the project development progresses.

---
