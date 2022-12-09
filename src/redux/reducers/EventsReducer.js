import { CHANGE_BG_COLOR } from "../types/CalendarTypes";

const initialState = {
  arrayEvent: [
    {
      id: 1,
      name: "Traders Fair 2022 - Ho Chi Minh, ADORA PREMIUM (Financial Education Event)",
      time: "Sat, Dec 10, 10:00",
      img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F376272649%2F239078127498%2F1%2Foriginal.20221019-064143?h=200&w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C14%2C1200%2C600&s=bd15594e54b325ee119fc822a66c4234",
      link: "https://www.eventbrite.sg/e/traders-fair-2022-ho-chi-minh-adora-premium-financial-education-event-tickets-84109288145?aff=ebdssbcitybrowse",
      camera: 'https://www.youtube.com/shorts/XLs9bnltBzs'
    },
    {
      id: 2,
      name: "LTC x CrowdPitch: It's Time for Gen Z Entrepreneurs!",
      time: "Sat, Dec 10, 09:00",
      img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F401473969%2F1225770527453%2F1%2Foriginal.20221129-085835?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=60b94af14160829e11274e195e88f240",
      link: "https://www.eventbrite.sg/e/ltc-x-crowdpitch-its-time-for-gen-z-entrepreneurs-tickets-450270891357?aff=ebdssbcitybrowse&keep_tld=1",
      
    },
    {
      id: 3,
      name: "UXVN Festival 2022",
      time: "Sat, Dec 10, 09:00",
      img: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F405385279%2F1167659699293%2F1%2Foriginal.20221024-155341?w=512&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=8c5ecfa24ba38568e5994dfdb8225eab",
      link: "https://www.eventbrite.sg/e/uxvn-festival-2022-tickets-426586310137?aff=ebdssbcitybrowse&keep_tld=1",
   
    },
  ],
};

export const EventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BG_COLOR: {
      return {...state}
    }
    default:
      return state;
  }
};
