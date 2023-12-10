import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, Divider, FormControl, FormControlLabel, Grid, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import PhysicalSchemaTable from './PhysicalSchemaTable';
import schemaImg from '../assets/SchemaImg.png';
import catalogIcon from '../assets/Catalog.png';
import dateFormat from '../assets/DateFormat.png';
import signImg from '../assets/signImg.png';
import activeIcon from '../assets/Active.png'
import closeImage from '../assets/Close.png';
import { useDispatch, useSelector } from 'react-redux';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import "./PhysicalSchemaDialog.css"
import styled from '@emotion/styled';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { addCart } from '../reducers/cartReducer';


const popuptitlewrapper = styled('h2')(({ theme }) => ({
  color: '#333',
  fontFamily: 'Univers Next for HSBC',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '24px'
}));
const popupcontentwrapper = styled('p')(({ theme }) => ({
  color: '#333',
  fontFamily: 'Univers Next for HSBC',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '24px'
}));

export default function PhysicalSchemaDailog(props) {
  const { onClose, data, open, ...other } = props;
  const [value, setValue] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [testValue, setTestValue] = React.useState('');
  const [testValue1, setTestValue1] = React.useState('');

  const dispatch = useDispatch();


  const cartItems = useSelector(state => state.cartItems.cartItems);


  React.useEffect(() => {
    const selectedData = cartItems.filter(e => e.id === data.id);
    if (selectedData.length !== 0) {
      setSelected(selectedData[0].selected);
      if (selectedData[0].selected.length === data.variables.length) {
        setValue(true);
      } else {
        setValue(false);
      }
    }
  }, [cartItems]);

  // const handleEntering = () => {
  //   if (radioGroupRef.current != null) {
  //     radioGroupRef.current.focus();
  //   }
  // };

  const handleCancel = () => {
    onClose();
  };

  const handleChange = (event) => {
    setTestValue(event.target.value);
  };

  const setAllSelected = (rows) => {
    setSelected(rows)
  }

  const handleSelectAllClick = (event) => {
    setValue(event.target.checked);
    if (event.target.checked) {
      const newSelected = data.variables.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleAddCart = () => {
    const newData = { ...data, selected: selected, isSelected: true };
    dispatch(addCart(newData));
    onClose();
  };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          width: '100%', margin: '80px', borderRadius: '6px 6px 0px 0px',
          background: '#F3F3F3',
          boxShadow: '0px 6px 20px 0px rgba(0, 0, 0, 0.10)'
        }, backgroundColor: '#F3F3F3'
      }}
      maxWidth="lg"
      // TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <Box sx={
        {
          display: 'flex',
          justifyContent: 'end',
          padding: '10px 10px 0px 10px',
          backgroundColor: '#F3F3F3'
        }
      }>
        <IconButton
          edge="start"
          color="inherit"
          onClick={handleCancel}
          aria-label="close"
        >
          <img src={closeImage} alt="dashboard"></img>
        </IconButton>
      </Box>
      <DialogContent sx={{ padding: '0px 30px 24px 40px', backgroundColor: '#F3F3F3' }}>
        <Box sx={
          {
            display: 'flex',
            justifyContent: 'flex-start'
          }
        }>
          <img src={activeIcon} className="" alt="dashboard"></img>
          <DialogTitle>
            <popuptitlewrapper>{data.schemaName}</popuptitlewrapper>
          </DialogTitle>
        </Box>

        <Divider></Divider>
        <Grid container columnGap={1}
          direction='row'
          sx={{
            borderRadius: 2,
            width: '100%',
            margin: '0px',
          }}>
          <Grid item xs={3} sx={
            {
              backgroundColor: '#FCFCFC',
              borderRadius: '6px',
              margin: '10px 0px 0px 0px',
              padding: '25px',
              height: '86px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={catalogIcon} className='mr16' alt="dashboard"></img><popupcontentwrapper>{data.type} </popupcontentwrapper></div>

            <small>wrrrr </small>
          </Grid>
          <Grid item xs sx={
            {
              backgroundColor: '#FCFCFC',
              borderRadius: '6px',
              margin: '10px 0px 0px 0px',
              padding: '25px',
              height: '86px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={schemaImg} className="mr16" alt="dashboard"></img> <popupcontentwrapper>{data.type} </popupcontentwrapper></div>

            <small >wrrrr </small>
          </Grid>
          <Grid item xs sx={
            {
              backgroundColor: '#FCFCFC',
              borderRadius: '6px',
              margin: '10px 0px 0px 0px',
              padding: '25px',
              height: '86px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={schemaImg} className="mr16" alt="dashboard"></img> <popupcontentwrapper>application ratings </popupcontentwrapper></div>

            <small>wrrrr </small>
          </Grid>
          <Grid item xs sx={
            {
              backgroundColor: '#FCFCFC',
              borderRadius: '6px',
              margin: '10px 0px 0px 0px',
              padding: '25px',
              height: '86px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={dateFormat} className="mr16" alt="dashboard"></img>  <popupcontentwrapper>application ratings </popupcontentwrapper></div>

            <small >wrrrr </small>
          </Grid>
        </Grid>
        <Grid container columnGap={1}
          direction='row'
          sx={{
            borderRadius: 2,
            margin: '0px',
            flexGrow: 1,
          }}>
          <Grid item xs={6} lg={6} md={6} sx={
            {
              backgroundColor: '#FCFCFC',
              borderRadius: '6px',
              margin: '10px 0px 0px 0px',
              padding: '25px',
              height: '86px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={catalogIcon} alt="dashboard" className='mr16'></img><popupcontentwrapper>{data.type} </popupcontentwrapper></div>

            <small>wrrrr </small>
          </Grid>
          <Grid item xs sx={
            {
              backgroundColor: '#FCFCFC',
              borderRadius: '6px',
              margin: '10px 0px 0px 0px',
              padding: '25px',
              height: '86px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={schemaImg} className='mr16' alt="dashboard"></img> <popupcontentwrapper>application ratings </popupcontentwrapper></div>

            <small>wrrrr test test test</small>
            <span className='copyIcon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <g clip-path="url(#clip0_182_66564)">
                <path d="M10.6666 0.666656H2.66659C1.93325 0.666656 1.33325 1.26666 1.33325 1.99999V11.3333H2.66659V1.99999H10.6666V0.666656ZM12.6666 3.33332H5.33325C4.59992 3.33332 3.99992 3.93332 3.99992 4.66666V14C3.99992 14.7333 4.59992 15.3333 5.33325 15.3333H12.6666C13.3999 15.3333 13.9999 14.7333 13.9999 14V4.66666C13.9999 3.93332 13.3999 3.33332 12.6666 3.33332ZM12.6666 14H5.33325V4.66666H12.6666V14Z" fill="#333333" />
              </g>
              <defs>
                <clipPath id="clip0_182_66564">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </span>
          </Grid>
        </Grid>
        <Box sx={
          {
            display: 'flex',
            flexDirection: 'row',
            columnGap: 2,
            paddingTop: 2,
            
          }
        }>
          <Box sx={{
            minWidth: 120, flexGrow: 1, display: 'flex',
            flexDirection: 'column', rowGap: 1
          }}>
             <Typography sx={{
                 color: '#333',
                 fontFamily: 'Univers Next for HSBC',
                 fontSize: '16px',
                 fontStyle: 'normal',
                 fontWeight: '500',
                 lineHeight: '24px'
            }}>Label1</Typography>
            <FormControl fullWidth>
              <InputLabel sx={{
                color: '#333',
                fontFamily: 'Univers Next for HSBC',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '24px'
              }} id="demo-simple-select-label">test</InputLabel>
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
            <Typography sx={{
                 color: '#333',
                 fontFamily: 'Univers Next for HSBC',
                 fontSize: '16px',
                 fontStyle: 'normal',
                 fontWeight: '500',
                 lineHeight: '24px'
            }}>Label2</Typography>
            <FormControl fullWidth>
              <InputLabel sx={{
                color: '#333',
                fontFamily: 'Univers Next for HSBC',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '24px'
              }}
              id="demo-simple-select-label1">test1</InputLabel>
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
        <PhysicalSchemaTable setAllSelected={setAllSelected} setValue={setValue} data={data} selected={selected} setSelected={setSelected} />
      </DialogContent>
      <DialogActions sx={{
        justifyContent: 'space-between',
        padding: '10px 30px 24px 40px',
        backgroundColor: '#F3F3F3'
      }}>
        <FormControlLabel control={<Checkbox color="primary"
          // indeterminate={numSelected > 0 && numSelected < rowCount}
          checked={value}
          checkedIcon={<CheckBoxOutlinedIcon />}
          onChange={handleSelectAllClick}
          
          inputProps={{
            'aria-label': 'Select all',
          }} />} label="Select All">
        </FormControlLabel>
        <Button onClick={handleAddCart} sx={{
          color: '#FFF',
          fontFamily: 'Univers Next for HSBC',
          fontSize: '16px',
          fontStyle: 'normal',
          fontWeight: '400',
          lineHeight: '24px',
          backgroundColor: '#DB0011',
          borderRadius: '0px',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#fff',
            color: '#3c52b2',
          },
        }}>Add to cart</Button>
      </DialogActions>
    </Dialog>
  );
}

PhysicalSchemaDailog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
};