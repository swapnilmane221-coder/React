# ⚛️ The Complete React.js Handbook

A comprehensive, single-file reference for React.js concepts, hooks, and patterns.

## 📋 Table of Contents
1. [Core Concepts](#1-core-concepts)
2. [JSX Rules](#2-jsx-rules)
3. [Components & Props](#3-components--props)
4. [State Management (useState)](#4-state-management-usestate)
5. [Side Effects (useEffect)](#5-side-effects-useeffect)
6. [Events & Forms](#6-events--forms)
7. [Advanced Hooks](#7-advanced-hooks)
8. [Context API (Global State)](#8-context-api-global-state)
9. [React Router (Navigation)](#9-react-router-v6)
10. [Performance Optimization](#10-performance-optimization)
11. [Recommended Folder Structure](#11-recommended-folder-structure)

---

## 1. Core Concepts

### What is React?
A JavaScript library for building user interfaces based on **Components**.
* **Declarative:** You tell React *what* the UI should look like, not *how* to update the DOM.
* **Virtual DOM:** React keeps a copy of the DOM in memory. When state changes, it compares the new Virtual DOM with the old one (**Diffing**) and updates only the changed parts in the real DOM (**Reconciliation**).



[Image of React Virtual DOM flow]


### Setup
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev