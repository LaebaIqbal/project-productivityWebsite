import { useState } from "react";

//Type für State (html inputs liefern immer string)
interface InputType {
  title: string;
  date: string;
  time: string;
}
const initialState = { title: "", date: "", time: "" };
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

  console.log(input);

  //OnChange: wenn Wert diese Inputs ändert, dann rufe entsprechend eFunktion auf
  return (
    <>
      <h3>Title</h3>
      <input type="text" onChange={(e) => setTitle(e)}></input>
      <h3>Date</h3>
      <input type="date" onChange={(e) => setDate(e)}></input>
      <h3>Time</h3>
      <input type="time" onChange={(e) => setTime(e)}></input>
      <button>Add Appointment</button>
    </>
  );
}

export default AppointmentsForm;
