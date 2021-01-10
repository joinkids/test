import React, { Component } from 'react';
import logo from '../component/calendar.svg'


export default function Form() {
  
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
            <input placeholder='Deport date' className='datepick1'/>
            <input placeholder='Return date' className='datepick2'/>
            <button type ='submit' className='subbtn'>SEARCH</button>
          </form>
            
        </div>
      </div>
      </>
    );
}



{/* <>
      <div className='widgetForm'>
        <div className='title'>
          <p>Where does it come from? Why do we use it?</p>
        </div>
        <div className='description'>
          <p>It is a long established fact that a reader will be
          distracted by the readable content of a page when
          lookink at its layout</p>
          <form id='form'>
            <select className='datepick1'>
              <option selected disabled hidden>Depart date</option>
            </select>
            <select className='datepick2'>
              <option selected disabled hidden>Return date</option>
            </select>
            <button type ='submit' className='subbtn'>SEARCH</button>
          </form> 
        </div>
      </div>
      </> */}