import { useSelector, useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { Label, LabelTitle } from './Filter.styled';
import { contactsActions } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const { value } = useSelector(getFilter);

  const dispatch = useDispatch();

  return (
    <Label>
      <LabelTitle>Find contacts by name</LabelTitle>
      <DebounceInput
        debounceTimeout={300}
        type="text"
        value={value}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        name="filter"
      />
    </Label>
  );
};
export default Filter;
