import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Divider,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GoogleIcon from '@mui/icons-material/Google';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Home = () => {
  return (
    <Box sx={{ p: 3, bgcolor: '#fff', minHeight: '100vh' }}>
      <Paper
        elevation={0}
        sx={{
          bgcolor: '#fff7e6',
          border: '1px solid #ffce0b',
          borderRadius: 2,
          borderWidth: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          p: 2.5,
          py: 4,
          my: 4,
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <Box
            sx={{
              width: 45,
              height: 45,
              borderRadius: '50%',
              bgcolor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              ml: 2,
              filter: "drop-shadow(0 0 8px rgba(0,0,0,0.15))",
            }}
          >
            <LockOutlinedIcon sx={{ color: "#ffce0b" }} />
          </Box>
          <Box>
            <Typography fontSize={22} ml={1.5} fontWeight={900}>Votre Code PIN n’est pas configuré</Typography>
            <Typography ml={1.5} variant="body2" color="black" mt={1}>
              Activez-le pour sécuriser la récupération des cadeaux par vos clients.
            </Typography>
          </Box>
        </Box>

        <Button
          sx={{
            bgcolor: '#ffb400',
            color: '#000',
            textTransform: 'none',
            fontWeight: 400,
            fontSize: 13,
            '&:hover': { bgcolor: '#ffa500' },
            mr: 3,
            px: 2,
            py: 1,

          }}
        >
          CONFIGURER MON CODE
        </Button>
      </Paper>

      <Box>
        <Box display="flex" alignItems="center" mt={8} mb={1}>
          <Box sx={{ 
            width: 7, 
            height: 72, 
            bgcolor: '#1976d2', 
            mr: 2,
           }} 
          />
          <Box>
            <Typography variant="h6" fontWeight={700}>
              ORGANISEZ VOS ACTIONS
            </Typography>
            <Typography variant="body2" color="black" mb={0} width={500}>
              Définissez l’ordre et les actions à réaliser par vos clients pour maximiser l’engagement.
            </Typography>
          </Box>
        </Box>
       

        <Button
          variant="contained"
          endIcon={<AddIcon />}
          sx={{
            bgcolor: '#3f5efb',
            textTransform: 'none',
            fontWeight: 400,
            fontSize: 13,
            mb: 2,
            float: 'right',
            '&:hover': { bgcolor: '#2c3edc' },
          }}
        >
          Ajouter une action
        </Button>
        <TableContainer
      component={Paper}
      sx={{
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0px 2px 6px rgba(0,0,0,0.08)",
      }}
    >
      <Table
        sx={{
          borderCollapse: "collapse",
          "& td, & th": { border: "1px solid #ddd" },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 600 }}>Ordre des actions</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
            <TableCell sx={{ fontWeight: 600 }} colSpan={2}>Cible</TableCell>
            {/* <TableCell sx={{ fontWeight: 600, width: 60 }} align="center"> */}
              {/* Colonne pour les boutons (supprimer/info...) */}
            {/* </TableCell> */}
          </TableRow>
        </TableHead>

        <TableBody>
          {/* Ligne 1 */}
          <TableRow>
            <TableCell>Première action</TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <Box
                  sx={{
                    width: 35,
                    height: 35,
                    borderRadius: '50%',
                    bgcolor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    filter: "drop-shadow(0 0 8px rgba(0,0,0,0.15))",
                  }}
                >
                  <GoogleIcon sx={{ color: "#ffce0b" }} />
                </Box>
                <Typography> Avis Google </Typography>
              </Box>

            </TableCell>
            <TableCell>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography color="text.secondary">
                  https://google.com/fr
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  gap={0.5}
                  sx={{ bgcolor: "#f6ffed", borderRadius: 1, px: 1 }}
                >
                  <CheckCircleIcon sx={{ color: "#52c41a", fontSize: 16 }} />
                  <Typography fontSize={12} color="#52c41a">
                    Intégré
                  </Typography>
                </Box>
              </Box>
            </TableCell>
            <TableCell align="center">
              <IconButton size="small">
                <DeleteOutlineIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>

          {/* Ligne 2 - ajout d'une action (colSpan pour fusionner) */}
          <TableRow>
            <TableCell>Première action</TableCell>
            <TableCell colSpan={3}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={1}
                sx={{ color: "#3f5efb", fontWeight: 500, py: 1 }}
              >
                <Typography>Ajouter une Deuxième action</Typography>
              </Box>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>Dernière action</TableCell>
            <TableCell colSpan={3} display="flex">
              <Box display="flex" alignItems="center" gap={1}>
                <GroupAddIcon sx={{ color: "#3f5efb" }} />
                <Typography> Parrainage (Par défaut) </Typography>
              </Box>
              <Typography color="#3f5efb" sx={{ cursor: "pointer" }}>
                Modifier
              </Typography>
              <InfoOutlinedIcon sx={{ color: "#bbb", fontSize: 18 }} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
      </Box>

      <Box display={'flex'} mt={2}>
        <Box sx={{ 
            width: 7, 
            height: 60, 
            bgcolor: '#ffce0b', 
           }} 
          />
        <Paper
          elevation={0}
          sx={{
            bgcolor: '#fffbe6',
            p: 1.5,
            ml: 1,
            width: "100%",
          }}
        >
          <Typography variant="body2" color="warning.main" fontSize={12}>
            ⚠️ Une seule action = une seule participation
          </Typography>
          <Typography variant="body2" color="warning.main" fontSize={12}>
            Vos clients ne joueront qu’une seule fois si vous ne proposez qu’une seule action.
          </Typography>
        </Paper>
      </Box>

    </Box>
  );
};

export default Home;
