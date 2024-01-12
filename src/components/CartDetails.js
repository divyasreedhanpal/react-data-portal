import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { Box, Divider, IconButton, Typography, Checkbox, FormControlLabel } from '@mui/material';
import "./PhysicalSchemaDialog.css";
import activeIcon from '../assets/Active.png';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import "./PhysicalSchemaDialog.css"
import CartItem from './CartItem';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';


export default function CartDetails(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const [show, setShow] = React.useState(false);

    const [data, setData] = React.useState({});

    const [detials, setDetails] = React.useState(true);

    const cartItems = useSelector(state => state.cartItems.cartItems);

    const selected = useSelector(state => state.cartItems.cartItems)

    const [testValue, setTestValue] = React.useState('');
    const [testValue1, setTestValue1] = React.useState('');

    const isSelected = (id) => selected.indexOf(id).isSelected;

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
    };

    const handleClick = (data) => {
        setShow(true);
        setDetails(true);
        setData(data);
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
                            <MenuItem key={10} value={10}>Ten</MenuItem>
                            <MenuItem key={20} value={20}>Twenty</MenuItem>
                            <MenuItem key={30} value={30}>Thirty</MenuItem>
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
                            <MenuItem key={10} value={10}>Ten</MenuItem>
                            <MenuItem key={20} value={20}>Twenty</MenuItem>
                            <MenuItem key={30} value={30}>Thirty</MenuItem>
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
                    cartItems.map(item => <CartItem data={item} isItemSelected={isSelected} onCartItemClick={handleClick} />)
                }
            </Box>
        </DialogContent>
    );
}