# ⚛️ The Interactive React.js Handbook

A self-paced, interactive guide to mastering React. Click on the arrows **(▶)** to reveal notes, code examples, and deep dives.

---

## 🗺️ Interactive Navigation
1. [The Fundamentals](#-1-the-fundamentals)
2. [State & Events](#-2-state--events)
3. [The Hooks Ecosystem](#-3-the-hooks-ecosystem)
4. [Routing (React Router)](#-4-routing-react-router)
5. [Global State (Context)](#-5-global-state-management)
6. [Performance](#-6-performance-optimization)
7. [✅ Your Progress Checklist](#-your-learning-checklist)

---

## 🧱 1. The Fundamentals

<details>
<summary><strong>What is React & Virtual DOM?</strong> (Click to expand)</summary>

* **React:** A JS library for building UIs based on *components*.
* **Virtual DOM:** A lightweight copy of the real DOM.
    1.  State changes.
    2.  React calculates the difference (**Diffing**).
    3.  React updates *only* the changed nodes in the real DOM (**Reconciliation**).
</details>

<details>
<summary><strong>JSX Rules (JavaScript XML)</strong></summary>

JSX looks like HTML, but it is JavaScript syntax sugar.
1.  **Wrap in one parent:** Return a single element or use a Fragment `<> ... </>`.
2.  **Close all tags:** `<img />` (self-closing).
3.  **camelCase:** Use `className`, `onClick`, `htmlFor`.
4.  **JavaScript Mode:** Use `{ curly braces }` to insert variables.

```jsx
const name = "Dev";
const element = <h1>Hello, {name}</h1>;