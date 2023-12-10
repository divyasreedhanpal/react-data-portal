import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import closeImg from '../assets/Close.png';
import activeIcon from '../assets/Active.png';
import Divider from '@mui/material/Divider';
import SubmitCart from './SubmitCart';
import { useSelector } from 'react-redux';

const pages = ['Home -> Physical Schema'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
// const cartItems = ['application-ratings', 'application-ratings111111111111111111111111111111111111', 'application-ratings'];

function SubHeader() {

  const [anchorElCart, setAnchorElCart] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const cartItems = useSelector(state => state.cartItems.cartItems);
  

  const handleOpenCartMenu = (event) => {
    setAnchorElCart(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseCartMenu = () => {
    setAnchorElCart(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickCart = () => {
    setOpen(true);
    setAnchorElCart(null);
  };


  // const [value, setValue] = React.useState('Dione');

  const handleClose = () => {
    setOpen(false);

    // if (newValue) {
    //   setValue(newValue);
    // }
  };


  return (
    <AppBar position="static">
      <SubmitCart
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
      // value={value}
      />
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

          <Box sx={{
            display: 'inline-flex',
            gap: 2,
          }}>
            <Tooltip title="Open cart items">
              <IconButton onClick={handleOpenCartMenu}>
                <IconButton sx={{ paddingRight: '32px' }} onClick={handleOpenCartMenu}>
                  <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Icon colour" fill-rule="evenodd" clip-rule="evenodd" d="M20 17.3333H5.81467L6.892 14.6667H19.4187L24 3.33333H3.05867L1.71067 0H0V0.0346667L5.54133 13.7427L4.08933 17.3333H3.33333C2.22933 17.3333 1.33333 18.228 1.33333 19.3333C1.33333 20.4387 2.22933 21.3333 3.33333 21.3333C4.43733 21.3333 5.33333 20.4387 5.33333 19.3333C5.33333 19.196 5.32 19.0627 5.29333 18.9333H18.0413C18.0147 19.0627 18.0013 19.196 18.0013 19.3333C18.0013 20.4387 18.8973 21.3333 20.0013 21.3333C21.1053 21.3333 22.0013 20.4387 22.0013 19.3333C22.0013 18.228 21.104 17.3333 20 17.3333Z" fill="white" />
                  </svg>

                </IconButton>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-cart"
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElCart)}
              onClose={handleCloseCartMenu}
            >
              <Box sx={{ padding : '0px 12px 16px 12px'}}>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'row-reverse'
                }}>
                  <IconButton
                    edge="end"
                    color="inherit"
                    onClick={handleCloseCartMenu}
                    aria-label="close"
                  >
                    <img src={closeImg} alt="dashboard"></img>
                  </IconButton>
                </Box>

                <Typography
                  sx={{
                    color: '#333', fontFamily: 'Univers Next for HSBC', fontSize: '12px', fontStyle: 'normal', fontWeight: '500',
                    lineHeight: '24px', marginLeft: '16px'
                  }}>My cart ({cartItems.length})</Typography>
                {cartItems.map((item) => (
                  <MenuItem key={item.id} onClick={handleCloseCartMenu} sx={{
                    width: '400px',
                  }}>
                    <ListItemIcon>
                      <img src={activeIcon} alt="dashboard"></img>
                    </ListItemIcon>
                    <ListItemText primary={item.schemaName} primaryTypographyProps={{ style: { whiteSpace: 'normal', wordWrap: 'break-word' } }}></ListItemText>
                  </MenuItem>
                ))}
                <Divider></Divider>
                <Button
                  onClick={handleClickCart}
                  sx={{
                    width: '100%',
                    backgroundColor: 'red',
                    borderRadius: '0px',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#fff',
                      color: '#3c52b2',
                    },
                  }}>
                  Go to my cart
                </Button>
              </Box>
            </Menu>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
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
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
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
export default SubHeader;
