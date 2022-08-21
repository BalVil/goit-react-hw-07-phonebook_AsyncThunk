import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  showSuccess,
  showWarning,
  showError,
} from 'components/Notification/Notification';
import { contactsActions } from 'redux/contactsSlice';
import { getItems, getStatus, getError } from 'redux/selectors';

export const useAddContact = () => {
  const [inputs, setInputs] = useState({});

  const contactsItems = useSelector(getItems);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  const handleChange = e => {
    const nameInput = e.target.name;
    const value = e.target.value;
    setInputs(values => ({ ...values, [nameInput]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const sameName =
      contactsItems.findIndex(
        item => item.name.toLowerCase() === inputs.name.toLowerCase()
      ) !== -1;

    if (sameName) {
      showWarning(`${inputs.name} is already in contacts `);
      return;
    }

    dispatch(contactsActions.addContact(inputs));

    setInputs({});
  };

  useEffect(() => {
    if (status === 'addSuccess') {
      showSuccess('Contact added');
    }
    if (error) {
      showError('Something went wrong');
    }
  }, [error, status]);

  return { inputs, handleChange, handleSubmit, status };
};
