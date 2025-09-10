import { Typography, Box } from "@mui/material";
import { CSSProperties } from "react";
import LoadingVideo from "@/components/loadingVideo";

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
      <Typography variant="h6">Please check back soon!</Typography>
      <LoadingVideo />
    </Box>
  );
}
