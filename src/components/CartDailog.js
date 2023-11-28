import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, Divider, FormControlLabel, Grid, IconButton, Typography } from '@mui/material';
import activeIcon from '../assets/Active.png'
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import "./PhysicalSchemaDialog.css"
import CartItem from './CartItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];

export default function CartDailog(props) {
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  let closeImg = { cursor: 'pointer', float: 'right', marginTop: '5px', width: '20px' };

  const [testValue, setTestValue] = React.useState('');
  const [testValue1, setTestValue1] = React.useState('');

  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    // if (radioGroupRef.current != null) {
    //   radioGroupRef.current.focus();
    // }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleSelectAllClick = (event) => {
    // if (event.target.checked) {
    //   const newSelected = rows.map((n) => n.id);
    //   setSelected(newSelected);
    //   return;
    // }
    // setSelected([]);
  };

  const handleOk = () => {
    onClose(value);
  };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };


  const handleChange = (event) => {
    setTestValue(event.target.value);
  };

  const styleObj = {
    padding: '10px 30px 24px 40px', backgroundColor: '#8080802e',
  };

  const disablediv = {
    padding: '10px 30px 24px 40px', backgroundColor: '#8080802e',
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%' }, backgroundColor: '#8080802e' }}
      maxWidth="lg"
      TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <Box sx={
        {
          display: 'flex',
          justifyContent: 'end',
          padding: '10px',
          backgroundColor: '#8080802e'
        }
      }>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleCancel}
          aria-label="close"
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent sx={styleObj}>
        <Box sx={
          {
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '10px'
          }
        }>
          <img src={activeIcon} className="imgCss1" alt="dashboard"></img>
          <DialogTitle>
            <Typography>selected {options.size} tables in basket </Typography>
          </DialogTitle>
        </Box>

        <Divider></Divider>
        <Box sx={
          {
            display: 'flex',
            flexDirection: 'row',
            columnGap: 2,
            marginTop: 2,
            padding: 2,
          }
        }>
          <Box sx={{
            minWidth: 120, flexGrow: 1, display: 'flex',
            flexDirection: 'column', rowGap: 1
          }}>
            <Typography>Label1</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">test</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={testValue}
                label="test"
                onChange={handleChange}
                sx={{
                  backgroundColor: '#FCFCFC'
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{
            minWidth: 120, flexGrow: 1, display: 'flex',
            flexDirection: 'column', rowGap: 1
          }}>
            <Typography>Label1</Typography>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label1">test1</InputLabel>
              <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select1"
                value={testValue1}
                label="test1"
                onChange={handleChange}
                sx={{
                  backgroundColor: '#FCFCFC'
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{
          overflowY: 'scroll',
          height: '200px',
          display: 'flex',
          flexDirection: 'column',
          rowGap: 2,
          marginTop: 2,
          padding: 2,
          '&::-webkit-scrollbar': {
            backgroundColor: '#FCFCFC',
            width: '10px',
            outline: '1px solid transparent',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.10)',
            outline: '1px solid transparent',
            borderRadius: '4px',
          }
        }}>

          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Box>

      </DialogContent>
      <DialogActions sx={{
        justifyContent: 'space-between',
        padding: '10px 30px 24px 40px',
        backgroundColor: '#8080802e'
      }}>
        <FormControlLabel control={<Checkbox color="primary"
          // indeterminate={numSelected > 0 && numSelected < rowCount}
          // checked={rowCount > 0 && numSelected === rowCount}
          checkedIcon={<CheckBoxOutlinedIcon />}
          onChange={handleSelectAllClick}
          inputProps={{
            'aria-label': 'Select all',
          }} />} label="Select All">
        </FormControlLabel>
        <Button onClick={handleOk} sx={{
          backgroundColor: 'red',
          borderRadius: '0px',
          color: 'white',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
          },
        }}>Next</Button>
      </DialogActions>
    </Dialog>
  );
}

CartDailog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};