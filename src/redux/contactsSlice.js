import { createSlice } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    status: 'idle', // 'fetching' | 'fetchSuccess' | 'delSuccess' | 'addSuccess' | 'failed'
    error: null,
  },

  // 'immer' для мутації копію стану
  extraReducers: {
    [getContacts.pending]: (state, _) => {
      state.status = 'fetching';
    },
    [getContacts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'fetchSuccess';
    },
    [getContacts.rejected]: (state, action) => {
      state.error = action.payload;
      // state.status = 'failed';
    },

    [deleteContact.pending]: (state, action) => {
      const deleteId = action.meta.arg;
      state.status = deleteId;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
      state.status = 'delSuccess';
    },
    [deleteContact.rejected]: (state, action) => {
      state.error = action.payload;
      // state.status = 'failed';
    },

    [addContact.pending]: (state, _) => {
      state.status = 'adding';
    },
    [addContact.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.status = 'addSuccess';
    },
    [addContact.rejected]: (state, action) => {
      state.error = action.payload;
      // state.status = 'failed';
    },
  },
});

export const contactsActions = {
  ...contactsSlice.actions,
  getContacts,
  deleteContact,
  addContact,
};
export const contactsReducer = contactsSlice.reducer;
