# Stadium Atlas ⚽🏟️

A modern, type-safe React + TypeScript application that allows users to explore football teams and stadiums from the **top 5 European leagues**, by season, using real-world football data.

This project is built as a **learning-first, portfolio-grade application** to demonstrate strong fundamentals in React architecture, TypeScript, and state-driven UI design.

---

## 🚀 Live Demo

*(Coming soon)*

---

## 🎯 Project Goals

The purpose of Stadium Atlas is to:

* Solidify **TypeScript fundamentals** in a real application
* Practice **clean React architecture**
* Use **discriminated unions** for predictable UI state
* Consume and normalize **external APIs safely**
* Build scalable UI patterns used in real-world apps

---

## 🧠 Key Features

* 🌍 Select from the **Top 5 European Leagues**
* 📅 Choose a specific **season**
* 🔍 Fetch and display teams dynamically
* 📋 View teams in a clean list layout
* 📖 Expand a team row inline to reveal:

  * Stadium name
  * Capacity
  * Coach
  * Founded year
* 🔁 Loading, error, idle, and success states handled explicitly

---

## 🏗️ Tech Stack

* **React**
* **TypeScript**
* **Axios** (API requests)
* **Functional Components + Hooks**

---

## 🧩 Architecture Overview

The app is structured around **separation of concerns** and **predictable state**.

```
App
 ├── Filters (League & Season selection)
 ├── TeamsList
 │    └── TeamRow (expandable)
 │         └── TeamDetails
 └── useTeams (custom hook)
```

---

## 🧠 State Management Philosophy

Instead of juggling multiple booleans (`isLoading`, `hasError`, etc.), the app uses a **discriminated union** to model UI state:

```ts
export type TeamsState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; teams: Team[] };
```

This ensures:

* Impossible states cannot occur
* Rendering logic is simple and explicit
* TypeScript enforces correctness at compile time

---

## 🔄 Expandable Team Rows

Only **one team** can be expanded at a time using a controlled state pattern:

```ts
const [expandedTeamId, setExpandedTeamId] = useState<number | null>(null);
```

This avoids UI sync bugs and scales cleanly.

---

## 🔌 API Handling

* External football API data is **mapped into internal domain models**
* The UI never depends directly on raw API responses
* Makes the app resilient to API changes

```ts
export interface Team {
  id: number;
  name: string;
  badge: string;
  stadium: string;
  capacity: number;
  founded: number;
  coach: string;
}
```

---

## 🧪 Error & Loading States

All async operations are wrapped with:

* Loading indicators
* User-friendly error messages
* Disabled actions during requests

This mirrors real production UI behavior.

---

## 📈 What This Project Demonstrates

* Strong understanding of **TypeScript in React**
* Real-world **state modeling**
* Clean component boundaries
* Scalable UI patterns
* Professional async handling

This project is intentionally over-engineered **for learning purposes** — the same patterns scale to large applications.

---

## 🛠️ Future Improvements

* 🔍 Team search & filtering
* ⭐ Favorite teams
* 💾 Caching API responses
* 🖼️ Stadium images
* 📱 Responsive design
* 🧪 Unit tests for hooks & reducers

---

## 📦 Installation

```bash
git clone https://github.com/your-username/stadium-atlas.git
cd stadium-atlas
npm install
npm run dev
```

---

## 👤 Author

Built by **Sipho Mciwa**

> Junior Frontend Developer focused on React, TypeScript, and continuous improvement.

---

## 📜 License

MIT License

