import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, FormControl, InputLabel, ListItemText, MenuItem, Select, Typography, Radio, InputBase } from '@mui/material';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #767676',
      fontSize: 16,
      marginTop: '8px',
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color',]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        'Univers Next for HSBC'
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#767676',
        // boxShadow: '0 0 0 0.2rem #767676',
      },
    },
  }));
  

const DropdownIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000" {...props}><path d="M0 0h24v24H0z" fill="none" /><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" /></svg>
);



export default function Dropdown(props) {
    const { label, columns, judColumnValue, handleChangeColumn, filters, judFilterValue, handleChangeFilter } = props;
    return (
        <Box sx={{
            flexGrow: 1, display: 'flex',
            flexDirection: 'column', rowGap: 1
        }}>
            <Typography sx={{
                color: '#333',
                fontFamily: 'Univers Next for HSBC',
                fontSize: '16px',
                fontStyle: 'normal',
                fontWeight: '500',
                lineHeight: '24px'
            }}>{label}</Typography>
            <Box sx={{
                flexGrow: 0, display: 'flex',
                flexDirection: 'row', columnGap: 1
            }}>
                <FormControl style={{ width: '161px' }} variant="outlined">
                    <InputLabel shrink={false}
                        sx={{
                            fill: '#FFF',
                            stroke: '#767676',
                            strokeWidth: '1px',
                            color: '#333',
                            fontFamily: 'Univers Next for HSBC',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            flexShrink: '0',
                            lineHeight: '24px'
                        }} id="demo-simple-select-label">Choose Column</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="choosecolum"
                        value={judColumnValue}
                        renderValue={() => ''}
                        onChange={handleChangeColumn}
                        IconComponent={DropdownIcon}
                        MenuProps={{
                            sx: {
                                "&& .Mui-selected": {
                                    backgroundColor: 'transparent'
                                  }
                            },
                            PaperProps: {
                              sx: {
                                border: '1px solid',
                              },
                            },
                          }}
                        sx={{
                            backgroundColor: '#FCFCFC',
                            // border: '1px solid',
                        }}
                        input={<BootstrapInput />}
                    >
                        {columns.map((e) => (
                            <MenuItem key={e.key} value={e.key}>
                                <Radio
                                    checked={judColumnValue === e.key}
                                    value={e.key}
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': e.label }}
                                />
                                <ListItemText primary={e.label} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl style={{ width: '161px', height: '32px' }} variant="outlined">
                    <InputLabel shrink={false}
                        sx={{
                            fill: '#FFF',
                            stroke: '#767676',
                            strokeWidth: '1px',
                            color: '#333',
                            fontFamily: 'Univers Next for HSBC',
                            fontSize: '16px',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            flexShrink: '0',
                            lineHeight: '24px'
                        }} id="demo-simple-select-label-filter">Choose Filter</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="choosecolum"
                        value={judFilterValue}
                        renderValue={() => ''}
                        onChange={handleChangeFilter}
                        IconComponent={DropdownIcon}
                        MenuProps={{
                            sx: {
                                "&& .Mui-selected": {
                                    backgroundColor: 'transparent'
                                  }
                            },
                            PaperProps: {
                              sx: {
                                border: '1px solid',
                              },
                            },
                          }}
                        sx={{
                            backgroundColor: '#FCFCFC',
                            // border: '1px solid',
                        }}
                        input={<BootstrapInput />}
                    >
                        {filters.map((e) => (
                            <MenuItem key={e.key} value={e.key}>
                                <Radio
                                    checked={judFilterValue === e.key}
                                    value={e.key}
                                    name="radio-buttons"
                                    inputProps={{ 'aria-label': e.label }}
                                />
                                <ListItemText primary={e.label} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
        </Box>

    );
}