import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, Divider, FormControlLabel, Grid, IconButton, Typography } from '@mui/material';
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

  const dispatch = useDispatch();


  const cartItems = useSelector(state => state.cartItems);
  // React.useEffect(() => {
  //   if (!open) {
  //     setValue(valueProp);
  //   }
  // }, [valueProp, open]);

  // const handleEntering = () => {
  //   if (radioGroupRef.current != null) {
  //     radioGroupRef.current.focus();
  //   }
  // };

  const handleCancel = () => {
    onClose();
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
    const newData = {...data, selected : selected, isSelected : true};
    dispatch(addCart(newData));
    onClose();
  };

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%',margin:'80px',borderRadius: '6px 6px 0px 0px',
      background: '#F3F3F3',
      boxShadow: '0px 6px 20px 0px rgba(0, 0, 0, 0.10)'
       }, backgroundColor: '#F3F3F3' }}
      maxWidth="lg"
      // TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      <Box sx={
        {
          display: 'flex',
          justifyContent: 'end',
          padding: '10px',
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
      <DialogContent sx={{ padding: '10px 30px 24px 40px', backgroundColor: '#F3F3F3' }}>
        <Box sx={
          {
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '10px'
          }
        }>
          <img src={activeIcon} className="imgCss1" alt="dashboard"></img>
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
          <Grid item xs={3} lg={3} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 1,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={schemaImg} className="mr16" alt="dashboard"></img> <popupcontentwrapper>{data.type} </popupcontentwrapper></div>

            <small >wrrrr </small>
          </Grid>
          <Grid item xs={3} lg={3} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 1,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={schemaImg} className="mr16" alt="dashboard"></img> <popupcontentwrapper>application ratings </popupcontentwrapper></div>

            <small>wrrrr </small>
          </Grid>
          <Grid item xs={3} lg={3} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 1,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={dateFormat} className="mr16" alt="dashboard"></img>  <popupcontentwrapper>application ratings </popupcontentwrapper></div>

            <small >wrrrr </small>
          </Grid>
          <Grid item xs={3} lg={2.5} md={3} sx={
            {
              backgroundColor: '#ffffffb5',
              borderRadius: 1,
              margin: '10px 0px 0px 0px',
              padding: '25px'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
             
            }}><img src={signImg} className="mr16" alt="dashboard"></img><popupcontentwrapper >application ratings </popupcontentwrapper></div>

            <small>wrrrr </small>
          </Grid>
        </Grid>
        <PhysicalSchemaTable variables={data.variables} setAllSelected={setAllSelected} selected={selected} setValue={setValue}/>
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
          textTransform:'none',
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