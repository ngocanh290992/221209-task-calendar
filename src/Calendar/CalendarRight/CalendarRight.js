import React from "react";
import { useDispatch } from "react-redux";
import { MONTH_SELECTED, NEXT_MONTH, PREV_MONTH, TODAY } from "../../redux/types/DateTypes";
import "./CalendarRight.css";

export default function CalendarRight(props) {
  const {
    date,
    month,
    year,
    renderPrevMonthDays,
    renderMonthDays,
    renderNextMonthDays,
  } = props;

  const dispatch = useDispatch()

  const monthSelected = (e) => {
    date.setMonth(e.target.value)
    dispatch({
      type: MONTH_SELECTED
    })
  }

  return (
    <div className="calendar__right ">
      <div className="pt-4">
        <div className="month__year flex justify-between items-center px-6">
          <div className="flex items-center gap-5">
            <button className="button__today" onClick={ () => {
              dispatch({
                type: TODAY
              })

            }}>To day</button>
            <i className="ri-arrow-left-s-line" onClick={() => {
              date.setMonth(date.getMonth() - 1);
              dispatch({
                type: PREV_MONTH
              });
            }}></i>
            <i className="ri-arrow-right-s-line" onClick={() => {
              date.setMonth(date.getMonth() + 1);
              dispatch({
                type: NEXT_MONTH
              });
            }}></i>

            <span className="text-xl">
              {month} {year}
            </span>
          </div>

          <div className="month__select pr-2">
            <select id="month-selected" className="font-light text-base" defaultValue="" onChange={monthSelected}>
              <option value="" disabled>
                Month
              </option>
              <option value={0}>Jan</option>
              <option value={1}>Feb</option>
              <option value={2}>Mar</option>
              <option value={3}>Apr</option>
              <option value={4}>May</option>
              <option value={5}>Jun</option>
              <option value={6}>Jul</option>
              <option value={7}>Aug</option>
              <option value={8}>Sep</option>
              <option value={9}>Oct</option>
              <option value={10}>Nov</option>
              <option value={11}>Dec</option>
            </select>
          </div>
        </div>

        <div className="weekdays flex justify-around my-2 mt-6 text-zinc-400 text-sm">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="days grid grid-cols-7 justify-items-center text-center items-center mt-4 text-sm">
          {renderPrevMonthDays()}
          {renderMonthDays()}
          {renderNextMonthDays()}
        </div>
      </div>
    </div>
  );
}
