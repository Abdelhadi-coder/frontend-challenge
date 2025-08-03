import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import GameCard from "../GameCard";

const Game = ({ profile = "BASIC" }) => {
  const [open, setOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = [
    "../src/assets/wheel.jpg",
    "../src/assets/mystery.png",
    "../src/assets/slot.png",
    "../src/assets/card.png",
  ];

  useEffect(() => {
    if (profile === "BASIC") {
      setSelectedIndex(0);
    }
  }, [profile]);

  const handleSelect = (index) => {
    if (profile !== "BASIC") {
      setSelectedIndex(index);
    }
  };

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
        <Box sx={{ width: 8, height: 40, bgcolor: "#3f5efb", mr: 2 }} />
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
            CHOIX DU JEU
          </Typography>
          <Typography sx={{ fontSize: 14, color: "black" }}>
            Sélectionnez parmi 4 jeux interactifs pour engager vos utilisateurs
            et créer une expérience unique.
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
        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mt: 5 }}>
          {images.map((img, index) => (
            <GameCard
              key={index}
              img={img}
              selected={selectedIndex === index}
              onSelect={() => handleSelect(index)}
              disabled={profile === "BASIC" && index !== 0} 
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Game;
