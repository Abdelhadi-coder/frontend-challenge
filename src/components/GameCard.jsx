import { Box } from "@mui/material";

const GameCard = ({ img }) => {
  return (
    <Box
      sx={{
        width: 220,
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "white",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        cursor: "pointer",
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-5px)" },
      }}
    >
      <Box
        component="img"
        src={img}
        alt="game"
        sx={{
          width: "100%",
          display: "block",
        }}
      />
    </Box>
  );
};

export default GameCard;
