import { DebounceInput } from 'react-debounce-input';
import { Label, LabelTitle } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Label>
      <LabelTitle>Find contacts by name</LabelTitle>
      <DebounceInput
        debounceTimeout={300}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        name="filter"
      />
    </Label>
  );
};
export default Filter;
