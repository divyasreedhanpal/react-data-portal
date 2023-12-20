import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import searchImg from '../assets/Search.png';
const Search = styled('div')(({ theme }) => ({
    // position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#ffffffb5',
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
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

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    // position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    cursor:'pointer',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(2)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '100%',
            '&:focus': {
                width: '100%',
            },
        },
    },
}));

export default function SearchBar({ searchValue, setSearchValue }) {

    const searchInputRef = React.useRef();

    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }

    const handleClick = (e) => {
        searchInputRef.current.focus();
    }
    return (
        <Search>
            <StyledInputBase
                placeholder="Search…"
                ref={searchInputRef}
                inputProps={{ 'aria-label': 'search' }}
                value={searchValue}
                onChange={handleSearch}
            />
            <SearchIconWrapper>
                <img src={searchImg} onClick={handleClick} alt="dashboard"></img>
            </SearchIconWrapper>

        </Search>
    );
}