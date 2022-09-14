import { Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import PetRadioButton from './pet-radio';
import PriceFilter from './price-filter';
import { ArrowUpwardOutlined, ArrowDownwardOutlined } from '@mui/icons-material';
import { Pet } from '@/models';
export interface FilterProps {
  petList?: Pet[];
}

export default function Filter({ petList = [] }: FilterProps) {
  const [sortType, setSortType] = useState('desc');

  const handleFilterPrice = (priceFilter: any) => {
    console.log(priceFilter);
  };

  const handleAnmialTypeChange = (pet: string) => {
    console.log(pet);
  };

  const SortIcon =
    sortType === 'desc' ? (
      <ArrowDownwardOutlined fontSize="small" />
    ) : (
      <ArrowUpwardOutlined fontSize="small" />
    );

  const handleChangeSort = () => {
    setSortType((type) => {
      return type === 'desc' ? 'incre' : 'desc';
    });
  };

  return (
    <Stack p={1}>
      <Stack direction="column">
        <PetRadioButton
          groupLabel="Animals"
          optionList={petList}
          onAnmialTypeChange={handleAnmialTypeChange}
        />
      </Stack>
      <Stack direction="column">
        <Typography pr={2} color="#979697" mt={1}>
          Sort:
        </Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{
            mt: 1,
          }}
          onClick={handleChangeSort}
        >
          Price {SortIcon}
        </Button>
      </Stack>
      <Stack direction="column" mt={2}>
        <PriceFilter onFilterPrice={handleFilterPrice} />
      </Stack>
    </Stack>
  );
}
