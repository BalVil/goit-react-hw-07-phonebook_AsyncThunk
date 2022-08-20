import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getFilter } from 'redux/selectors';
import * as contactsOperations from 'redux/operations';

export const useContactList = () => {
  const items = useSelector(getItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.getContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();

    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = getFilteredContacts();
  return { visibleContacts };
};
