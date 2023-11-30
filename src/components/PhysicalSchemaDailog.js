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
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import "./PhysicalSchemaDialog.css"
import styled from '@emotion/styled';

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
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  let closeImg = { cursor: 'pointer', float: 'right', marginTop: '5px', width: '20px' };

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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '100%',margin:'80px',borderRadius: '6px 6px 0px 0px',
      background: '#F3F3F3',
      boxShadow: '0px 6px 20px 0px rgba(0, 0, 0, 0.10)'
       }, backgroundColor: '#F3F3F3' }}
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
          <img src={closeImage} alt="dashboard"></img>
        </IconButton>
      </Box>
      <DialogContent sx={{ padding: '10px 30px 24px 40px', backgroundColor: '#8080802e' }}>
        <Box sx={
          {
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '10px'
          }
        }>
          <img src={activeIcon} className="imgCss1" alt="dashboard"></img>
          
          <DialogTitle>
            <popuptitlewrapper>application ratings </popuptitlewrapper>
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
            }}><img src={catalogIcon} className="mr16" alt="dashboard"></img><popupcontentwrapper>application ratings </popupcontentwrapper></div>

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

            <small>wrrrr </small>
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
            }}><img src={signImg} className="mr16" alt="dashboard"></img><popupcontentwrapper>application ratings </popupcontentwrapper></div>

            <small>wrrrr </small>
          </Grid>
        </Grid>


        <PhysicalSchemaTable />
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
        }}>Add to cart</Button>
      </DialogActions>
    </Dialog>
  );
}

PhysicalSchemaDailog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};