import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Modal,
  Fade
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import QrCode2Icon from '@mui/icons-material/QrCode2';

const Header = () => {
  const [openPin, setOpenPin] = useState(false);
  const [openQR, setOpenQR] = useState(false);

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box
      sx={{
        display: 'flex',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: 'center',
        bgcolor: '#f9fafb',
        py: 3,
        borderBottom: '1px solid #eee',
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            color: '#1976d2',
            position: 'relative',
            display: 'inline-block',
            mb: 1,
          }}
        >
          <Box display="flex" justifyContent="start" mb={1} ml={3}>
            <img
              src="../src/assets/header.png"
              alt="Logo"
              style={{ width: 410, objectFit: 'contain' }}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: -10,
              width: '120%',
              height: 12,
              border: '2px solid #1976d2',
              borderRadius: '50%',
              transform: 'translateY(50%)',
              zIndex: -1,
            }}
          />
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="flex-end">
        <Box display="flex" gap={1.5} mb={1}>
          <Button
            variant="outlined"
            onClick={() => setOpenPin(true)}
            sx={{
              bgcolor: '#fff',
              color: '#000',
              borderColor: '#ddd',
              textTransform: 'none',
              position: 'relative',
              fontSize: 13,
              px: 2,
              py: 0.3,
              height: 32,
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: 6,
                bgcolor: '#5500a4',
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
              },
            }}
          >
            Mon Code PIN
          </Button>

          <Button
            variant="contained"
            startIcon={<QrCode2Icon />}
            onClick={() => setOpenQR(true)}
            sx={{
              bgcolor: '#ff9800',
              color: '#fff',
              textTransform: 'none',
              fontSize: 13,
              px: 1.5,
              py: 0.3,
              minWidth: 'auto',
              height: 32,
              '&:hover': { bgcolor: '#fb8c00' },
            }}
          >
            QR Code
          </Button>

          <Button
            variant="contained"
            sx={{
              py: 0.5,
              height: 33,
              bgcolor: '#1976d2',
              textTransform: 'none',
              fontSize: 10,
              fontWeight: 600,
              '&:hover': { bgcolor: '#3f5efb' },
            }}
          >
            SAUVEGARDER
          </Button>

          {/* Bouton menu */}
          <IconButton
            sx={{
              bgcolor: '#f0f3ff',
              border: '1px solid lightgray',
              borderRadius: 1,
              height: 30,
              px: 0.3,
              mr: 8,
              '&:hover': { bgcolor: '#e0e5f9ff' },
            }}
          >
            <MoreHorizIcon sx={{ color: "#3f5efb" }} />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="center" gap={1}>
          <Typography variant="body2" sx={{ color: '#333', mt: 4 }}>
            Disponible jusqu’au 10 déc. 2025
          </Typography>
          <Box sx={{ width: 7, height: 15, bgcolor: '#3f5efb', mt: 4, mr: 8 }} />
        </Box>
      </Box>

      <Modal
        open={openPin}
        onClose={() => setOpenPin(false)}
        closeAfterTransition
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}
      >
        <Fade in={openPin}>
          <Box sx={modalStyle}>
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={openQR}
        onClose={() => setOpenQR(false)}
        closeAfterTransition
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: 'rgba(0,0,0,0.2)',
        }}
      >
        <Fade in={openQR}>
          <Box sx={modalStyle}>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Header;