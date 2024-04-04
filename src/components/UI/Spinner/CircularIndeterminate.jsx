import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

export default function CircularIndeterminate() {
  return (
         <Box sx={{ display: 'flex',justifyContent:'center',alignItems:'center',margin:'25px' }}>
      <CircularProgress size={125} />
    </Box>
   );
}