import {
  Box,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  IconButton,
  Pagination,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PetRadioButton from '../common/filter/pet-radio';
import PriceFilter from '../common/filter/price-filter';
import { ProductList, ProductsSection } from '../product';
import { FilterAltOutlined } from '@mui/icons-material';
import Filter from '../common/filter';

export interface FilterPageProps {}
type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function FilterPage(props: FilterPageProps) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <Stack direction="row" p={1}>
      <Stack
        direction="column"
        width="250px"
        display={{
          xs: 'none',
          md: 'block',
          lg: 'block',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Pangolin',
            fontWeight: '500',
            fontStyle: 'normal',
            fontSize: '28px',
            lineHeight: '35px',
            color: 'primary.main',
          }}
        >
          Filters
        </Typography>
        <Filter />
      </Stack>
      <Stack>
        <Stack
          display={{
            xs: 'block',
            md: 'none',
            lg: 'none',
          }}
          direction="row"
        >
          <Stack direction="row" alignItems="center" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer('right', true)} sx={{ color: 'primary.main' }}>
              <FilterAltOutlined />
              <Typography>Filters</Typography>
            </IconButton>
          </Stack>
        </Stack>
        <Stack justifyContent="center" p={4}>
          <ProductList productsPerRow={3} />
          <Pagination
            sx={{
              margin: 'auto',
              pt: 2,
              fontFamily: 'Rubik',
            }}
            count={3}
            color="primary"
          />
        </Stack>
      </Stack>
      <Drawer anchor={'right'} open={state['right']} onClose={toggleDrawer('right', false)}>
        <IconButton>
          <Typography
            sx={{
              fontFamily: 'Pangolin',
              fontWeight: '500',
              fontStyle: 'normal',
              fontSize: '28px',
              lineHeight: '35px',
              color: 'primary.main',
            }}
          >
            Filters
          </Typography>
        </IconButton>
        <Filter />
      </Drawer>
    </Stack>
  );
}
