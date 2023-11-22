import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home', 'Data Domains'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{
          width: '90%',
          marginLeft: '4%',
        }}>
          <svg width="50" height="24" viewBox="0 0 50 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Logo">
              <path id="Fill 1" fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 24H37.2213V0H12.4072V24Z" fill="white" />
              <path id="Fill 3" fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 0L24.8143 12L37.2213 0H12.4072Z" fill="#DB0011" />
              <path id="Fill 5" fill-rule="evenodd" clip-rule="evenodd" d="M12.4072 24H37.2213L24.8143 12L12.4072 24Z" fill="#DB0011" />
              <path id="Fill 2" fill-rule="evenodd" clip-rule="evenodd" d="M37.2212 24L49.6282 12L37.2212 0V24Z" fill="#DB0011" />
              <path id="Fill 4" fill-rule="evenodd" clip-rule="evenodd" d="M0 12L12.3518 23.9805L12.407 24V0L0 12Z" fill="#DB0011" />
            </g>
          </svg>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
              fontWeight: 500,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Data Portal
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              // fontFamily: 'monospace',
              fontWeight: 400,
              // letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Data Portal
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="Icon colour" fill-rule="evenodd" clip-rule="evenodd" d="M21.588 16.7C21.324 16.048 20.9507 15.4413 20.46 14.9373C19.2933 13.736 17.8333 12.8267 16.1107 12.268L12.0133 16.3653L7.908 12.26C6.176 12.8187 4.70933 13.7307 3.53733 14.9373C3.04667 15.4413 2.67333 16.048 2.41067 16.7L0 22.6667H24L21.588 16.7ZM12.0133 11.3333C15.2787 11.3333 16.6667 8.26933 16.6667 5.52133C16.6667 2.668 15.3053 0 12.0133 0C8.72133 0 7.33333 2.64133 7.33333 5.52133C7.33333 8.348 8.69333 11.3333 12.0133 11.3333Z" fill="white" />
                </svg>

              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
