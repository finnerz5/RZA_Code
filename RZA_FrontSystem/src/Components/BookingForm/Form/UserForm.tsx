/* eslint-disable no-unused-vars */
import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFormDetails } from "./FormSlice";
import Button from "../Utils/Button";
import axios from "axios";

function UserForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [Aticket, setATicket] = useState("");
  const [Cticket, setCTicket] = useState("");
  const [, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState(false);
  const [morningSlot, setMorningSlot] = useState(false);
  const [eveningSlot, setEveningSlot] = useState(false);
  const [prevMorninglSlot, setPrevMorningSlot] = useState(false);
  const [prevEveninglSlot, setPrevEveningSlot] = useState(false);

  const dispatch = useDispatch();
  const { currentSelectedDate } = useSelector((state) => state.calendar);

  const { formData } = useSelector((state) => state.form);

  const handleSubmit = async (e: FormEvent) =>  {
    e.preventDefault();
    setMessage("");

     if (morningSlot === false && eveningSlot === false) {
      alert("Select the Slot");
      return;
    }
    
    try {
      const formData = await axios.post("http://localhost:5000/Tickets", {
        name,
        phone,
        email,
        Aticket,
        Cticket,
        morningSlot: prevMorninglSlot ? false : morningSlot,
        eveningSlot: prevEveninglSlot ? false : eveningSlot,
        currentSelectedDate,
      });
      setMessage(JSON.stringify(formData.data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setMessage(error.message);
      } else {
        setMessage(String(error));
      }
    }
  };
   
    /*const formData = {
      name,
      phone,
      email,
      Aticket,
      Cticket,
      morningSlot: prevMorninglSlot ? false : morningSlot,
      eveningSlot: prevEveninglSlot ? false : eveningSlot,
      currentSelectedDate,
    }; */
  

    const isConfirmed = window.confirm(
      `Form submitted:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nAdults: ${Aticket}\nChildren: ${Cticket}\nSlot- ${
        morningSlot && prevMorninglSlot !== morningSlot ? "Morning Slot  (10:00 - 15:00)" : ""
      } ${
        eveningSlot && prevEveninglSlot !== eveningSlot ? "Evening Slot  (12:00 - 17:00)" : ""
      }\n
      \nDo you want to confirm?`
    );

    if (isConfirmed) {
      dispatch(addFormDetails(formData));
      alert("Booked!!!");
      setName("");
      setPhone("");
      setEmail("");
      setFormStatus(false);
      setATicket("");
      setCTicket("");
    }
 

  useEffect(() => {
    const isPreviouslyMorningSlotBooked = formData.some(
      (entry: { currentSelectedDate: { year: any; month: any; date: any; }; morningSlot: any; }) =>
        entry.currentSelectedDate &&
        entry.currentSelectedDate.year === currentSelectedDate.year &&
        entry.currentSelectedDate.month === currentSelectedDate.month &&
        entry.currentSelectedDate.date === currentSelectedDate.date &&
        entry.morningSlot &&
        morningSlot
    );

    setPrevMorningSlot(isPreviouslyMorningSlotBooked);

    const isPreviouslyNoonSlotBooked = formData.some(
      (entry: { currentSelectedDate: { year: any; month: any; date: any; }; eveningSlot: any; }) =>
        entry.currentSelectedDate &&
        entry.currentSelectedDate.year === currentSelectedDate.year &&
        entry.currentSelectedDate.month === currentSelectedDate.month &&
        entry.currentSelectedDate.date === currentSelectedDate.date &&
        entry.eveningSlot &&
        eveningSlot
    );

    setPrevEveningSlot(isPreviouslyNoonSlotBooked);
  }, [currentSelectedDate, formData, morningSlot, eveningSlot]);

  return (
    <div className=" sm:min-w-[200px] flex justify-center items-center mt-8 mb-4">
      {formStatus ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
          <div>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              required
              className="pl-4 pr-2 py-1 rounded-lg border-l-2 border-black  outline-none"
            />
          </div>
          <div>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Your Phone"
              required
              className="pl-4 pr-2 py-1 rounded-lg border-l-2 border-black  outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              required
              className="pl-4 pr-2 py-1 rounded-lg border-l-2 border-black  outline-none"
            />
          </div>
          <div>
            <input
              type="number"
              id="ticket"
              value={Aticket}
              onChange={(e) => setATicket(e.target.value)}
              placeholder="adult tickets 17+"
              required
              className="pl-4 pr-2 py-1 rounded-lg border-l-2 border-black  outline-none"
            />
          </div>
          <div>
            <input
              type="number"
              id="ticket"
              value={Cticket}
              onChange={(e) => setCTicket(e.target.value)}
              placeholder="Child tickets 16-"
              required
              className="pl-4 pr-2 py-1 rounded-lg border-l-2 border-black  outline-none"
            />
          </div>
          <div>
            <p className="font-semibold mt-2">Select Slot</p>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="morningSlot"
                checked={morningSlot}
                onChange={() =>
                  !prevMorninglSlot ? setMorningSlot(!morningSlot) : ""
                }
                className="accent-black"
              />
              <label htmlFor="morningSlot">
                {prevMorninglSlot ? "Morning Slot Booked" : "Morning Slot (10am-3pm)"}
              </label>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="eveningSlot"
                checked={eveningSlot}
                onChange={() =>
                  !prevEveninglSlot ? setEveningSlot(!eveningSlot) : ""
                }
                className="accent-black"
              />
              <label htmlFor="eveningSlot">
                {prevEveninglSlot ? "Noon slot booked" : "Noon Slot (12am - 5pm)"}
              </label>
            </div>
          </div>
          <Button formStatus={formStatus} setFormStatus={setFormStatus} type="submit" onClick={handleSubmit}/>
        </form>
      ) : (
        <div>
          <div>
            <h5 className="text-center">Select a date and Secure Your tickets!!</h5>
            <br/>
            <h4>Adult Tickets: £21.00</h4>
           
            <h4>Child Tickets: £14.00</h4>
          </div>
          <Button formStatus={formStatus} setFormStatus={setFormStatus} type={undefined} />
        </div>
      )}
    </div>
  );
};

export default UserForm;
