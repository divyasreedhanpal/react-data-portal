import * as React from 'react';
import Card from '@mui/material/Card';
import activeIcon from '../assets/Active.png'
import wholesaleImg from '../assets/wholesaleImg.png';
import { Box } from '@mui/material';
import PhysicalSchemaDailog from './PhysicalSchemaDailog';
import styled from '@emotion/styled';

export default function PhysicalSchemaCard(props) {

  const { data } = props;

  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState('Dione');

  const handleClickListItem = () => {
    setOpen(true);
    // setValue()
  };

  const handleClose = (newValue) => {
    setOpen(false);

    // if (newValue) {
    //   setValue(newValue);
    // }
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
    pointerEvents: 'none',
    wordBreak: 'break-all',
    margin: '0px',
    height: '50px'
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
    padding: '8px 16px 8px 16px',
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
        data={data}
      />
      <Card sx={{ display: 'flex', overflow: 'unset', borderRadius: '4px', background: '#FCFCFC', cursor: 'pointer', height: '280px' }} onClick={handleClickListItem}>
        <Box sx={{ display: 'inline-flex', flexDirection: 'row', padding: '4px 4px 24px 4px' }}>
          <Box sx={{
            padding: '20px',
          }}><img src={activeIcon} alt="dashboard"></img></Box>
          <Box sx={{
            flexGrow: 1,
            padding: '24px 20px 20px 0px',
            display: 'flex',
            flexDirection: 'column',
            rowGap: '16px',
          }}>
            <CardTitleFontWrapper><b>{data.schemaName}</b></CardTitleFontWrapper>
            <Box sx={{
              display: 'inline-flex',
              flexWrap: 'wrap',
              columnGap: '42px',
              rowGap: '16px',
              flexGrow: 1,
            }}>
              <ContentWrapper>
                <img src={wholesaleImg} alt="dashboard"></img>
                <CardFontWrapper>{data.type}</CardFontWrapper>
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
                Source System
              </FontButtontWrapper>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}