import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};
const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    remove: (state, { payload }) => {
      state.contacts = [...state.contacts].filter(({ id }) => id !== payload);
    },
  },
});
export const { addContact } = contactSlice.action;

export default contactSlice.reducer;
