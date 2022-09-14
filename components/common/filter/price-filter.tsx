import { Button, Divider, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export interface PriceFilterProps {
  onFilterPrice?: Function;
}

export default function PriceFilter({ onFilterPrice }: PriceFilterProps) {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      minPrice: '',
      maxPrice: '',
    },
    validationSchema: Yup.object({
      minPrice: Yup.string().optional(),
      maxPrice: Yup.string().optional(),
    }),
    onSubmit: (values) => {
      onFilterPrice?.(values);
    },
  });

  return (
    <>
      <Typography pr={2} color="#979697" mb={1}>
        Price:
      </Typography>
      <form onSubmit={formik.handleSubmit}>
        <Stack direction="row">
          <TextField
            id="outlined-size-small"
            // defaultValue="0"
            size="small"
            InputProps={{ inputProps: { min: 0 } }}
            // type="number"
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
            // defaultValue="0"
            size="small"
            InputProps={{ inputProps: { min: 0 } }}
            // type="number"
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
          Apply
        </Button>
      </form>
    </>
  );
}
