# project-productivityWebsite📚

A small **appointment calendar / scheduler** built with **React** to learn and understand the basics of React development.

This project is intentionally kept simple and focuses on core concepts like state management, event handling, and component structure. There is no backend and no long-term data storage yet.

---

## ✨Features

- ✅ Add appointments (title, date, time)
- ✅ Form validation (button enabled only when all fields are filled)
- ✅ Display a list of appointments
- ✅ Delete appointments

---

## 🛠️Technologies used

- **React**
- **TypeScript**

---

## How It Works (Overview)

- The form uses `useState` to manage the current input values (`title`, `date`, `time`).
- When clicking **Add Appointment**, a new `Appointment` object is created:
  - An `id` is generated using `Date.now()` (simple approach for a learning project).
- Appointments are stored in the `appointments` state and rendered as a list.
- Clicking **Delete** removes the appointment by filtering it out using its `id`.

---

## 📁Project Structure (Example)

- `AppointmentsForm.tsx` – main component (form + list)
- `AppointmentsForm.css` – styling (not implemented yet)

---

## Installation & Start

> If you are using **Vite**

```bash
npm install
npm run dev
```

## Future Improvements (Ideas)

- 💾 **Persistent storage**  
  Save appointments long-term using `localStorage`, later possibly a backend or database.

- 🗓️ **Sorting**  
  Sort appointments by date and time.

- ✏️ **Edit appointments**  
  Allow existing appointments to be edited.

- 🔎 **Search & filter**  
  Search appointments by title or filter by date.

- 📦 **Additional modules (learning extensions)**
  - ⏱️ Pomodoro Timer
  - ✅ Habit Tracker
  - 📝 Notes / To-Do List
  - 🔔 Reminders / notifications
