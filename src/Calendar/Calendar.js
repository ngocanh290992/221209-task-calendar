import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_BG_COLOR } from "../redux/types/CalendarTypes";
import CalendarLeft from "./CalendarLeft/CalendarLeft";
import CalendarRight from "./CalendarRight/CalendarRight";

export default function Calendar() {
  const { months, date } = useSelector((state) => state.DateReducer);
  const {arrayDaysSelected} = useSelector(state => state.CalendarReducer);
  
  const dispatch = useDispatch()

  const month = months[date.getMonth()];
  const year = date.getFullYear();

  date.setDate(1)

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const renderPrevMonthDays = () => {
    let prevMonthDays = [];
    for (let i = firstDayIndex; i > 0; i--) {
      prevMonthDays.push(prevLastDay - i + 1);
    }
    return prevMonthDays.map((day, index) => {
      let jsonDay = JSON.stringify({
        day: day,
        month: date.getMonth() -1,
        year: date.getFullYear()
      })
      let styleBgColor = arrayDaysSelected.findIndex(daySelect => JSON.stringify(daySelect) === jsonDay) !== -1 ? '#E4F6ED' : ''


      return (
        <div key={index} className="prev-day" style={{backgroundColor:`${styleBgColor}`}} onClick={ () => {
          let daySelected = {
            day: day,
            month: date.getMonth() -1,
            year: date.getFullYear()
          }
          dispatch({
            type: CHANGE_BG_COLOR,
            daySelected
          })
        }}>
          {day}
        </div>
      );
    });
  };

  const renderMonthDaysLeft = () => {
    let monthDays = [];
    for (let i = 1; i <= lastDay; i++) {
      monthDays.push(i);
    }
    return monthDays.map((day, index) => {
      let jsonDay = JSON.stringify({
        day: day,
        month: date.getMonth(),
        year: date.getFullYear()
      })
      let styleBgColor = arrayDaysSelected.findIndex(daySelect => JSON.stringify(daySelect) === jsonDay) !== -1 ? '#E4F6ED' : ''

      if (
        day === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() && 
        date.getFullYear() === new Date().getFullYear()
      ) {
        return (
          <div key={index} className="today" onClick={ () => {
            let daySelected = {
              day: day,
              month: date.getMonth(),
              year: date.getFullYear()
            }
            dispatch({
              type: CHANGE_BG_COLOR,
              daySelected
            })
          }}>
            <div>
            {day}
            </div>
          </div>
        );
      } else {
        return <div key={index} style={{backgroundColor:`${styleBgColor}`}} onClick={ () => {
          let daySelected = {
            day: day,
            month: date.getMonth(),
            year: date.getFullYear()
          }
          dispatch({
            type: CHANGE_BG_COLOR,
            daySelected
          })
        }}>{day}</div>;
      }
    });
  };

  const renderEventMini = () => {

  }

  const renderMonthDaysRight = () => {
    let monthDays = [];
    for (let i = 1; i <= lastDay; i++) {
      monthDays.push(i);
    }
    return monthDays.map((day, index) => {
      let jsonDay = JSON.stringify({
        day: day,
        month: date.getMonth(),
        year: date.getFullYear()
      })
      let styleBgColor = arrayDaysSelected.findIndex(daySelect => JSON.stringify(daySelect) === jsonDay) !== -1 ? '#E4F6ED' : ''

      if (
        day === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() && 
        date.getFullYear() === new Date().getFullYear()
      ) {
        return (
          <div key={index} className="today" style={{backgroundColor:`${styleBgColor}`}} onClick={ () => {
            let daySelected = {
              day: day,
              month: date.getMonth(),
              year: date.getFullYear()
            }
            dispatch({
              type: CHANGE_BG_COLOR,
              daySelected
            })
          }}>
            <div>
            {day}
            </div>
            {renderEventMini()}
          </div>
        );
      } else {
        return <div key={index} style={{backgroundColor:`${styleBgColor}`}} onClick={ () => {
          let daySelected = {
            day: day,
            month: date.getMonth(),
            year: date.getFullYear()
          }
          dispatch({
            type: CHANGE_BG_COLOR,
            daySelected
          })
        }}>{day}</div>;
      }
    });
  };

  const renderNextMonthDays = () => {
    let nextMonthDays = [];
    for (let i = 1; i <= nextDays; i++) {
      nextMonthDays.push(i);
    }

    return nextMonthDays.map((day, index) => {
      let jsonDay = JSON.stringify({
        day: day,
        month: date.getMonth() + 1,
        year: date.getFullYear()
      })
      let styleBgColor = arrayDaysSelected.findIndex(daySelect => JSON.stringify(daySelect) === jsonDay) !== -1 ? '#E4F6ED' : ''

      return (
        <div key={index} className="next-day" style={{backgroundColor:`${styleBgColor}`}} onClick={ () => {
          let daySelected = {
            day: day,
            month: date.getMonth() + 1,
            year: date.getFullYear()
          }
          dispatch({
            type: CHANGE_BG_COLOR,
            daySelected
          })
        }}>
          {day}
        </div>
      );
    });
  };

  return (
      <div className="calendar grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 justify-items-center lg:justify-items-stretch sm:px-28 md:px-36 lg:px-20 gap-y-8  lg:gap-8 min-h-screen pt-4 px-20 " style={{backgroundColor:'#E4F6ED'}}>
        <div className=" bg-white border-2 border-solid border-slate-500/30 rounded">
          <CalendarLeft date={date} month={month} year={year} months={months} renderPrevMonthDays={renderPrevMonthDays} renderMonthDays={renderMonthDaysLeft} renderNextMonthDays={renderNextMonthDays}/>
        </div>
        <div className=" xl:col-span-3 bg-white border-2 border-solid border-slate-500/30 rounded h-min">
          <CalendarRight date={date} month={month} year={year} months={months} renderPrevMonthDays={renderPrevMonthDays} renderMonthDays={renderMonthDaysRight} renderNextMonthDays={renderNextMonthDays}/>
        </div>
      </div>
   
  );
}
