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

## API Endpoints

The project includes several API endpoints that provide access to different sets of structured data. The available data includes information about skills, portfolio, tools, social icons, navigation menu, and user details.

The first thing you will want to do its to create the .ENV archive and sett all the variables needed and documented in [.env.dev](/.env.dev) archive.

Seccond you nedd to go to `src/services/data.ts` to change from the production url to the LOCAL.

```typescript
local: boolean = true;
```

If we are in a development environment (local), use the localUrl constant.

>[!IMPORTANT]
>If we are NOT in development (production), use the 'url' constant.

>[!CAUTION]
>This is important because if you dont change variables, you will be fetching the wrong data and wont be able to see the changes you made. Also if you dont change back to false, you will be fetching the wrong data and wont be able to see the changes you made in production.

### Available Endpoints

Each data type has its own endpoint, and there is also an endpoint to retrieve all data at once.

| Endpoint           | Description                       |
| ------------------ | --------------------------------- |
| `/api/all`         | Returns all available data types. |
| `/api/skills`      | Returns skill-related data.       |
| `/api/menu`        | Returns navigation menu data.     |
| `/api/portfolio`   | Returns portfolio project data.   |
| `/api/socialIcons` | Returns social media icons.       |
| `/api/tools`       | Returns user tools data.          |
| `/api/user`        | Returns user data.                |

### Error Handling

If a non-existent data type is requested, the API will return a 404 response with the following format:

```json
{
  "status": 404
}
```

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
