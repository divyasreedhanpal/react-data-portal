import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Checkbox, Divider, FormControl, FormControlLabel, Grid, IconButton, InputLabel, ListItemText, MenuItem, Radio, RadioGroup, Select, Typography } from '@mui/material';
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
import Dropdown from './PhysicalSchmaDailog/Dropdown';


const PopupTitleWrapper = styled('p')(({ theme }) => ({
  color: '#333',
  fontFamily: 'Univers Next for HSBC',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '24px'
}));
const PopupContentWrapper = styled('p')(({ theme }) => ({
  color: '#333',
  fontFamily: 'Univers Next for HSBC',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '24px'
}));

const columns = [{ key: 'column1', label: 'Column 1' }, { key: 'column2', label: 'Column 2' }]
const filters = [{ key: 'filter1', label: 'Filter 1' }, { key: 'filter2', label: 'Filter 2' }]

export default function PhysicalSchemaDailgoueContent(props) {
  const { data } = props;
  const [value, setValue] = React.useState(false);
  const [selected, setSelected] = React.useState([]);
  const [judColumnValue, setJudColumnValue] = React.useState('column1');
  const [judFilterValue, setjudFilterValue] = React.useState('filter1');

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

  const handleChangeColumn = (event) => {
    setJudColumnValue(event.target.value);
  };

  const handleChangeFilter = (event) => {
    setjudFilterValue(event.target.value);
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
      <DialogContent sx={{ padding: '0px 30px 24px 40px', backgroundColor: '#F3F3F3' }}>
        <Box sx={
          {
            display: 'flex',
            justifyContent: 'flex-start'
          }
        }>
          <img src={activeIcon} className="" alt="dashboard"></img>
          <DialogTitle>
            <PopupTitleWrapper>{data.schemaName}</PopupTitleWrapper>
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
              height: '100px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={catalogIcon} className='mr16' alt="dashboard"></img><PopupContentWrapper>{data.type} </PopupContentWrapper></div>

            <small>wrrrr </small>
          </Grid>
          <Grid item xs sx={
            {
              backgroundColor: '#FCFCFC',
              borderRadius: '6px',
              margin: '10px 0px 0px 0px',
              padding: '25px',
              height: '100px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={schemaImg} className="mr16" alt="dashboard"></img> <PopupContentWrapper>{data.type} </PopupContentWrapper></div>

            <small >wrrrr </small>
          </Grid>
          <Grid item xs sx={
            {
              backgroundColor: '#FCFCFC',
              borderRadius: '6px',
              margin: '10px 0px 0px 0px',
              padding: '25px',
              height: '100px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={schemaImg} className="mr16" alt="dashboard"></img> <PopupContentWrapper>application ratings </PopupContentWrapper></div>

            <small>wrrrr </small>
          </Grid>
          <Grid item xs sx={
            {
              backgroundColor: '#FCFCFC',
              borderRadius: '6px',
              margin: '10px 0px 0px 0px',
              padding: '25px',
              height: '100px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={dateFormat} className="mr16" alt="dashboard"></img>  <PopupContentWrapper>application ratings </PopupContentWrapper></div>

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
              height: '100px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={catalogIcon} alt="dashboard" className='mr16'></img><PopupContentWrapper>{data.type} </PopupContentWrapper></div>

            <small>wrrrr </small>
          </Grid>
          <Grid item xs sx={
            {
              backgroundColor: '#FCFCFC',
              borderRadius: '6px',
              margin: '10px 0px 0px 0px',
              padding: '25px',
              height: '100px',
              border: '1px solid #D4D4D4'
            }
          }>
            <div style={{
              display: 'flex',
              flexDirection: 'row'
            }}><img src={schemaImg} className='mr16' alt="dashboard"></img> <PopupContentWrapper>application ratings </PopupContentWrapper></div>

            <small>wrrrr test test test</small>
            <span className='copyIcon'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip0_182_66564)">
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
          <Dropdown columns={columns} label='Juridiction' judColumnValue={judColumnValue}
            handleChange={handleChangeColumn}
            filters={filters}
            handleChangeFilter={handleChangeFilter}
            judFilterValue={judFilterValue}
          ></Dropdown>
          <Dropdown columns={columns} label='Legal Entity' judColumnValue={judColumnValue}
            handleChange={handleChangeColumn}
            filters={filters}
            handleChangeFilter={handleChangeFilter}
            judFilterValue={judFilterValue}
          ></Dropdown>
          <Dropdown columns={columns} label='Line of Business' judColumnValue={judColumnValue}
            handleChange={handleChangeColumn}
            filters={filters}
            handleChangeFilter={handleChangeFilter}
            judFilterValue={judFilterValue}
          ></Dropdown>
        </Box>
        <PhysicalSchemaTable setAllSelected={setAllSelected} setValue={setValue} data={data} selected={selected} setSelected={setSelected} />
      </DialogContent>
  );
}

PhysicalSchemaDailgoueContent.propTypes = {
  data: PropTypes.object.isRequired,
};