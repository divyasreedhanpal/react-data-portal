import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CustomTabs({ data }) {
  const [value, setValue] = React.useState(data[0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="test" indicatorColor="secondary">
      {
        data.map(e =>
          <Tab label={e} key={e} value={e} sx={{
            textTransform: 'none',
          }}></Tab>
        )
      }
    </Tabs>
  );
}