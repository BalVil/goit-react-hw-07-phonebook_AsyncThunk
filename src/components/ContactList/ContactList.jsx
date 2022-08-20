import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useContactList } from 'hooks/useContactList';
import { getStatus, getError, getFilter } from 'redux/selectors';
import { Notification } from 'components/Notification/Notification';
import { Spinner } from 'components/Spinner/Spinner';

const ContactList = () => {
  const { visibleContacts } = useContactList();
  const status = useSelector(getStatus);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  const noContactFound = visibleContacts.length === 0 && filter;
  const noContacts =
    visibleContacts.length === 0 && !filter && status !== 'fetching';

  return (
    <>
      {status === 'fetching' && !error && <Spinner />}
      <ul>
        {visibleContacts.length > 0 &&
          visibleContacts.map(({ id, name, phone }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                phone={phone}
                id={id}
              ></ContactItem>
            );
          })}
        {noContactFound && (
          <Notification status="info">No contact found</Notification>
        )}
        {noContacts && (
          <Notification status="warning">
            No contacts in the phonebook
          </Notification>
        )}
      </ul>
      {error && (
        <Notification status="error">Something went wrong</Notification>
      )}
    </>
  );
};

export default ContactList;
