import * as React from 'react';
import Card from '@mui/material/Card';
import activeIcon from '../assets/Active.png'
import { useNavigate } from "react-router-dom";
import wholesaleImg from '../assets/wholesaleImg.png';
import { Box, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import { CheckBox } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

export default function CartItem() {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/physical-schema');
    };

    const CardFontWrapper = styled('p')(({ theme }) => ({
        fontWeight: 400,
        fontSize: 12,
        lineHeight: '16px',
        padding: '0px 0px 0px 10px',
        color: ' #333',
        fontFamily: 'Univers Next for HSBC',
        fontStyle: 'normal',
        // letterSpacing: 1,
    }));

    const CardTitleFontWrapper = styled('p')(({ theme }) => ({
        fontWeight: 500,
        fontSize: 20,
        lineHeight: '24px',
        color: ' #333',
        fontFamily: 'Univers Next for HSBC',
        fontStyle: 'normal',
        pointerEvents: 'none'
        // letterSpacing: 1,
    }));

    const ContentWrapper = styled('div')(({ theme }) => ({
        // padding: theme.spacing(1, 1, 1, 1),
        height: '100%',
        // position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }));

    const FontButtontWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(1, 1, 1, 1),
        height: '100%',
        // width: 10,
        // position: 'absolute',
        color: '#333',
        fontFamily: 'Univers Next for HSBC',
        fontSize: '10px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: '16px',
        backgroundColor: '#F3F3F3',
        borderRadius: 4,
        pointerEvents: 'none',
    }));


    return (
        <>
            <Card sx={{ display: 'flex', overflow: 'unset', borderRadius: '4px', background: '#FCFCFC' }}>
                <Box sx={{ display: 'inline-flex', flexDirection: 'row', justifyContent: 'center', maxWidth: '100%', alignItems: 'center' }}>
                    <Box sx={{ maxWidth: '10%' }}>
                        <CheckBox></CheckBox>
                    </Box>
                    <Box sx={{ maxWidth: '10%' }}>
                        <img src={activeIcon} className="imgCss1" alt="dashboard" style={{padding: 2}}></img>
                    </Box>
                    <Box sx={{ maxWidth: '40%', flexGrow: 1, padding: 2 }}> <CardTitleFontWrapper>application-ratings</CardTitleFontWrapper></Box>

                    <Box sx={{ display: 'inline-flex', flexDirection: 'row', maxWidth: '40%', flexWrap: 'wrap', flexShrink: 0, columnGap: 2, padding: 2 }} rowGap={1}>
                        <ContentWrapper>
                            <img src={wholesaleImg} className="" alt="dashboard"></img>
                            <CardFontWrapper>WholeSale</CardFontWrapper>
                        </ContentWrapper>
                        <ContentWrapper>
                            <img src={wholesaleImg} className="" alt="dashboard"></img>
                            <CardFontWrapper>Data-visualisation</CardFontWrapper>
                        </ContentWrapper>
                        <ContentWrapper>
                            <img src={wholesaleImg} className="" alt="dashboard"></img>
                            <CardFontWrapper>Data-visualisation</CardFontWrapper>
                        </ContentWrapper>
                        <ContentWrapper>
                            <img src={wholesaleImg} className="" alt="dashboard"></img>
                            <CardFontWrapper>Data-visualisation</CardFontWrapper>
                        </ContentWrapper>
                        <ContentWrapper>
                            <img src={wholesaleImg} className="" alt="dashboard"></img>
                            <CardFontWrapper>Data-visualisation</CardFontWrapper>
                        </ContentWrapper>
                    </Box>
                </Box>
                <Box sx={
                    {
                        display: 'flex',
                        justifyContent: 'end',
                        flex: 'auto',
                    }
                }>
                    <IconButton
                        edge="start"
                        color="inherit"
                        // onClick={handleCancel}
                        aria-label="close"
                        sx={{
                            alignItems: 'flex-start'
                        }}
                    >
                        <CloseIcon fontSize='small'/>
                    </IconButton>
                </Box>
            </Card>
        </>
    );
}