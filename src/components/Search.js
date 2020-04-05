import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Switch from '@material-ui/core/Switch';
import Input from '@material-ui/core/Input';

function Search({ onChange }) {
  const handleChange = (event, value) => {
    onChange({
      [event.target.name]: !!value ? value : undefined,
    });
  };

  return (
    <FormGroup row className="m-4">
      <Input
        onChange={e => handleChange(e, e.target.value.trim())}
        placeholder="Search by name"
        name="name"
      />
      <FormControlLabel
        className="ml-2"
        control={<Switch onChange={handleChange} name="isStared" />}
        label="Show starred only"
      />
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="sex"
          onChange={handleChange}
          style={{ flexDirection: 'row' }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="" control={<Radio />} label="None" />
        </RadioGroup>
      </FormControl>
    </FormGroup>
  );
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Search;
