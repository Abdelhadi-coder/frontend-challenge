import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Box } from '@mui/material';
import Header from '../../components/Header/Header'

const CampaignPage = () => {
  return (
  <Box sx={{ display: 'flex' }}>
    <Sidebar />
    <Box sx={{ marginLeft: '333px', width: '100%' }}>
      <Header />
    </Box>
  </Box>
);
};

export default CampaignPage;
