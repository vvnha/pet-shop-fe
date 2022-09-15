import { Box, Container, Divider, Pagination, Stack, Typography } from '@mui/material';

import React, { useState } from 'react';

export interface PaginationComponentProps {
  count?: number;
  onChangePagination?: Function;
  currentPage?: number;
}

export default function PaginationComponent({
  count = 1,
  onChangePagination,
  currentPage = 1,
}: PaginationComponentProps) {
  const [page, setPage] = useState(currentPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

    onChangePagination?.(value);
  };

  return (
    <Pagination
      sx={{
        margin: 'auto',
        fontFamily: 'Rubik',
        mt: 2,
      }}
      count={count}
      color="primary"
      page={page}
      onChange={handleChange}
    />
  );
}
