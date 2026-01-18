import { useState } from "react";

//Type für State (html inputs liefern immer string)
interface InputType {
  title: string;
  date: string;
  time: string;
}

const initialState = { title: "", date: "", time: "" };

//Typ für state
interface AppointmentsType {
  appointment: InputType;
}

function AppointmentsForm() {
  //input: aktueller Zustand, setInput: Funktion, die zusatnd ändert
  //useState<InputType>(initialState): Startwerte;
  const [input, setInput] = useState<InputType>(initialState);

  //Funktion zum ändern Status
  //"..."" sonst würde man die andeen inuts verlieren
  //e.target.value : das was man ins textfeld tippt

  function setTitle(e: any) {
    setInput({ ...input, title: e.target.value });
  }

  function setDate(e: any) {
    setInput({ ...input, date: e.target.value });
  }

  function setTime(e: any) {
    setInput({ ...input, time: e.target.value });
  }
  //---------------------

  const [appointment, setAppointments] = useState<InputType[]>([]);
  function handleAddAppointment(newAppointment: InputType) {
    setAppointments([...appointment, newAppointment]);
    setInput(initialState);
  }
  console.log(input);

  //OnChange: wenn Wert diese Inputs ändert, dann rufe entsprechende Funktion auf
  //value für controlled components
  return (
    <>
      <h2>📅 Appointments</h2>
      <h3>Title</h3>
      <input
        type="text"
        value={input.title}
        onChange={(e) => setTitle(e)}
      ></input>
      <h3>Date</h3>
      <input
        type="date"
        value={input.date}
        onChange={(e) => setDate(e)}
      ></input>
      <h3>Time</h3>
      <input
        type="time"
        value={input.time}
        onChange={(e) => setTime(e)}
      ></input>
      <button onClick={() => handleAddAppointment(input)}>
        Add Appointment
      </button>

      <div>
        {appointment.map((appointment, index) => (
          <li key={index}>
            {appointment.title}
            {appointment.date}
            {appointment.time}
          </li>
        ))}
      </div>
    </>
  );
}

export default AppointmentsForm;
