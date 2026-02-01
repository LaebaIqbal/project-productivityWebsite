import { useState } from "react";
import "./AppointmentsForm.css";

/**
 * 1) TYPES
 * - InputType: Daten, die Bei Inputs enstethen
 * - AppointmenType: Daten, die wirklich gespeichert werden
 */
interface InputType {
  title: string;
  date: string;
  time: string;
}

interface Appointment {
  id: number;
  title: string;
  date: string;
  time: string;
}

/**
 * 2) CONSTANTS
 * Startzustand für das Formular
 */
const initialState = { title: "", date: "", time: "" };

function AppointmentsForm() {
  /**
   * 3) STATE
   * - input: aktueller Zustand/Inhalt des Formulars , setInput: Funktion, die zustand ändert
   * - ähnlich für appointments
   */
  const [input, setInput] = useState<InputType>(initialState);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  /**
   * 4) FORM HANDLER
   * - Änderung von Titel, Datum, Zeit (aktualisierung State)
   *-  Wichtik: kopieren des alten State (...input), sonst verlieren wir andere Felder
   * - e.target.value : das was man ins textfeld tippt
   */
  function setTitle(e: any) {
    setInput({ ...input, title: e.target.value });
  }

  function setDate(e: any) {
    setInput({ ...input, date: e.target.value });
  }

  function setTime(e: any) {
    setInput({ ...input, time: e.target.value });
  }

  /**
   * 5) APPOINTMENT ACTIONS
   * - Appointment erstellen
   * - Appointment löschen
   */

  function handleAddAppointment(input: InputType) {
    const newAppointment: Appointment = {
      id: Date.now(), //einfache ID
      title: input.title,
      date: input.date,
      time: input.time,
    };
    setAppointments([...appointments, newAppointment]);
    setInput(initialState);
  }

  function handleDeleteAppointment(idToDelete: number) {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== idToDelete)
    );
  }
  /**
   * 6) VALIDATION
   * - nur wenn alle Felder gefüllt, kann man Button clicken
   * - trim() entfernt Leerzeichen am Anfang/Ende.
   */

  const isValid =
    input.title.trim() !== "" && input.date !== "" && input.time !== "";
  console.log(input);

  /**
   * 7) RENDER
   */
  return (
    <>
      <div className="mainContainer">
        <div className="form">
          <h2 className="row1">📅 Appointments</h2>

          <div className="row2">
            <h3>Title</h3>
            <input
              className="input"
              type="text"
              value={input.title}
              onChange={(e) => setTitle(e)}
            ></input>
            <h3>Date</h3>
            <input
              className="input"
              type="date"
              value={input.date}
              onChange={(e) => setDate(e)}
            ></input>
          </div>

          <div className="row3">
            <h3>Time</h3>
            <input
              className="input"
              type="time"
              value={input.time}
              onChange={(e) => setTime(e)}
            ></input>
            <button
              className="button"
              disabled={!isValid}
              onClick={() => handleAddAppointment(input)}
            >
              Add Appointment
            </button>
          </div>
        </div>

        <div className="appointmentList">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="appointmentItem">
              {appointment.title} {appointment.date} {appointment.time}
              <button
                className="delteButton"
                onClick={() => handleDeleteAppointment(appointment.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default AppointmentsForm;
