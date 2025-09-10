"use client";

import { createTheme } from "@mui/material";

const baseTheme = createTheme();

export default createTheme({
  typography: {
    h2: {
      textAlign: "center",
      fontWeight: 500,
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "2.7rem",
      },
    },
  },
});
