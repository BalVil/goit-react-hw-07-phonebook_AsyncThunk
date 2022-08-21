import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useContactList } from 'hooks/useContactList';
import { getStatus, getError } from 'redux/selectors';
import { Notification } from 'components/Notification/Notification';
import { Spinner } from 'components/Spinner/Spinner';
import Filter from 'components/Filter/Filter';
import { showError } from 'components/Notification/Notification';

const ContactList = () => {
  const { FilteredContacts, filter, setFilter } = useContactList();
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const noContactFound = FilteredContacts.length === 0 && filter;
  const noContacts =
    FilteredContacts.length === 0 &&
    !error &&
    !filter &&
    status !== 'idle' &&
    status !== 'fetching';

  useEffect(() => {
    return () => {
      if (error) {
        showError('Something went wrong');
      }
    };
  }, [error]);

  return (
    <>
      {status === 'fetching' && !error && <Spinner />}
      {status !== 'fetching' && <Filter value={filter} onChange={setFilter} />}
      <ul>
        {FilteredContacts.length > 0 &&
          FilteredContacts.map(({ id, name, phone }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                phone={phone}
                id={id}
              ></ContactItem>
            );
          })}
      </ul>
      {noContactFound && (
        <Notification status="info">No contact found</Notification>
      )}
      {noContacts && (
        <Notification status="warning">
          No contacts in the phonebook
        </Notification>
      )}
    </>
  );
};

export default ContactList;
