import {
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import * as React from 'react';
import { SvgIcon, Link as MuiLink } from '@mui/material';
import GroupIcon from '@/public/Group.svg';
import { PermIdentity, ShoppingCartOutlined, Search } from '@mui/icons-material';
import Link from 'next/link';
import { SearchInput } from './search-input';
import { useRouter } from 'next/router';
import { useTrans } from '@/hooks';
import Language from './language';

export interface HeaderDeskTopProps {
  isLoggedIn: boolean;
  logOutClick: Function | undefined;
}

export default function HeaderDeskTop({ isLoggedIn, logOutClick = undefined }: HeaderDeskTopProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const trans = useTrans();

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

  const handleClickOrder = () => {
    router.push('/orders/history');
  };

  return (
    <Box display={{ xs: 'none', md: 'block', lg: 'block' }} px={2} py={2}>
      <Container>
        <Stack alignItems="center" direction="row" justifyContent="space-between">
          <Stack direction="row" alignItems="center" textAlign="center" mr={2}>
            <SvgIcon
              component={GroupIcon}
              sx={{
                width: '50px',
                height: '47px',
              }}
              inheritViewBox
            />
            <Link href="/" passHref>
              <MuiLink
                sx={{
                  fontFamily: 'Pangolin',
                  fontStyle: 'normal',
                  fontWeight: '700',
                  fontSize: '1.5rem',
                  lineHeight: '30px',
                  color: '#FFAA00',
                }}
              >
                Pethub
              </MuiLink>
            </Link>
          </Stack>

          <Stack flexGrow={1} px={3}>
            <SearchInput />
          </Stack>

          <Stack direction="row">
            <Stack direction="column" justifyContent="center" px={2}>
              <Language />
            </Stack>
            <Stack direction="column" justifyContent="center" px={2}>
              <Link href="/cart" passHref>
                <MuiLink color="primary.main">
                  <IconButton
                    sx={{
                      color: 'primary.main',
                      p: 0,
                    }}
                  >
                    <ShoppingCartOutlined />
                  </IconButton>
                </MuiLink>
              </Link>
            </Stack>
            <Stack direction="column" alignItems="center" justifyContent="center" px={2}>
              {isLoggedIn ? (
                <IconButton
                  sx={{
                    color: 'primary.main',
                    p: 0,
                  }}
                  onClick={handleClick}
                >
                  <PermIdentity />
                </IconButton>
              ) : (
                <Box>
                  <Link href="/login" passHref>
                    <MuiLink color="primary.main">
                      {trans.login} / {trans.signup}
                    </MuiLink>
                  </Link>
                </Box>
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
          <MenuItem onClick={handleClose}>{trans.header.profile}</MenuItem>
          <MenuItem onClick={handleClickOrder}>{trans.header.order}</MenuItem>
          <MenuItem onClick={handleLogOutClick}>{trans.logout}</MenuItem>
        </Menu>
      </Container>
    </Box>
  );
}
