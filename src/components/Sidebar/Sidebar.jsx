import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import CampaignIcon from '@mui/icons-material/Flag';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SmsIcon from '@mui/icons-material/Sms';
import HelpIcon from '@mui/icons-material/Help';
import GoogleIcon from '@mui/icons-material/Google';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 260,
        height: '100vh',
        bgcolor: '#f9fafb',
        borderRight: '1px solid #ddd',
        p: 3,
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        overflowY: 'auto',
        boxShadow: '2px 0 8px rgba(0,0,0,0.05)',
      }}
    >
      <Box>
        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
          sx={{ color: '#1976d2', letterSpacing: 1.2 }}
        >
          THE GIFT
        </Typography>

        <List>
          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#1976d2' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText
              primary="Mon tableau de bord"
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItemButton>

          <ListItemButton selected sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#0d47a1' }}>
              <CampaignIcon />
            </ListItemIcon>
            <ListItemText
              primary="Ma Campagne"
              primaryTypographyProps={{ fontWeight: 700 }}
            />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#1976d2' }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText
              primary="Récapitulatif des Utilisateurs"
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#1976d2' }}>
              <SmsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Campagnes SMS"
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#1976d2' }}>
              <GoogleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Gestion des Avis Google"
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ color: '#1976d2' }}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText
              primary="Centre d’aide"
              primaryTypographyProps={{ fontWeight: 600 }}
            />
          </ListItemButton>
        </List>
      </Box>

      <Box>
        <Divider sx={{ my: 3 }} />
        <List>
          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemText
              primary="Compte"
              primaryTypographyProps={{ fontWeight: 600, color: '#1976d2' }}
            />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemText
              primary="Déconnexion"
              primaryTypographyProps={{ fontWeight: 600, color: '#d32f2f' }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
