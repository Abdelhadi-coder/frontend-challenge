import React, { useState } from 'react';
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
  Button,
  Drawer,
  IconButton,
  useMediaQuery
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import FolderOpenIcon from '@mui/icons-material/FolderOpenOutlined';
import { GridView } from '@mui/icons-material';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import SmsIcon from '@mui/icons-material/Sms';
import GoogleIcon from '@mui/icons-material/Google';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
  const isMobile = useMediaQuery('(max-width:900px)');
  const [open, setOpen] = useState(false);

  const content = (
    <Box
      sx={{
        width: isMobile ? 260 : 300,
        height: '100%',
        bgcolor: '#fff',
        borderRight: isMobile ? 'none' : '2px solid #eee',
        borderBottom: isMobile ? 'none' : '2px solid #eee',
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ flex: 1, overflowY: 'auto' }}>
        <a href="/">
          <Box display="flex" justifyContent="start" mb={1}>
            <img
              src="../src/assets/logo.png"
              alt="Logo"
              style={{ width: isMobile ? 70 : 90, objectFit: 'contain' }}
            />
          </Box>
        </a>
        <Divider sx={{ width: "100%"}} />
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
                  height: 31,
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
            mt: 2,
            bgcolor: '#fff',
            borderRadius: 1,
            fontSize: 14,
            height: 32,
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
            { text: 'Mon Centre d’aide', icon: <InfoOutlineIcon />, active: false },
          ].map(({ text, icon, active }) => (
            <ListItemButton
              key={text}
              selected={active}
              sx={{
                borderRadius: 1,
                bgcolor: active ? '#e8f0fe' : 'transparent',
                '&:hover': { bgcolor: active ? '#e8f0fe' : '#f7f7f7' },
              }}
            >
              <ListItemIcon
                sx={{ color: active ? '#0d47a1' : '#999', minWidth: 40 }}
              >
                {icon}
              </ListItemIcon>
              {!isMobile && (
                <ListItemText
                  primary={text}
                  primaryTypographyProps={{
                    fontWeight: active ? 600 : 400,
                    color: active ? '#0d47a1' : '#999',
                    fontSize: 14,
                  }}
                />
              )}
            </ListItemButton>
          ))}
        </List>

        {!isMobile && (
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
              <img
                src="../src/assets/flyer.png"
                alt="Flyers"
                style={{ width: '50%', marginBottom: 6 }}
              />
              <Typography variant="body2" color="text.secondary" fontSize={10} mb={2}>
                Personnalisez et commandez vos PLV pour booster l'engagement
                client. Créez des supports à votre image pour maximiser vos
                conversions.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{ borderRadius: 1, textTransform: 'none', fontWeight: 400 }}
              >
                COMMANDEZ
              </Button>
            </CardContent>
          </Card>
        )}
      </Box>

      <Box sx={{ borderTop: '1px solid #eee', mt: 2 }}>
        <List>
          <ListItemButton sx={{ borderRadius: 1, mb: 0.5 }}>
            <ListItemIcon sx={{ color: '#000', minWidth: 40 }}>
              <AccountCircleOutlinedIcon />
            </ListItemIcon>
            {!isMobile && (
              <ListItemText
                primary="Compte"
                primaryTypographyProps={{ fontWeight: 500, color: '#000' }}
              />
            )}
          </ListItemButton>
          <ListItemButton sx={{ borderRadius: 1 }}>
            <ListItemIcon sx={{ color: '#000', minWidth: 40 }}>
              <LogoutOutlinedIcon />
            </ListItemIcon>
            {!isMobile && (
              <ListItemText
                primary="Déconnexion"
                primaryTypographyProps={{ fontWeight: 500, color: '#000' }}
              />
            )}
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setOpen(true)}
            sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1300 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{ sx: { borderRight: 'none' } }}
          >
            {content}
          </Drawer>
        </>
      ) : (
        <Box sx={{ position: 'fixed', height: '100vh' }}>{content}</Box>
      )}
    </>
  );
};

export default Sidebar;
