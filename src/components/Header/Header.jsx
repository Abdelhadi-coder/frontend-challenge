import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  useMediaQuery
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import ModalPop from '../ModalPop';

const Header = () => {
  const [openPin, setOpenPin] = useState(false);
  const [openQR, setOpenQR] = useState(false);

  const isTablet = useMediaQuery('(max-width:1024px)');
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Box
      sx={{
        display: 'flex',
        width: "100%",
        justifyContent: 'space-between',
        alignItems: isMobile ? 'flex-start' : 'center',
        bgcolor: '#f9fafb',
        py: isMobile ? 2 : 3,
        px: isMobile ? 2 : 0,
        borderBottom: '1px solid #eee',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 2 : 0,
      }}
    >
      <Box sx={{ width: isMobile ? '100%' : 'auto' }}>
        <Box display="flex" justifyContent={isMobile ? "center" : "start"} mb={1}>
          <img
            src="../src/assets/header.png"
            alt="Logo"
            style={{
              width: isMobile ? 180 : isTablet ? 300 : 410,
              objectFit: 'contain'
            }}
          />
        </Box>

        {!isMobile && (
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: 12,
              border: '2px solid #1976d2',
              borderRadius: '50%',
              transform: 'translateY(-6px)',
              zIndex: -1,
            }}
          />
        )}
      </Box>
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "column"}
        alignItems={isMobile ? "center" : "flex-end"}
        width={isMobile ? "100%" : "auto"}
      >
        <Box
          display="flex"
          gap={isMobile ? 1 : 1.5}
          mb={1}
          flexWrap="wrap"
          justifyContent={isMobile ? "center" : "flex-end"}
        >
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
              py: 0.5,
              height: 35,
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
            startIcon={<QrCode2Icon />}
            onClick={() => setOpenQR(true)}
            sx={{
              bgcolor: '#ff9800',
              color: '#fff',
              textTransform: 'none',
              fontSize: 13,
              px: 1.5,
              minWidth: 'auto',
              height: 35,
              '&:hover': { bgcolor: '#fb8c00' },
            }}
          >
            QR Code
          </Button>

          <Button
            variant="contained"
            sx={{
              height: 35,
              bgcolor: '#1976d2',
              textTransform: 'none',
              fontSize: isMobile ? 11 : 10,
              fontWeight: 600,
              '&:hover': { bgcolor: '#3f5efb' },
            }}
          >
            SAUVEGARDER
          </Button>

          {!isMobile && (
            <IconButton
              sx={{
                bgcolor: '#f0f3ff',
                border: '1px solid lightgray',
                borderRadius: 1,
                height: 34,
                px: 0.5,
                mr: 8,
                '&:hover': { bgcolor: '#e0e5f9ff' },
              }}
            >
              <MoreHorizIcon sx={{ color: "#3f5efb" }} />
            </IconButton>
          )}
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          justifyContent={isMobile ? "center" : "flex-end"}
          width="100%"
        >
          <Typography
            variant="body2"
            sx={{ color: '#333', mt: isMobile ? 1 : 4, textAlign: isMobile ? 'center' : 'right' }}
          >
            Disponible jusqu’au 10 déc. 2025
          </Typography>
          {!isMobile && (
            <Box sx={{ width: 7, height: 15, bgcolor: '#3f5efb', mt: 4, mr: 8 }} />
          )}
        </Box>
      </Box>

      <ModalPop open={openPin} setOpen={setOpenPin}></ModalPop>
      <ModalPop open={openQR} setOpen={setOpenQR}></ModalPop>
    </Box>
  );
};

export default Header;
