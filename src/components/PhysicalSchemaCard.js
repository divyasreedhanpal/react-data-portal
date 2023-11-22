import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import activeIcon from '../assets/Active.png'
import { useNavigate } from "react-router-dom";
import wholesaleImg from '../assets/wholesaleImg.png';
import { Box, Grid } from '@mui/material';
import PhysicalSchemaDailog from './PhysicalSchemaDailog';
import styled from '@emotion/styled';

export default function PhysicalSchemaCard() {

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
    color:' #333',
    fontFamily: 'Univers Next for HSBC',
    fontStyle: 'normal',
    // letterSpacing: 1,
  }));

  const CardTitleFontWrapper = styled('p')(({ theme }) => ({
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '24px',
    color:' #333',
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
      <PhysicalSchemaDailog
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}
        value={value}
      />
      <Card sx={{ display: 'flex', width: 416, overflow: 'unset', height: 234,borderRadius:6,background:'#FCFCFC' }} onClick={handleClickListItem}>
        {/* <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent>
            <StorageIcon></StorageIcon>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              application-ratings
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClick}>PII</Button>
            <Button size="small" onClick={handleClick}>SourceSystem</Button>
          </CardActions>
        </Box> */}
        <Grid container sx={{width:'302px'}}>
          <Grid item xs={3} lg={3} md={3}>
            <img src={activeIcon} className="imgCss1" alt="dashboard"></img>
          </Grid>
          <Grid item xs={9} lg={9} md={9}>
            <Grid container spacing={1}>
              <Grid item xs={12} lg={12} md={12}>
                <CardTitleFontWrapper>application-ratings</CardTitleFontWrapper>
              </Grid>
              <Grid item xs={6} lg={6} md={6}>
                <ContentWrapper>
                  <img src={wholesaleImg} className="" alt="dashboard"></img>
                  <CardFontWrapper>WholeSale</CardFontWrapper>
                </ContentWrapper>

              </Grid>
              <Grid item xs={6} lg={6} md={6}>
                <ContentWrapper>
                  <img src={wholesaleImg} className="" alt="dashboard"></img>
                  <CardFontWrapper>Data-visualisation</CardFontWrapper>
                </ContentWrapper>
              </Grid>
              <Grid item xs={12} lg={12} md={12}>
                <ContentWrapper>
                  <img src={wholesaleImg} className="" alt="dashboard"></img>
                  <CardFontWrapper>HDP | gid_gsid_0122</CardFontWrapper>
                </ContentWrapper>
              </Grid>
              <Grid item xs={6} lg={6} md={6}>
                <FontButtontWrapper>
                  PII
                </FontButtontWrapper>

              </Grid>
              <Grid item xs={6} lg={6} md={6}>
                <FontButtontWrapper>
                  SourceSystem
                </FontButtontWrapper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}