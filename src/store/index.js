import {configureStore} from "@reduxjs/toolkit";
import globalReducer from "./global";
import searchSlice from "./search";

const store = configureStore({
  reducer: {
    global: globalReducer,
    search: searchSlice,
  },
});

export default store;
