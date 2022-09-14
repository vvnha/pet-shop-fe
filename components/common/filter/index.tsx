import { Button, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PetRadioButton from './pet-radio';
import PriceFilter from './price-filter';
import { ArrowUpwardOutlined, ArrowDownwardOutlined } from '@mui/icons-material';
import { FilterType, Pet } from '@/models';
import { useRouter } from 'next/router';

export interface FilterProps {
  petList?: Pet[];
  onFilterChange?: Function;
}

export default function Filter({ petList = [], onFilterChange }: FilterProps) {
  const router = useRouter();

  const [filters, setFilters] = useState<FilterType>({
    text: '',
    minPrice: 0,
    maxPrice: 100000000,
    pet: '',
    sortType: 'desc',
  });

  useEffect(() => {
    setFilters((prevFilter) => ({
      ...prevFilter,
      minPrice: Number(router.query?.minPrice) || 0,
      maxPrice: Number(router.query?.maxPrice) || 100000000,
      pet: router.query?.pet?.toString() || '',
      sortType: router.query?.sortType?.toString() || 'desc',
    }));
  }, [router]);

  const handleFilterPrice = ({ minPrice, maxPrice }: { minPrice: number; maxPrice: number }) => {
    let newFilter: FilterType = { ...filters, minPrice, maxPrice };

    if ((minPrice === 0 && maxPrice === 0) || maxPrice < minPrice) {
      delete newFilter.minPrice;
      delete newFilter.maxPrice;
    }

    setFilters(newFilter);
    onFilterChange?.(newFilter);
  };

  const handleAnmialTypeChange = (pet: string) => {
    let newFilter: FilterType = { ...filters, pet };
    if (pet === 'default') {
      delete newFilter.pet;
    }

    setFilters(newFilter);
    onFilterChange?.(newFilter);
  };

  const SortIcon =
    filters.sortType === 'desc' ? (
      <ArrowDownwardOutlined fontSize="small" />
    ) : (
      <ArrowUpwardOutlined fontSize="small" />
    );

  const handleChangeSort = () => {
    const newType = filters.sortType === 'desc' ? 'incre' : 'desc';

    let newFilter: FilterType = { ...filters, sortType: newType };

    setFilters(newFilter);
    onFilterChange?.(newFilter);
  };

  return (
    <Stack p={1}>
      <Stack direction="column">
        <PetRadioButton
          groupLabel="Animals"
          optionList={petList}
          onAnmialTypeChange={handleAnmialTypeChange}
          filters={filters}
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
        <PriceFilter onFilterPrice={handleFilterPrice} filters={filters} />
      </Stack>
    </Stack>
  );
}
