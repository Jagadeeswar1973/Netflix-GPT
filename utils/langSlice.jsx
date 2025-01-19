import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "lang",
  initialState: {
    lang: "en",
  },

  reducers: {
    toggleLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});
export const { toggleLanguage } = langSlice.actions;
export default langSlice.reducer;
