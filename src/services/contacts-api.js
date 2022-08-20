import axios from 'axios';

axios.defaults.baseURL = 'https://62f844a0e80ba330f4b9057f.mockapi.io/';

export const fetchItems = async () => {
  const { data } = await axios(`contacts`);
  return data;
};

export const addItem = async newContact => {
  const { data } = await axios.post(`contacts`, newContact);
  return data;
};

export const deleteItem = async id => {
  const { data } = await axios.delete(`contacts/${id}`);
  return data;
};
