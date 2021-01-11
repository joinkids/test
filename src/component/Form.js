import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Form() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
    return (
      <>
      <div className='widgetForm'>
        <div className='title'>
          <p>Where does it come from? Why do we use it?</p>
        </div>
        <div className='description'>
          <p>It is a long established fact that a reader will be
          distracted by the readable content of a page when
          lookink at its layout</p>
          <form className='form'>
            <DatePicker
            className='datepick1' 
            placeholderText ='Depart date'
            selected={startDate} 
            onChange={date => setStartDate(date)}
            dateFormat='dd/MM/yyyy' 
            />
            <DatePicker
            className='datepick2' 
            placeholderText ='Report date'
            selected={endDate} 
            onChange={date => setEndDate(date)} 
            dateFormat='dd/MM/yyyy' 
            />
            <button type ='submit' className='subbtn'>SEARCH</button>
          </form>
        </div>
      </div>
      </>
    );
};
