import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { Box, Divider, IconButton, Typography } from '@mui/material';
import "./PhysicalSchemaDialog.css"

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

export default function SubmitCart(props) {
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
                    <DialogTitle>
                        <Typography><u>Back</u></Typography>
                    </DialogTitle>
                </Box>

                <Divider></Divider>
                <Box sx={
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
                        }}/>
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
                        <TextField id="outlined-basic" label="Input text" variant="outlined" multiline rows={10}/>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions sx={{
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
            </DialogActions>
        </Dialog>
    );
}

SubmitCart.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};