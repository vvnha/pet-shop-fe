import { Search } from '@mui/icons-material';
import { Box, Button, IconButton, Input, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export function SearchInput() {
  const [text, setText] = useState('');
  const router = useRouter();

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onSearchClick = () => {
    if (text.length < 1) return;

    router.push(
      {
        pathname: '/search',
        query: {
          text: text,
          _page: 1,
          _limit: 8,
        },
      },
      undefined,
      { shallow: true }
    );
  };

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
        onChange={handleChangeInput}
      />

      <Button variant="contained" onClick={onSearchClick}>
        <Search fontSize="small" />
      </Button>
    </Stack>
  );
}
