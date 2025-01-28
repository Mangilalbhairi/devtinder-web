import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./feedSlice";
import connectionReducer from "./connectionSlice";
import requestsReducer from "../utils/requestSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    connnection: connectionReducer,
    requests: requestsReducer,
  },
});

export default store;
