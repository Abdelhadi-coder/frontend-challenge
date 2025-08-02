import React from 'react';
import Sidebar from '../../components/Sidebar';
import { Box } from '@mui/material';
import Header from '../../components/Header/Header'
import Home from '../../components/Home/Home';

const CampaignPage = () => {
  return (
  <Box sx={{ display: 'flex' }}>
    <Sidebar />
    <Box sx={{ marginLeft: '333px', width: '100%' }}>
      <Header />
      <Home />
    </Box>
  </Box>
);
};

export default CampaignPage;
