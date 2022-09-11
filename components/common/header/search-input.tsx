import { Search } from '@mui/icons-material';
import { Box, Button, IconButton, Input, Stack, TextField } from '@mui/material';
import * as React from 'react';

export function SearchInput() {
  return (
    <Stack
      direction="row"
      flexGrow={1}
      justifyContent="center"
      boxShadow="rgb(98 98 98 / 50%) 0px 1px 2px 0px;"
      boxSizing="border-box"
    >
      {/* <TextField
        placeholder="Search..."
        sx={{
          width: '100%',
          outline: 'none',
          border: 0,
          fontSize: '13px',
          height: '40px',
          p: 0,
        }}
      /> */}
      <Input
        placeholder="Search product..."
        disableUnderline={true}
        sx={{
          outline: 'none',
          p: '0px 12px',
          borderRadius: '2px 0px 0px 2px',
          fontSize: '13px',
          width: '100%',
        }}
      />

      <Button variant="contained">
        <Search fontSize="small" />
      </Button>
    </Stack>
  );
}
