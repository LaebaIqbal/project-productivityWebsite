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
  id: number;
  title: string;
  date: string;
  time: string;
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

  const [appointment, setAppointments] = useState<AppointmentsType[]>([]);
  function handleAddAppointment(input: InputType) {
    const newAppointment: AppointmentsType = {
      id: Date.now(),
      title: input.title,
      date: input.date,
      time: input.time,
    };
    setAppointments([...appointment, newAppointment]);
    setInput(initialState);
  }
  //____________

  function handleDeleteAppointment(idToDelete: number) {
    setAppointments(
      appointment.filter((appointment) => appointment.id !== idToDelete)
    );
  }
  // Valisierung------------

  const isValid = input.title !== "" && input.date !== "" && input.time !== "";
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
      <button disabled={!isValid} onClick={() => handleAddAppointment(input)}>
        Add Appointment
      </button>

      <div>
        {appointment.map((appointment) => (
          <li key={appointment.id}>
            {appointment.title} {appointment.date} {appointment.time}
            <button onClick={() => handleDeleteAppointment(appointment.id)}>
              Delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
}

export default AppointmentsForm;
