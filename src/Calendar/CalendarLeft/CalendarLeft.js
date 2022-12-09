import React from "react";
import "./CalendarLeft.css";
import { useDispatch, useSelector } from "react-redux";
import { NEXT_MONTH, PREV_MONTH } from "../../redux/types/DateTypes";

/* #5684AE; Light Blue
 #0F4C81; Dark Blue
 #FFE4C8; Light Orange
 #F9BE81; Dark Orange
 #E4F6ED; Calendar Tile Color */
export default function CalendarLeft(props) {
  const {
    date,
    month,
    year,
    months,
    renderPrevMonthDays,
    renderMonthDays,
    renderNextMonthDays,
  } = props;

  const dispatch = useDispatch();

  const { arrayEvent } = useSelector((state) => state.EventsReducer);

  const arrayColor = [
    {
      colorDecor: "#0F4C81",
      colorBackground: "#FFE4C8",
      colorCameraBG: "#5684AE",
      colorCamera: "#FFFFFF",
      colorLink: "#5684AE",
    },
    {
      colorDecor: "#5684AE",
      colorBackground: "#F9BE81",
      colorCameraBG: "#0F4C81",
      colorCamera: "#FFFFFF",
      colorLink: "#0F4C81",
    },
    {
      colorDecor: "#F9BE81",
      colorBackground: "#5684AE",
      colorCameraBG: "#FFFFFF",
      colorCamera: "#0F4C81",
      colorLink: "#FFFFFF",
    },
  ];

  const renderEvents = () => {
    return arrayEvent.map((event, index) => {
      const color = arrayColor[Math.floor(Math.random() * 3)];

      return (
        <div
          key={index}
          className="event min-h-[100px] rounded-xl relative overflow-hidden pl-6 py-4 mb-2"
          style={{ backgroundColor: `${color.colorBackground}` }}
        >
          <div
            className="event__decor absolute min-w-full min-h-[100%]"
            style={{ backgroundColor: `${color.colorDecor}` }}
          ></div>

          <div
            className="event__camera"
            style={{
              backgroundColor: `${color.colorCameraBG}`,
              color: `${color.colorCamera}`,
            }}
          >
            <a href={event.camera} target='_blank' rel="noreferrer">
              <i className="ri-vidicon-line"></i>
            </a>
          </div>

          <h3 className="event__title">{event.name}</h3>
          <p className="event__subtitle">{event.time}</p>

          <div className="event__view mt-2 flex items-center gap-3">
            <img src={event.img} alt="client" className="rounded-full" />
            <a
              className="underline underline-offset-2"
              style={{ color: `${color.colorLink}` }}
              href={event.link}
              target="_blank"
              rel="noreferrer"
            >
              View Client Profile
            </a>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="calendar__left py-2">
      <div className="calendar__left-top p-4 px-8">
        <div className="month__year flex justify-center items-center">
          <i
            className="ri-arrow-left-s-line"
            onClick={() => {
              date.setMonth(date.getMonth() - 1);
              dispatch({
                type: PREV_MONTH,
              });
            }}
          ></i>
          <span className="month mr-2 ml-4">{month.substr(0, 3)}</span>
          <span className="year mr-4">{year}</span>
          <i
            className="ri-arrow-right-s-line"
            onClick={() => {
              date.setMonth(date.getMonth() + 1);
              dispatch({
                type: NEXT_MONTH,
              });
            }}
          ></i>
        </div>

        <div className="weekdays flex justify-between px-2 my-2 text-zinc-400 text-sm">
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>

        <div className="days grid grid-cols-7 text-center items-center gap-y-2 mt-4 text-sm">
          {renderPrevMonthDays()}
          {renderMonthDays()}
          {renderNextMonthDays()}
        </div>
      </div>

      <div className="bg-slate-400 w-full min-h-[1px] shadow-inner"></div>

      <div className="calendar__left-bot p-6">
        <div className="calendar__left-title flex justify-between items-center">
          <h3 className="text-lg font-semibold">Upcoming Events</h3>
          <div className="view__all text-sm rounded-full p-1 px-3 font-thin cursor-pointer">
            <a
              href="https://www.eventbrite.sg/"
              target="_blank"
              rel="noreferrer"
            >
              View all
            </a>
          </div>
        </div>

        <div className="calendar__left-subtitle mt-2 font-semibold opacity-50">
          Today, {new Date().getDate()}{" "}
          {months[new Date().getMonth()].substr(0, 3)}
        </div>

        <div className="events py-4 ">{renderEvents()}</div>
      </div>
    </div>
  );
}
