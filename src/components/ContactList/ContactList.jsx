import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useContactList } from 'hooks/useContactList';
import { getStatus, getError } from 'redux/selectors';
import { Notification } from 'components/Notification/Notification';
import { Spinner } from 'components/Spinner/Spinner';
import Filter from 'components/Filter/Filter';

const ContactList = () => {
  const { FilteredContacts, filter, setFilter } = useContactList();
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const noContactFound = FilteredContacts.length === 0 && filter;
  const noContacts =
    FilteredContacts.length === 0 && status !== 'idle' && status !== 'fetching';

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
