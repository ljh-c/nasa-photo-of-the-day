import React from 'react';
import InputDay from './InputDay';

export default function AboveTheFold({ date, url, title, explanation, changeDate }) {
  // * * * * DISPLAYS LOADING MESSAGE WHILE DATA IS FETCHING
  if (!url) return <h2>Loading...</h2>;

  // * * * * DATE IN MONTH DAY, YEAR FORMAT
  const MonthDayYear = (date) => {
    const dateArray = date.split('-');
    let month = dateArray[1];
    let day = dateArray[2];

    switch (month) {
      case '01':
        month = "January";
        break;
      case '02':
        month = "February";
        break;
      case '03': 
        month = "March";
        break;
      case '04':
        month = "April";
        break;
      case '05':
        month = "May";
        break;
      case '06': 
        month = "June";
        break;
      case '07':
        month = "July";
        break;
      case '08':
        month = "August";
        break;
      case '09':
        month = "September";
        break;
      case '10':
        month = "October";
        break;
      case '11': 
        month = "November";
        break;
      case '12':
        month = "December";
        break;
      default:
    }

    // remove leading zero from day
    day = day < 10 ? day.substring(1) : day;

    switch (day) {
      case '1':
      case '21':
      case '31':
        day += 'st';
        break;
      case '2':
      case '22':
        day += 'nd';
        break;
      case '3':
      case '23':
        day += 'rd';
        break;
      default:
        day += 'th';
    }

    return `${month} ${day}, ${dateArray[0]}`;
  }

  return (
    <div className='AboveTheFold'>
      <h1>Astronomy Photo of the Day
        <span>from NASA</span>
      </h1>
      <h2>{MonthDayYear(date)}</h2>
      <img src={url} alt='Astronomy of the Day' /><br />
      <h3>{title}</h3>
      <p>{explanation}</p>
      <InputDay changeDate={changeDate} />
    </div>
  );
}