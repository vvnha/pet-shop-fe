import { Button, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import PetRadioButton from './pet-radio';
import PriceFilter from './price-filter';
import { ArrowUpwardOutlined, ArrowDownwardOutlined } from '@mui/icons-material';
export interface FilterProps {}

export default function Filter(props: FilterProps) {
  const [sortType, setSortType] = useState('desc');

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
        <PetRadioButton groupLabel="Animals" />
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
          Sort {SortIcon}
        </Button>
      </Stack>
      <Stack direction="column" mt={2}>
        <PriceFilter />
      </Stack>
    </Stack>
  );
}
