import React from 'react';
import { Box, Modal, Fade } from '@mui/material';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  borderRadius: 2,
  boxShadow: 24,
  p: 20,
};

const ModalPop = ({ open, setOpen, children }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      sx={{
        backdropFilter: 'blur(6px)',
        backgroundColor: 'rgba(0,0,0,0.2)',
      }}
    >
      <Fade in={open}>
        <Box sx={modalStyle}>
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalPop;
