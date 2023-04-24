import {
  DELETE_DATA,
  // FETCH_INBOX,
  // FETCH_SPAM,
  VIEW_DATA,
  TRACK_SIDEBAR,
} from "./action";
const initialState = {
  inbox: [
    {
      mId: "guid-1",
      unread: true,
      category: "inbox",

      subject: "Training Program",
      content:
        "About Microsoft Virtual Academy<br/>Microsoft Virtual Academy provides free online training by world-class experts to help you build your technical skills and advance your career. Make it your destination of choice to get started on the latest Microsoft technologies and join this vibrant community.",
    },
    {
      mId: "guid-2",
      unread: false,
      category: "inbox",
      subject: "Empower your future",
      content:
        "We foster our pipeline of future leaders with 47 employee networks and 7 global employee resource groups, servicing an active community of thousands across Microsoft",
    },
  ],
  spam: [
    {
      mId: "guid-3",
      unread: true,
      category: "spam",
      subject: "Pre Approved Loan",
      content:
        "Congratulations ! <u>Credit card<u> is being shipped to you today!",
    },
    {
      mId: "guid-4",
      unread: true,
      category: "spam",
      subject: "You won a lottery!",
      content:
        "You have just won the New York official lottery. Please send us your address so that we may start the transfer.",
    },
  ],
  trash: [],
  displaydata: [], // trash
  selectedSideBar: "inbox",
  displaymsg: {
    mId: "",
    unread: null,
    subject: "",
    content: "",
  },
};

export const reducer = (state = initialState, action) => {
  if (action.type === TRACK_SIDEBAR) {
    console.log(state.selectedSideBar);
    return {
      ...state,
      displaydata: state[action.payload],
      selectedSideBar: action.payload,
    };
  } else if (action.type === VIEW_DATA) {
    return {
      ...state,
      displaymsg: state.displaydata.find(
        (ele) => ele.mId === action.payload.id
      ),
    };
  } else if (action.type === DELETE_DATA) {
    return {
      ...state,
      [action.payload.category]: state[action.payload.category].filter(
        (e) => e.mId !== action.payload.id
      ),
      displaydata: state.displaydata.filter(
        (ele) => ele.mId !== action.payload.id
      ),
      displaymsg: {
        mId: "",
        unread: "",
        subject: "",
        content: "",
      },
      trash: [
        ...state.trash,
        state[action.payload.category].find((e) => e.mId === action.payload.id),
      ],
    };
  } else {
    return state;
  }
};
