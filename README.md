# Shop Floor Assistant

# Build a Simple Shop Floor Agent UI

Create a **single-page responsive web application** with a modern, clean, minimal design.

The purpose of this page is simply to host an embedded **n8n AI Chat**.

## Theme

* Light mode only
* Modern SaaS look
* Clean and spacious layout
* Rounded corners
* Soft shadows
* Professional appearance

### Color Palette

Primary (Company Red)

* #DC2626

Primary Hover

* #B91C1C

Secondary (Blue)

* #2563EB

Background

* #FFFFFF

Surface

* #F8FAFC

Borders

* #E5E7EB

Text

* #1F2937

Muted Text

* #6B7280

Use white space generously.

Do NOT make it look like a dashboard.

There should only be one page.

---

# Page Layout

Centered container.

At the top:

# Shop Floor Agent

Under the title:

AI assistant for verifying cabinet panels, workstation requirements, and shop-floor procedures.

Below the description, display the embedded n8n AI Chat taking up almost the entire remaining viewport height.

Suggested layout:

* Header
* Small description
* Chat fills remaining screen

Use:

max-width: 1100px

Center everything horizontally.

Use approximately:

padding: 32px

Gap between elements:

24px

---

# Embedded n8n Chat

Install:

```bash
npm install @n8n/chat
```

Import:

```javascript
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';
```

Initialize the chat using this webhook:

```javascript
createChat({
  webhookUrl: "https://n8n-rayv-742595626609.herokuapp.com/webhook/3b05a138-6b54-4879-9abf-82b47c9eac6a/chat",

  mode: "fullscreen",

  target: "#n8n-chat",

  showWelcomeScreen: false,

  loadPreviousSession: true,

  initialMessages: [
    "Hello! 👋",
    "I'm your Shop Floor Agent. Scan or enter a panel code, choose a workstation, or ask me questions about the production process."
  ],

  i18n: {
    en: {
      title: "Shop Floor Agent",
      subtitle: "Powered by AI",
      footer: "",
      getStarted: "Start Chat",
      inputPlaceholder: "Enter panel code or ask a question..."
    }
  }
});
```

The page should contain:

```html
<div id="n8n-chat"></div>
```

The chat should occupy nearly the full remaining viewport.

---

# Chat Styling

Override the default n8n chat theme using CSS variables.

```css
:root{

--chat--color-primary:#DC2626;
--chat--color-primary-shade-50:#B91C1C;
--chat--color-primary-shade-100:#991B1B;

--chat--color-secondary:#2563EB;
--chat--color-secondary-shade-50:#1D4ED8;

--chat--color-white:#FFFFFF;
--chat--color-light:#F8FAFC;
--chat--color-light-shade-50:#F1F5F9;
--chat--color-light-shade-100:#E5E7EB;

--chat--color-medium:#CBD5E1;
--chat--color-dark:#1F2937;
--chat--color-disabled:#94A3B8;

--chat--border-radius:16px;

--chat--spacing:1rem;

--chat--window--width:100%;
--chat--window--height:100%;

--chat--header-height:72px;

--chat--message--font-size:15px;

--chat--heading--font-size:1.1rem;

--chat--input--font-size:15px;

--chat--textarea--height:56px;
}
```

Additional CSS:

* Rounded chat container (16px)
* Soft shadow
* White background
* Clean input field
* Large rounded send button
* Smooth hover animations
* Professional typography
* Keep everything minimal

---

# Responsive Design

Desktop:

* Chat centered
* Maximum width 1100px

Tablet:

* Reduce padding

Mobile:

* Chat fills almost entire screen
* Header remains visible
* No horizontal scrolling

---

# Important

Do not redesign the n8n chat.

Only customize its colors, spacing, border radius, and typography.

Keep the implementation compatible with the official @n8n/chat package.

Do not add authentication, navigation menus, dashboards, or extra pages.

The application should simply present a polished landing page with an embedded fullscreen AI chat for the Shop Floor Agent.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://shop-floor-ai-chat.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/192d3d68-203b-4f90-8819-85b2300e06f1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
