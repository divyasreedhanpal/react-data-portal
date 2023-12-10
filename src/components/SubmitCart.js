import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { Box, Divider, IconButton, Typography, Checkbox, FormControlLabel, Grid } from '@mui/material';
import "./PhysicalSchemaDialog.css";
import activeIcon from '../assets/Active.png';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import "./PhysicalSchemaDialog.css"
import CartItem from './CartItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import schemaImg from '../assets/SchemaImg.png';
import catalogIcon from '../assets/Catalog.png';
import dateFormat from '../assets/DateFormat.png';
import signImg from '../assets/signImg.png';
import PhysicalSchemaTable from './PhysicalSchemaTable';
import { addCart } from '../reducers/cartReducer';


export default function SubmitCart(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const [show, setShow] = React.useState(false);
    const dispatch = useDispatch();

    const [data, setData] = React.useState({});
    const [testValue, setTestValue] = React.useState('');
    const [testValue1, setTestValue1] = React.useState('');

    const [detailsShow, setDetailsShow] = React.useState(false);

    const cartItems = useSelector(state => state.cartItems.cartItems);

    const selected = useSelector(state => state.cartItems.cartItems);

    React.useEffect(() => {
        setShow(false);
        setDetailsShow(false);
        setData({});
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const isSelected = (id) => selected.indexOf(id).isSelected;

    const setAllSelected = (rows) => {
        // setSelected(rows)
    }

    const handleEntering = () => {
    };

    const handleClick = (data) => {
        console.log("cart item clicked");
        setShow(true);
        setDetailsShow(true);
        setData(data);
    };

    const handleAddCart = () => {
        const newData = {...data, selected : selected, isSelected : true};
        dispatch(addCart(newData));
        handleBack();
      };

    const handleSelectAllClick = (event) => {
        // if (event.target.checked) {
        //   const newSelected = rows.map((n) => n.id);
        //   setSelected(newSelected);
        //   return;
        // }
        // setSelected([]);
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleNext = (event) => {
        setShow(true);
    };

    const handleBack = () => {
        setShow(false);
        setDetailsShow(false);
    };


    const handleChange = (event) => {
        setTestValue(event.target.value);
    };

    const styleObj = {
        padding: '10px 30px 24px 40px', backgroundColor: '#FCFCFC',
    };

    const disablediv = {
        padding: '10px 30px 24px 40px', backgroundColor: '#8080802e',
    };

    return (
        <Dialog
            sx={{ '& .MuiDialog-paper': { width: '100%' }, backgroundColor: '#FCFCFC' }}
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
                    backgroundColor: '#FCFCFC'
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
            {show ? <DialogContent sx={styleObj}>
                {detailsShow ?
                    (<Box sx={
                        {
                            display: 'flex',
                            justifyContent: 'flex-start',
                            padding: '10px'
                        }
                    }>
                        <Typography onClick={handleBack} component="span"><u>Back</u></Typography>

                        <DialogTitle>
                            <img src={activeIcon} className="imgCss1" alt="dashboard"></img>
                            <Typography>{data.schemaName}</Typography>
                            {/* <Typography>{detailsShow.toString()}</Typography> */}
                        </DialogTitle>
                    </Box>) :
                    (<Box sx={
                        {
                            display: 'flex',
                            justifyContent: 'flex-start',
                            padding: '10px'
                        }
                    }>
                        <DialogTitle>
                            <Typography onClick={handleBack} component="span"><u>Back</u></Typography>
                        </DialogTitle>
                    </Box>)
                }

                <Divider></Divider>
                {detailsShow ? <>
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
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}><img src={catalogIcon} className="" alt="dashboard"></img><Typography className='font'>{data.type} </Typography></div>

                            <small style={{
                                marginLeft: '20px'
                            }}>wrrrr </small>
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
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}><img src={schemaImg} className="" alt="dashboard"></img> <Typography className='font'>application ratings </Typography></div>

                            <small style={{
                                marginLeft: '20px'
                            }}>wrrrr </small>
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
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}><img src={dateFormat} className="" alt="dashboard"></img>  <Typography className='font'>application ratings </Typography></div>

                            <small style={{
                                marginLeft: '20px'
                            }}>wrrrr </small>
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
                                flexDirection: 'row',
                                justifyContent: 'space-around'
                            }}><img src={signImg} className="" alt="dashboard"></img><Typography className='font'>application ratings </Typography></div>

                            <small style={{
                                marginLeft: '10px'
                            }}>wrrrr </small>
                        </Grid>
                    </Grid>
                    <PhysicalSchemaTable variables={data.variables} setAllSelected={setAllSelected} selected={[]} setValue={setValue} />
                </> : <Box sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        rowGap: 2,
                        marginTop: 2,
                        padding: 2,
                    }
                }>
                    <Typography>Dear user,</Typography>
                    <Typography>You are going to add those tables to use case <b>AWB_DFDS.</b></Typography>
                    <Typography>Permissions will be granted after request approved. To proceed further, please provide the fallowing information.</Typography>
                    <Box sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: 2,
                            marginTop: 2,
                        }}>
                        <Typography><b>Data Visa *</b></Typography>
                        <Typography>Please provide the Data visa for data consumption.</Typography>
                        <TextField id="outlined-basic" label="Input text" variant="outlined" sx={{
                            maxWidth: '50%',
                        }} />
                    </Box>
                    <Box sx={
                        {
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: 2,
                            marginTop: 2,
                        }}>
                        <Typography><b>Business Justification *</b></Typography>
                        <Typography>Request will be rejected if no business justification</Typography>
                        <TextField id="outlined-basic" label="Input text" variant="outlined" multiline rows={10} />
                    </Box>
                </Box>
                }

            </DialogContent>
                : <DialogContent sx={styleObj}>
                    <Box sx={
                        {
                            display: 'flex',
                            justifyContent: 'flex-start',
                            padding: '10px'
                        }
                    }>
                        <img src={activeIcon} className="imgCss1" alt="dashboard"></img>
                        <DialogTitle>
                            <Typography>selected {cartItems.length} tables in basket </Typography>
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
                        {
                            cartItems.map(item => {
                            return <div onClick={() => handleClick(item)}><CartItem data={item} isItemSelected={isSelected} /> </div>}
                            )
                        }
                    </Box>

                </DialogContent>}
            {show ? detailsShow ? 
                  <DialogActions sx={{
                    justifyContent: 'space-between',
                    padding: '10px 30px 24px 40px',
                    backgroundColor: '#8080802e'
                  }}>
                    <FormControlLabel control={<Checkbox color="primary"
                      // indeterminate={numSelected > 0 && numSelected < rowCount}
                      checked={value}
                      checkedIcon={<CheckBoxOutlinedIcon />}
                    //   onChange={handleSelectAllClick}
                      inputProps={{
                        'aria-label': 'Select all',
                      }} />} label="Select All">
                    </FormControlLabel>
                    <Button onClick={handleAddCart} sx={{
                      backgroundColor: 'red',
                      borderRadius: '0px',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: '#fff',
                        color: '#3c52b2',
                      },
                    }}>Add to cart</Button>
                  </DialogActions>
            : <DialogActions sx={{
                justifyContent: 'flex-end',
                padding: '10px 30px 24px 40px',
                backgroundColor: '#8080802e'
            }}>
                <Button onClick={handleOk} sx={{
                    backgroundColor: 'red',
                    borderRadius: '0px',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: '#fff',
                        color: '#3c52b2',
                    },
                }}>Submit</Button>
            </DialogActions> :
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
                    <Button onClick={handleNext} sx={{
                        backgroundColor: 'red',
                        borderRadius: '0px',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#fff',
                            color: '#3c52b2',
                        },
                    }}>Next</Button>
                </DialogActions>
            }
        </Dialog>
    );
}

SubmitCart.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};