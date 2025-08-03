import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Box, Typography, Button, TextField } from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Personalisation = ({ onDrop, profile = "BASC" }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const [open, setOpen] = useState(false);
  const [color1, setColor1] = useState("#3F5EFB");
  const [color2, setColor2] = useState("#F59000");
  const borderColor1 = lightenColor(color1, 80);
  const borderColor2 = lightenColor(color2, 80);
  const [errors, setErrors] = useState({ color1: "", color2: "" });
  const validateColor = (value) => /^#([A-Fa-f0-9]{6})$/.test(value);


  const handleColorChange = (field, value) => {
    if (profile === "BASIC") return;
    if (field === "color1") setColor1(value);
    if (field === "color2") setColor2(value);

    setErrors((prev) => ({
      ...prev,
      [field]: validateColor(value) ? "" : "Format hex invalide (#RRGGBB)",
    }));
  };

  const handlePreview = () => {
    alert("Voici votre aperçu");
  };

  function lightenColor(hex, percent) {
    hex = hex.replace(/^#/, "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.min(255, Math.floor(r + (255 - r) * (percent / 100)));
    g = Math.min(255, Math.floor(g + (255 - g) * (percent / 100)));
    b = Math.min(255, Math.floor(b + (255 - b) * (percent / 100)));

    return "#" + [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");
  }

  return (
    <Box sx={{ mt: 5 }}>
      <Box
        onClick={() => setOpen(!open)}
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          mb: 2,
        }}
      >
        <Box sx={{ width: 8, height: 62, bgcolor: "#3f5efb", mr: 2 }} />
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
            PERSONNALISEZ VOTRE JEU
          </Typography>
          <Typography sx={{ fontSize: 14, color: "black" }}>
            Importez votre logo et sélectionnez vos couleurs pour créer un jeu à l'image de votre <br />
            marque. Offrez à vos clients une expérience unique, entièrement personnalisée.
          </Typography>
        </Box>
        <KeyboardArrowUpIcon
          sx={{
            ml: "auto",
            fontSize: "40px",
            color: "#3f5efb",
            transform: open ? "rotate(0deg)" : "rotate(180deg)",
            transition: "transform 0.3s",
          }}
        />
      </Box>

      {open && (
        <Box
          sx={{
            border: '1px solid #e8e8e8',
            borderRadius: '10px',
            p: 2,
            mt: 5,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: 4,
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'nowrap',
            }}
          >
            <Box sx={{ flex: 1, m: 2 }}>
              <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Box sx={{ width: 10, height: 20, bgcolor: '#3f5efb' }} />
                <Typography sx={{ fontSize: "15px", color: "black" }}>
                  Glissez-déposez votre logo
                </Typography>
              </Box>
              <Box
                {...getRootProps()}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  width: '450px',
                  mx: "auto",
                  border: '2px dashed #e8e8e8',
                  cursor: 'pointer',
                  bgcolor: isDragActive ? 'grey.100' : 'background.paper',
                  px: 2,
                  py: 14,
                  boxSizing: 'border-box',
                  gap: 2
                }}
              >
                <input {...getInputProps()} />
                <FileUploadIcon
                  sx={{
                    color: "white",
                    bgcolor: "#d9d9d9",
                    borderRadius: "50%",
                    p: 1,
                    fontSize: "2rem",
                    mb: 3
                  }}
                />
                <Button sx={{ bgcolor: "#415eff" }} variant="contained" size="large">
                  Sélectionner un fichier
                </Button>
              </Box>
            </Box>

            <Box sx={{ flex: 1, m: 2 }}>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box sx={{ width: 10, height: 20, bgcolor: '#3f5efb' }} />
                <Typography sx={{ fontSize: "15px", color: "black" }}>
                  Importez vos couleurs
                </Typography>
                <Box
                  onClick={handlePreview}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ml: '12em',
                    cursor: "pointer",
                    color: "#757ee5",
                    textDecoration: "underline",
                    fontSize: "13px"
                  }}
                >
                  <Typography sx={{ fontSize: "15px", mr: 0.5 }}>
                    Voir l'aperçu
                  </Typography>
                  <VisibilityOutlinedIcon sx={{ color: "#757ee5", fontSize: "18px" }} />
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: 3 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 5, mt: 8 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 150,
                      bgcolor: color1,
                      border: `solid ${borderColor1} 6px`,
                      borderRadius: "50px",
                      opacity: profile === "BASIC" ? 0.5 : 1
                    }}
                  />
                  <TextField
                    size="small"
                    value={color1}
                    disabled={profile === "BASIC"}
                    onChange={(e) => handleColorChange("color1", e.target.value)}
                    error={!!errors.color1}
                    helperText={errors.color1}
                    sx={{ 
                      mt: 2, 
                      width: 90,
                      "& .MuiInputBase-input": {
                        fontSize: "14px",
                      },
                    }}
                    
                  />
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 5, mt: 8 }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 150,
                      bgcolor: color2,
                      border: `solid ${borderColor2} 6px`,
                      borderRadius: "50px",
                      opacity: profile === "BASIC" ? 0.5 : 1,
                    }}
                  />
                  <TextField
                    size="small"
                    value={color2}
                    disabled={profile === "BASIC"}
                    onChange={(e) => handleColorChange("color2", e.target.value)}
                    error={!!errors.color2}
                    helperText={errors.color2}
                    sx={{ 
                      mt: 2, 
                      width: 90,
                      "& .MuiInputBase-input": {
                        fontSize: "14px",
                      },
                    }}
                  />
                </Box>
              </Box>

              <Typography sx={{ fontSize: "12px", color: "#c7c7c7", mt: 2, ml: 5, px: 1, py: 0.5 }}>
                Personnalisez votre jeu en <br />
                ajoutant jusqu’à deux couleurs
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Personalisation;
