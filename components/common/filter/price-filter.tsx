import { Button, Divider, Stack, TextField, Typography } from '@mui/material';
import * as React from 'react';

export interface PriceFilterProps {}

export default function PriceFilter(props: PriceFilterProps) {
  return (
    <>
      <Typography pr={2} color="#979697" mb={1}>
        Price:
      </Typography>
      <Stack direction="row">
        <TextField
          id="outlined-size-small"
          defaultValue="0"
          size="small"
          InputProps={{ inputProps: { min: 0 } }}
          type="number"
          sx={{
            mr: 1,
            width: '100px',
          }}
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
          defaultValue="0"
          size="small"
          InputProps={{ inputProps: { min: 0 } }}
          type="number"
          sx={{
            ml: 1,
            width: '100px',
          }}
        />
      </Stack>

      <Button
        variant="outlined"
        size="small"
        sx={{
          mt: 1,
        }}
      >
        Apply
      </Button>
    </>
  );
}
