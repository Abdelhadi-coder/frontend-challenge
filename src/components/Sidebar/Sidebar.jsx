import React from 'react';
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Select,
  MenuItem,
  Card,
  CardContent,
  Button
} from '@mui/material';

import FolderOpenIcon from '@mui/icons-material/FolderOpenOutlined';
import { BorderLeft, GridView } from '@mui/icons-material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SmsIcon from '@mui/icons-material/Sms';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import GoogleIcon from '@mui/icons-material/Google';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 300,
        // height: '100vh',
        bgcolor: '#fff',
        borderRight: '2px solid #eee',
        borderBottom: '2px solid #eee',
        borderRadius: 3,
        p: 2,
        position: 'fixed',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflowY: 'scroll',
      }}
    >
      <Box>
        <Box display="flex" justifyContent="start" mb={1}>
          <img
            src="../src/assets/logo.png"
            alt="Logo"
            style={{ width: 90, objectFit: 'contain' }}
          />
        </Box>
        <Divider sx={{ width: "150%"}} />
        {/* <Select
          fullWidth
          defaultValue=""
          displayEmpty
          sx={{
            mb: 0.5,
            mt: 1,
            bgcolor: '#fff',
            borderRadius: 1,
            borderLeft: '8px solid blue',
            outline: "none", 
            // border: '1px solid #ddd',
            height: 30,
            fontSize: 14,
          }}
        >
          <MenuItem value="">Tous les enseignes</MenuItem>
        </Select> */}
        <Select
          fullWidth
          defaultValue=""
          displayEmpty
          renderValue={(selected) => (
            <Box display="flex" alignItems="center">
              <Box
                sx={{
                  ml: -1.7,
                  width: 9,
                  height: 35,
                  bgcolor: 'blue',
                  borderTopLeftRadius: 3,
                  borderBottomLeftRadius: 3,
                  mr: 1,
                }}
              />
              {selected || 'Tous les enseignes'}
            </Box>
          )}
          sx={{
            mb: 0.5,
            mt: 1,
            bgcolor: '#fff',
            borderRadius: 1,
            fontSize: 14,
            height: 36,
            '& fieldset': { borderColor: '#ddd' },
          }}
        >
          <MenuItem value="">Tous les enseignes</MenuItem>
        </Select>


        <List>
          {[
            { text: 'Mon tableau de bord', icon: <GridView />, active: false },
            { text: 'Ma Campagne', icon: <FolderOpenIcon />, active: true },
            { text: 'Récapitulatif des Utilisateurs', icon: <GroupsOutlinedIcon />, active: false },
            { text: 'Supports de diffusion', icon: <InsertDriveFileOutlinedIcon />, active: false },
            { text: 'Campagnes SMS', icon: <SmsIcon />, active: false },
            { text: 'Gestion des Avis Google', icon: <GoogleIcon />, active: false },
            { text: 'Mon Centre d’aide', icon: <HelpOutlineIcon />, active: false },
          ].map(({ text, icon, active }) => (
            <ListItemButton
              key={text}
              selected={active}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                bgcolor: active ? '#e8f0fe' : 'transparent',
                '&:hover': { bgcolor: active ? '#e8f0fe' : '#f7f7f7' },
              }}
            >
              <ListItemIcon
                sx={{ color: active ? '#0d47a1' : '#999', minWidth: 40 }}
              >
                {icon}
              </ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{
                  fontWeight: active ? 600 : 400,
                  color: active ? '#0d47a1' : '#999',
                  fontSize: 14,
                }}
              />
            </ListItemButton>
          ))}
        </List>

        <Card
          variant="outlined"
          sx={{
            mt: 7,
            borderRadius: 3,
            borderWidth: 2,
            backgroundColor: '#f0f3ff', 
            borderColor: '#3f51b5',
            textAlign: 'center',
            overflow: 'hidden',
          }}
        >
          <CardContent sx={{ p: 2 }}>
            <Typography variant="subtitle2" fontWeight={600} fontSize={12} mb={1}>
              Commandez Vos Flyers Personnalisés
            </Typography>
            {/* <img
              src="/flyers.png"
              alt="Flyers"
              style={{ width: '100%', marginBottom: 8 }}
            /> */}
            <Typography variant="body2" color="text.secondary" fontSize={10} mb={2}>
              Personnalisez et commandez vos PLV pour booster l'engagement
              client. Créez des supports à votre image pour maximiser vos
              conversions.
            </Typography>
            <Button
              variant="contained"
              fullWidth
              sx={{ borderRadius: 1, textTransform: 'none', fontWeight: 600 }}
            >
              COMMANDEZ
            </Button>
          </CardContent>
        </Card>
      </Box>

      <Box>
        <List>
          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#000', minWidth: 40 }}>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Compte"
              primaryTypographyProps={{ fontWeight: 500, color: '#000' }}
            />
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ color: '#000', minWidth: 40 }}>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            <ListItemText
              primary="Déconnexion"
              primaryTypographyProps={{ fontWeight: 500, color: '#000' }}
            />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
