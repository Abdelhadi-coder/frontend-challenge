import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Box } from '@mui/material';

const CampaignPage = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ marginLeft: '340px', padding: 3, width: '100%' }}>
        <h1>Page Ma Campagne</h1>
      </Box>
    </Box>
  );
};

export default CampaignPage;
