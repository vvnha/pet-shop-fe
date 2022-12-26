import { Button, Divider, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FilterType } from '@/models';
import _get from 'lodash/get';
import { useTrans } from '@/hooks';

export interface PriceFilterProps {
  onFilterPrice?: Function;
  filters: FilterType;
}

export default function PriceFilter({ onFilterPrice, filters }: PriceFilterProps) {
  const trans = useTrans();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      minPrice: _get(filters, 'minPrice', 0),
      maxPrice: _get(filters, 'maxPrice', 100000000),
    },
    validationSchema: Yup.object({
      minPrice: Yup.number().optional(),
      maxPrice: Yup.number().optional(),
    }),
    onSubmit: (values) => {
      onFilterPrice?.(values);
    },
  });

  return (
    <>
      <Typography pr={2} color="#979697" mb={1}>
        {trans.search.price}:
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="row">
          <TextField
            id="outlined-size-small"
            size="small"
            InputProps={{ inputProps: { min: 0 } }}
            type="number"
            sx={{
              mr: 1,
              width: '100px',
            }}
            name="minPrice"
            onChange={formik.handleChange}
            value={formik.values.minPrice}
          />
          <Divider
            sx={{
              width: '10px',
              height: '1px',
              bgcolor: '#3A8DA8',
              margin: 'auto',
            }}
          />
          <TextField
            id="outlined-size-small"
            size="small"
            InputProps={{ inputProps: { min: 0 } }}
            type="number"
            sx={{
              ml: 1,
              width: '100px',
            }}
            name="maxPrice"
            onChange={formik.handleChange}
            value={formik.values.maxPrice}
          />
        </Stack>

        <Button
          variant="outlined"
          size="small"
          sx={{
            mt: 1,
          }}
          type="submit"
          fullWidth
        >
          {trans.search.apply}
        </Button>
      </form>
    </>
  );
}
