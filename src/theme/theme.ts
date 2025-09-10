"use client";

import { createTheme } from "@mui/material";
import localFont from "next/font/local";

const baseTheme = createTheme();

const conceptFont = localFont({
  src: "../../public/fonts/Concept.woff2",
});

export default createTheme({
  typography: {
    h2: {
      textAlign: "center",
      fontWeight: 500,
      fontFamily: conceptFont.style.fontFamily,
      [baseTheme.breakpoints.down("sm")]: {
        fontSize: "2.7rem",
      },
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "5rem",
      },
    },
  },
});
