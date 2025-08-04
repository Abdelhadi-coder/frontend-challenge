// import React, { useState } from 'react';
// import {
//   Box,
//   Typography,
//   Button,
//   Paper,
//   Table,
//   TableContainer,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   IconButton,
//   Divider,
// } from '@mui/material';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import AddIcon from '@mui/icons-material/Add';
// import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import GoogleIcon from '@mui/icons-material/Google';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import ModalPop from '../ModalPop';
// import Personalisation from './Personalisation';
// import Game from './Game';

// const Home = () => {
//   const [openCode, setOpenCode] = useState(false);

//   return (
//     <Box sx={{ p: 3, bgcolor: '#fff', minHeight: '100vh' }}>
//       <Paper
//         elevation={0}
//         sx={{
//           bgcolor: '#fff7e6',
//           border: '1px solid #ffce0b',
//           borderRadius: 2,
//           borderWidth: 2,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           p: 2.5,
//           py: 4,
//           my: 4,
//         }}
//       >
//         <Box display="flex" alignItems="center" gap={2}>
//           <Box
//             sx={{
//               width: 45,
//               height: 45,
//               borderRadius: '50%',
//               bgcolor: '#fff',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               ml: 2,
//               filter: "drop-shadow(0 0 8px rgba(0,0,0,0.15))",
//             }}
//           >
//             <LockOutlinedIcon sx={{ color: "#ffce0b" }} />
//           </Box>
//           <Box>
//             <Typography fontSize={22} ml={1.5} fontWeight={900}>Votre Code PIN n’est pas configuré</Typography>
//             <Typography ml={1.5} variant="body2" color="black" mt={1}>
//               Activez-le pour sécuriser la récupération des cadeaux par vos clients.
//             </Typography>
//           </Box>
//         </Box>

//         <Button
//           onClick={() => setOpenCode(true)}
//           sx={{
//             bgcolor: '#ffb400',
//             color: '#000',
//             textTransform: 'none',
//             fontWeight: 400,
//             fontSize: 13,
//             '&:hover': { bgcolor: '#ffa500' },
//             mr: 3,
//             px: 2,
//             py: 1,
//           }}
//         >
//           CONFIGURER MON CODE
//         </Button>
//       </Paper>

//       <ModalPop open={openCode} setOpen={setOpenCode}>
//       </ModalPop>

//       <Box>
//         <Box display="flex" alignItems="center" mt={8} mb={1}>
//           <Box sx={{ 
//             width: 7, 
//             height: 72, 
//             bgcolor: '#1976d2', 
//             mr: 2,
//            }} 
//           />
//           <Box>
//             <Typography variant="h6" fontWeight={700}>
//               ORGANISEZ VOS ACTIONS
//             </Typography>
//             <Typography variant="body2" color="black" mb={0} width={500}>
//               Définissez l’ordre et les actions à réaliser par vos clients pour maximiser l’engagement.
//             </Typography>
//           </Box>
//         </Box>
       

//         <Button
//           variant="contained"
//           endIcon={<AddIcon />}
//           sx={{
//             bgcolor: '#3f5efb',
//             textTransform: 'none',
//             fontWeight: 400,
//             fontSize: 13,
//             mb: 2,
//             float: 'right',
//             '&:hover': { bgcolor: '#2c3edc' },
//           }}
//         >
//           Ajouter une action
//         </Button>
//         <TableContainer
//           elevation={0}
//           component={Paper}
//           sx={{
//             borderRadius: 2,
//             overflow: "hidden",
//             border: "0.2px solid #ddd"
//           }}
//         >
//         <Table
//           sx={{
//             "& td, & th": { border: "1px solid #ddd" },
//           }}
//         >
//         <TableHead>
//           <TableRow>
//             <TableCell sx={{ fontWeight: 600 }}>Ordre des actions</TableCell>
//             <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
//             <TableCell sx={{ fontWeight: 600 }} colSpan={2}>Cible</TableCell>
//             {/* <TableCell sx={{ fontWeight: 600, width: 60 }} align="center"> */}{/* </TableCell> */}
//           </TableRow>
//         </TableHead>

//         <TableBody>
//           <TableRow>
//             <TableCell>Première action</TableCell>
//             <TableCell>
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Box
//                   sx={{
//                     width: 35,
//                     height: 35,
//                     borderRadius: '50%',
//                     bgcolor: '#fff',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     ml: 0.6,
//                     filter: "drop-shadow(0 0 8px rgba(0,0,0,0.15))",
//                   }}
//                 >
//                   <GoogleIcon sx={{ color: "#ffce0b" }} />
//                 </Box>
//                 <Typography ml={1}> Avis Google </Typography>
//               </Box>

//             </TableCell>
//             <TableCell>
//               <Box display="flex" alignItems="center" gap={1}>
//                 <Typography color="#999">
//                   https://google.com/fr
//                 </Typography>
//                 <Box
//                   display="flex"
//                   alignItems="center"
//                   gap={0.5}
//                   sx={{ bgcolor: "#dcfce7", borderRadius: 1, px: 1, py: 0.4 }}
//                 >
//                   <CheckCircleOutlineOutlinedIcon sx={{ color: "#005300", fontSize: 16 }} />
//                   <Typography fontSize={12} color="#005300">
//                     Intégré
//                   </Typography>
//                 </Box>
//               </Box>
//             </TableCell>
//             <TableCell align="center">
//               <IconButton size="small">
//                 <DeleteOutlineIcon fontSize="small" />
//               </IconButton>
//             </TableCell>
//           </TableRow>

//           <TableRow>
//             <TableCell>Première action</TableCell>
//             <TableCell colSpan={3}>
//               <Box
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="start"
//                 gap={1}
//                 ml={1.1}
//                 sx={{ color: "#3f5efb", fontWeight: 500, py: 1 }}
//               >
//                 <AddCircleOutlineIcon color='#3f5efb' />
//                 <Typography ml={1.8}>Ajouter une Deuxième action</Typography>
//               </Box>
//             </TableCell>
//           </TableRow>

//           <TableRow>
//             <TableCell>Dernière action</TableCell>
//             <TableCell colSpan={3} display="flex" >
//               <Box display={"flex"} justifyContent={"space-between"}>
//                 <Box display="flex" alignItems="center" gap={1}>
//                   <Box
//                     sx={{
//                       width: 35,
//                       height: 35,
//                       borderRadius: '50%',
//                       bgcolor: '#fff',
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       ml: 0.6,
//                       filter: "drop-shadow(0 0 8px rgba(0,0,0,0.15))",
//                     }}
//                   >
//                   <PeopleAltIcon sx={{ color: "#3f5efb" }} />
//                   </Box>
//                   <Typography ml={1}> Parrainage (Par défaut) </Typography>

//                 </Box>
//                 <Typography color="#3f5efb" sx={{ cursor: "pointer" }}>
//                   Modifier
//                 </Typography>
//                 <Box display={"flex"} justifyContent={'center'} alignItems={'center'}>
//                   <Typography fontSize={14} color="#3f5efb" sx={{ cursor: "pointer" }}>
//                     En savoir plus
//                   </Typography>
//                   <InfoOutlinedIcon sx={{ color: "#3f5efb", fontSize: 14, ml: 0.5 }} />
//                 </Box>
//               </Box>
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//       </Box>

//       <Box display={'flex'} mt={2}>
//         <Box sx={{ 
//             width: 7, 
//             height: 60, 
//             bgcolor: '#ffce0b', 
//            }} 
//           />
//         <Paper
//           elevation={0}
//           sx={{
//             bgcolor: '#fffbe6',
//             p: 1.5,
//             ml: 1,
//             width: "100%",
//             borderRadius: 0,
//           }}
//         >
//           <Typography variant="body2" color="warning.main" fontSize={12}>
//             ⚠️ Une seule action = une seule participation
//           </Typography>
//           <Typography variant="body2" color="warning.main" fontSize={12}>
//             Vos clients ne joueront qu’une seule fois si vous ne proposez qu’une seule action.
//           </Typography>
//         </Paper>
//       </Box>
//       <Game />
//       <Personalisation />
//     </Box>
//   );
// };

// export default Home;

import React, { useState } from 'react';
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
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ModalPop from '../ModalPop';
import Personalisation from './Personalisation';
import Game from './Game';

import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  useSortable,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const actionIcons = {
  google: <GoogleIcon sx={{ color: "#ffce0b" }} />,
  parrainage: <PeopleAltIcon sx={{ color: "#3f5efb" }} />,
};

const SortableRow = ({ action, index, handleDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: action.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <TableCell>
        {index === 0
          ? 'Première action'
          : index === 2
          ? 'Dernière action'
          : `${index + 1}ème action`}
      </TableCell>

      {action.type === 'add' ? (
        <TableCell colSpan={3}>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="start"
            gap={1}
            ml={1.1}
            sx={{ color: "#3f5efb", fontWeight: 500, py: 1 }}
          >
            <AddCircleOutlineIcon color='#3f5efb' />
            <Typography ml={1.8}>{action.label}</Typography>
          </Box>
        </TableCell>
      ) : action.type === 'google' ? (
        <>
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
                  ml: 0.6,
                  filter: "drop-shadow(0 0 8px rgba(0,0,0,0.15))",
                }}
              >
                {actionIcons[action.type]}
              </Box>
              <Typography ml={1}>{action.label}</Typography>
            </Box>
          </TableCell>
          <TableCell>
            <Box display="flex" alignItems="center" gap={1}>
              <Typography color="#999">
                {action.url}
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                gap={0.5}
                sx={{ bgcolor: "#dcfce7", borderRadius: 1, px: 1, py: 0.4 }}
              >
                <CheckCircleOutlineOutlinedIcon sx={{ color: "#005300", fontSize: 16 }} />
                <Typography fontSize={12} color="#005300">
                  Intégré
                </Typography>
              </Box>
            </Box>
          </TableCell>
          <TableCell align="center">
            <IconButton size="small" onClick={() => handleDelete(action.id)}>
              <DeleteOutlineIcon fontSize="small" />
            </IconButton>
          </TableCell>
        </>
      ) : (
        <TableCell colSpan={3}>
          <Box display={"flex"} justifyContent={"space-between"}>
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
                  ml: 0.6,
                  filter: "drop-shadow(0 0 8px rgba(0,0,0,0.15))",
                }}
              >
                {actionIcons[action.type]}
              </Box>
              <Typography ml={1}>{action.label}</Typography>
            </Box>
          </Box>
        </TableCell>
      )}
    </TableRow>
  );
};

const Home = () => {
  const [openCode, setOpenCode] = useState(false);
  const [actions, setActions] = useState([
    { id: '1', type: 'google', label: 'Avis Google', url: 'https://google.com/fr' },
    { id: '2', type: 'add', label: 'Ajouter une Deuxième action' },
    { id: '3', type: 'parrainage', label: 'Parrainage (Par défaut)' },
  ]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDelete = (id) => {
    setActions(actions.filter(a => a.id !== id));
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    const oldIndex = actions.findIndex(a => a.id === active.id);
    const newIndex = actions.findIndex(a => a.id === over.id);
    setActions(arrayMove(actions, oldIndex, newIndex));
  };

  const duplicates = actions
    .map(a => a.type)
    .filter((type, i, arr) => type !== 'add' && arr.indexOf(type) !== i);

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
          onClick={() => setOpenCode(true)}
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

      <ModalPop open={openCode} setOpen={setOpenCode} />

      <Box>
        <Box display="flex" alignItems="center" mt={8} mb={1}>
          <Box sx={{ width: 7, height: 72, bgcolor: '#1976d2', mr: 2 }} />
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
          elevation={0}
          component={Paper}
          sx={{
            borderRadius: 2,
            overflow: "hidden",
            border: "0.2px solid #ddd"
          }}
        >
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={actions.map(a => a.id)} strategy={verticalListSortingStrategy}>
              <Table sx={{ "& td, & th": { border: "1px solid #ddd" } }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 600 }}>Ordre des actions</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Action</TableCell>
                    <TableCell sx={{ fontWeight: 600 }} colSpan={2}>Cible</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {actions.map((action, index) => (
                    <SortableRow
                      key={action.id}
                      action={action}
                      index={index}
                      handleDelete={handleDelete}
                    />
                  ))}
                </TableBody>
              </Table>
            </SortableContext>
          </DndContext>
        </TableContainer>
      </Box>

      {duplicates.length > 0 && (
        <Box display={'flex'} mt={2}>
          <Box sx={{ width: 7, height: 60, bgcolor: '#ffce0b' }} />
          <Paper
            elevation={0}
            sx={{
              bgcolor: '#fffbe6',
              p: 1.5,
              ml: 1,
              width: "100%",
              borderRadius: 0,
            }}
          >
            <Typography variant="body2" color="warning.main" fontSize={12}>
              ⚠️ Attention : certaines actions sont en double ({duplicates.join(', ')})
            </Typography>
          </Paper>
        </Box>
      )}

      <Box display={'flex'} mt={2}>
        <Box sx={{ width: 7, height: 60, bgcolor: '#ffce0b' }} />
        <Paper
          elevation={0}
          sx={{
            bgcolor: '#fffbe6',
            p: 1.5,
            ml: 1,
            width: "100%",
            borderRadius: 0,
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
      <Game />
      <Personalisation />
    </Box>
  );
};

export default Home;