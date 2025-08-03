import { Box } from "@mui/material";

const GameCard = ({ img, selected, onSelect, disabled }) => {
  return (
    <Box
      onClick={!disabled ? onSelect : undefined}
      sx={{
        flex: 1,
        minWidth: 180,
        maxWidth: 300,
        borderRadius: "6px",
        overflow: "hidden",
        bgcolor: "white",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        transition: "all 0.2s ease",
        border: selected ? "4px solid #3f5efb" : "4px solid transparent",
      }}
    >
      <Box
        component="img"
        src={img}
        alt="game"
        sx={{
          width: "100%",
          height: 250,
          objectFit: "cover",
          display: "block",
        }}
      />
    </Box>
  );
};

export default GameCard;
