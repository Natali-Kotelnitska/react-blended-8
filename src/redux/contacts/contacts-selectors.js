import { createSelector } from '@reduxjs/toolkit';

const getContacts = state => state.contacts;

const contactsSelectors = {
  getContacts,
};
export default contactssSelectors;
