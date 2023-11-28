import * as React from 'react';
import { styled } from '@mui/material/styles';
import wholesaleImg from '../assets/wholesaleImg.png';
const Filters = styled('div')(({ theme }) => ({
    borderRadius: '6px',
    background: ' #FCFCFC',
    display: "flex",
    flexDirection: 'row',
    columnGap: 8,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: 'center',
    '&:hover': {
        backgroundColor: '#ffffffb5',
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(1),
        width: '100%',
    },
}));

const FiltersWrapper = styled('div')(({ theme }) => ({
    display: 'inline-flex',
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 2,
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
            <img src={wholesaleImg} alt="dashboard"></img>
                <FontWrapper>Business Line</FontWrapper>
            </FiltersWrapper>
            <FiltersWrapper>
            <img src={wholesaleImg} alt="dashboard"></img>
                <FontWrapper>Source Platform</FontWrapper>
            </FiltersWrapper>
            <FiltersWrapper>
            <img src={wholesaleImg} alt="dashboard"></img>
                <FontWrapper>Source Platform</FontWrapper>
            </FiltersWrapper>
            <FiltersWrapper>
            <img src={wholesaleImg} alt="dashboard"></img>
                <FontWrapper>Source Platform</FontWrapper>
            </FiltersWrapper>
        </Filters>
    );
}