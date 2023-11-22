import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import wholesaleImg from '../assets/wholesaleImg.png';
import { Typography } from '@mui/material';
const Filters = styled('div')(({ theme }) => ({
    // position: 'relative',
    width: '632px',
    height: '48px',
    // flexShrink: 0,
    borderRadius: '6px',
    background: ' #FCFCFC',
    display: "flex",
    alignItems: "center",
    justifyContent: 'start',
    '&:hover': {
        backgroundColor: '#ffffffb5',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: '100%',
    },
}));

const FiltersWrapper = styled('div')(({ theme }) => ({
   
    paddingLeft: '20px',
    height: '100%',
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

}));


const FontWrapper = styled('p')(({ theme }) => ({
    color: '#333',
    fontFamily: 'Univers Next for HSBC',
    fontWeight: 400,
    fontStyle: 'normal',
    fontSize: '12px',
    lineHeight: '16px',
    marginLeft: '12px'
    // letterSpacing: 1,
}));

export default function FilterTab() {
    return (
        <Filters>
            <FiltersWrapper>
            <img src={wholesaleImg} className="" alt="dashboard"></img>
                <FontWrapper>Business Line</FontWrapper>
            </FiltersWrapper>
            <FiltersWrapper>
            <img src={wholesaleImg} className="" alt="dashboard"></img>
                <FontWrapper>Source Platform</FontWrapper>
            </FiltersWrapper>
            <FiltersWrapper>
            <img src={wholesaleImg} className="" alt="dashboard"></img>
                <FontWrapper>Source Platform</FontWrapper>
            </FiltersWrapper>
            <FiltersWrapper>
            <img src={wholesaleImg} className="" alt="dashboard"></img>
                <FontWrapper>Source Platform</FontWrapper>
            </FiltersWrapper>

        </Filters>
    );
}