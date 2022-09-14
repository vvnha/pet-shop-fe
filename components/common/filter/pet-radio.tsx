import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Pet } from '@/models';
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export interface PetRadioButtonProps {
  groupLabel?: string;
  optionList?: [];
}

const temp: Pet[] = [
  {
    name: 'Default',
    _id: 'Default',
    description: 'ABC',
  },
  {
    name: 'Cat',
    _id: '1',
    description: 'ABC',
  },
  {
    name: 'Dog',
    _id: '2',
    description: 'ABC',
  },
  {
    name: 'Rabbit',
    _id: '3',
    description: 'ABC',
  },
];

export default function PetRadioButton(props: PetRadioButtonProps) {
  const { groupLabel = 'Gender', optionList = temp } = props;

  const [animal, setAnimal] = React.useState('Default');

  const handleChange = (event: SelectChangeEvent) => {
    setAnimal(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{groupLabel}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={animal}
          label={groupLabel}
          onChange={handleChange}
        >
          {optionList.map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
