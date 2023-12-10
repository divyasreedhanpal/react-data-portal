import * as React from 'react';
import Card from '@mui/material/Card';
import activeIcon from '../assets/Active.png'
import { useNavigate } from "react-router-dom";
import wholesaleImg from '../assets/wholesaleImg.png';
import { Box, Checkbox, IconButton } from '@mui/material';
import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

export function CartItem(props) {

    const { data, isItemSelected } = props;

    const handleClickListItem = () => {
    };

    const handleClose = () => {
    };

    const handleClickItem = (data) => {
        console.log("cart item");
    };
    const handleCheckbox= () => {
        
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
                <Box sx={{ display: 'inline-flex', flexDirection: 'row', justifyContent: 'center', maxWidth: '100%', alignItems: 'center' }} >
                    <Box sx={{ maxWidth: '10%' }}>
                        <Checkbox
                            color="primary"
                            checked={isItemSelected}
                            onClick={handleCheckbox}
                            checkedIcon={<CheckBoxOutlinedIcon />}
                            inputProps={{
                                'aria-labelledby': data.id,
                            }}
                        />
                    </Box>
                    <Box sx={{ maxWidth: '10%' }}>
                        <img src={activeIcon} className="imgCss1" alt="dashboard" style={{ padding: 2 }}></img>
                    </Box>
                    <Box sx={{ maxWidth: '40%', flexGrow: 1, padding: 2 }}> <CardTitleFontWrapper>{data.schemaName}</CardTitleFontWrapper></Box>

                    <Box sx={{ display: 'inline-flex', flexDirection: 'row', maxWidth: '40%', flexWrap: 'wrap', flexShrink: 0, columnGap: 2, padding: 2 }} rowGap={1}>
                        <ContentWrapper>
                            <img src={wholesaleImg} className="" alt="dashboard"></img>
                            <CardFontWrapper>{data.type}</CardFontWrapper>
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
                        onClick={handleClose}
                        aria-label="close"
                        sx={{
                            alignItems: 'flex-start'
                        }}
                    >
                        <CloseIcon fontSize='small' />
                    </IconButton>
                </Box>
            </Card>
        </>
    );
}

export default CartItem;