import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Contact,
  ContactName,
  ContactNumber,
  DelButton,
} from './ContactItem.styled';
import { showWarning } from 'components/Notification/Notification';
import { Spinner } from 'components/Spinner/Spinner';
import * as contactsOperations from 'redux/operations';
import { getStatus } from 'redux/selectors';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const status = useSelector(getStatus);

  const handleDeleteContact = contactId => {
    dispatch(contactsOperations.deleteContact(contactId));
  };

  useEffect(() => {
    return () => {
      if (status === id) {
        showWarning(`You have removed ${name} contact from your list `);
      }
    };
  }, [id, name, status]);

  return (
    <Contact>
      <ContactName>{name}:</ContactName>
      <ContactNumber>{phone}</ContactNumber>
      <DelButton
        type="button"
        onClick={() => handleDeleteContact(id)}
        disabled={status === id}
      >
        {status === id && <Spinner size={18} />}
        Delete
      </DelButton>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
