import { Typography, Box } from "@mui/material";
import { CSSProperties } from "react";

const containerBoxStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}

export default function Home() {
  return (
    <Box sx={containerBoxStyle}>
      <Typography variant="h2">Website under construction...</Typography>
      <Typography variant="h5">Check back soon!</Typography>
    </Box>
  );
}
