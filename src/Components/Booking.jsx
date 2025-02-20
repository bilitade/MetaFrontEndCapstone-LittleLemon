import React, { useReducer, useEffect } from "react";

// Initial state for the booking
const initialState = {
  selectedDate: "",
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
};

// Reducer to manage state updates
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_DATE":
      return { ...state, selectedDate: action.payload };
    default:
      return state;
  }
};

const Booking = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Handle date change and update state
  const updateTimes = (date) => {
    dispatch({ type: "SET_DATE", payload: date });
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Little Lemon Booking</h2>
      <BookingForm
        availableTimes={state.availableTimes}
        selectedDate={state.selectedDate}
        onDateChange={updateTimes}
      />
      <BookingSlot availableTimes={state.availableTimes} />
    </div>
  );
};

// Form component to handle date, time, and other inputs
const BookingForm = ({ availableTimes, selectedDate, onDateChange }) => {
  const [formData, setFormData] = React.useState({
    date: selectedDate || "",
    time: "17:00",
    guests: 1,
    occasion: "Birthday",
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, date: selectedDate || prev.date }));
  }, [selectedDate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation made for ${formData.guests} guests on ${formData.date} at ${formData.time} for ${formData.occasion}`);
    setFormData({ date: "", time: "17:00", guests: 1, occasion: "Birthday" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formData.date} onChange={(e) => { setFormData({ ...formData, date: e.target.value }); onDateChange(e.target.value); }} required />
      
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" name="time" value={formData.time} onChange={handleChange} required>
        {availableTimes.map((time, index) => <option key={index} value={time}>{time}</option>)}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formData.guests} onChange={handleChange} required />
      
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formData.occasion} onChange={handleChange} required>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />
    </form>
  );
};

// Component to display available time slots
const BookingSlot = ({ availableTimes }) => {
  return (
    <div>
      <h3>Available Slots</h3>
      {availableTimes.map((time, index) => <div key={index}>{time}</div>)}
    </div>
  );
};

export default Booking;
