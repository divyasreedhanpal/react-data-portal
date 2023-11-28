import * as React from 'react';
import Card from '@mui/material/Card';
import activeIcon from '../assets/Active.png'
import wholesaleImg from '../assets/wholesaleImg.png';
import { Box } from '@mui/material';
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
    pointerEvents: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }));

  const FontButtontWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(1, 1, 1, 1),
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
      <Card sx={{ display: 'flex', width: '32%', overflow: 'unset', borderRadius: '4px', background: '#FCFCFC' }} onClick={handleClickListItem}>
        <Box sx={{ display: 'inline-flex', flexDirection: 'row',padding:'4px 4px 24px 4px' }}>
          <Box sx={{
            padding: '20px',
          }}><img src={activeIcon} alt="dashboard"></img></Box>
          <Box sx={{
            flexGrow: 1
          }}>
            <CardTitleFontWrapper><b>application-ratings</b></CardTitleFontWrapper>
            <Box sx={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              gap: 1,
            }}>
              <ContentWrapper>
                <img src={wholesaleImg} alt="dashboard"></img>
                <CardFontWrapper>WholeSale</CardFontWrapper>
              </ContentWrapper>
              <ContentWrapper>
                <img src={wholesaleImg} alt="dashboard"></img>
                <CardFontWrapper>Data-visualisation</CardFontWrapper>
              </ContentWrapper>
              <ContentWrapper>
                <img src={wholesaleImg} alt="dashboard"></img>
                <CardFontWrapper>HDP | gid_gsid_0122</CardFontWrapper>
              </ContentWrapper>
            </Box>
            <Box sx={{
              display: 'inline-flex',
              flexDirection: 'row',
              columnGap: 1,
            }}>
              <FontButtontWrapper>
                PII
              </FontButtontWrapper>
              <FontButtontWrapper>
                SourceSystem
              </FontButtontWrapper>
            </Box>
          </Box>

        </Box>
        {/* <Grid container sx={{width:'302px'}}>
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
        </Grid> */}
      </Card>
    </>
  );
}