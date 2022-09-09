import { PermIdentity, ShoppingCartOutlined } from '@mui/icons-material';
import {
  Box,
  Container,
  Stack,
  SvgIcon,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Link as MuiLink,
} from '@mui/material';
import * as React from 'react';
import GroupIcon from '@/public/Group.svg';
import Link from 'next/link';
import { SearchInput } from '../search-input';

export interface HeaderMobileProps {
  isLoggedIn: boolean;
  logOutClick: Function | undefined;
}

export default function HeaderMobile({ isLoggedIn, logOutClick = undefined }: HeaderMobileProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogOutClick = () => {
    logOutClick?.();
    setAnchorEl(null);
  };
  return (
    <Box display={{ xs: 'block', md: 'none', lg: 'none' }}>
      <Container>
        <Stack alignItems="center" direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" textAlign="center">
            <SvgIcon component={GroupIcon} inheritViewBox />
            <Typography
              sx={{
                fontFamily: 'Pangolin',
                fontStyle: 'normal',
                fontWeight: '700',
                fontSize: '1.5rem',
                lineHeight: '30px',
                color: '#FFAA00',
              }}
            >
              Puphub
            </Typography>
          </Stack>

          <Stack direction="row">
            <Stack direction="column" justifyContent="center" py={1}>
              <IconButton
                sx={{
                  color: 'primary.main',
                }}
              >
                <ShoppingCartOutlined />
              </IconButton>
            </Stack>
            <Stack direction="column" alignItems="center" justifyContent="center" px={1}>
              {!isLoggedIn ? (
                <Box>
                  <Link href="/login" passHref>
                    <MuiLink>Login / Signup</MuiLink>
                  </Link>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    color: 'primary.main',
                    p: 0,
                  }}
                  onClick={handleClick}
                >
                  <PermIdentity />
                </IconButton>
              )}
            </Stack>
          </Stack>
        </Stack>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogOutClick}>Logout</MenuItem>
        </Menu>

        <SearchInput />
      </Container>
    </Box>
  );
}
