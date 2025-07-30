import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import FolderOpenIcon from '@mui/icons-material/FolderOpenOutlined';
import { GridView } from '@mui/icons-material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SmsIcon from '@mui/icons-material/Sms';
import HelpIcon from '@mui/icons-material/Help';
import GoogleIcon from '@mui/icons-material/Google';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 300,
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
            <ListItemIcon sx={{ color: '#999888' }}>
              <GridView />
            </ListItemIcon>
            <ListItemText
              primary="Mon tableau de bord"
              sx={{ color: '#999888' }}
              primaryTypographyProps={{ fontWeight: 400 }}
            />
          </ListItemButton>

          <ListItemButton selected sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#0d47a1' }}>
              <FolderOpenIcon />
            </ListItemIcon>
            <ListItemText
              primary="Ma Campagne"
              sx={{ color: '#0d47a1' }}
              primaryTypographyProps={{ fontWeight: 700 }}
            />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#999888' }}>
              <GroupsOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Récapitulatif des Utilisateurs"
              sx={{ color: '#999888' }}
              primaryTypographyProps={{ fontWeight: 400 }}
            />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#999888' }}>
              <InsertDriveFileOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Supports de diffusion"
              sx={{ color: '#999888' }}
              primaryTypographyProps={{ fontWeight: 400 }}
            />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#999888' }}>
              <SmsIcon />
            </ListItemIcon>
            <ListItemText
              primary="Campagnes SMS"
              sx={{ color: '#999888' }}
              primaryTypographyProps={{ fontWeight: 400 }}
            />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#999888' }}>
              <GoogleIcon />
            </ListItemIcon>
            <ListItemText
              primary="Gestion des Avis Google"
              sx={{ color: '#999888' }}
              primaryTypographyProps={{ fontWeight: 400 }}
            />
          </ListItemButton>

          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ color: '#999888' }}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText
              primary="Centre d’aide"
              sx={{ color: '#999888' }}
              primaryTypographyProps={{ fontWeight: 400 }}
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
