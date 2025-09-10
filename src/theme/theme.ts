'use client';

import { createTheme } from '@mui/material';
import localFont from 'next/font/local';

let baseTheme = createTheme();
const conceptFont = localFont({
  src: '../../public/fonts/Concept.woff2'
})

export default createTheme({
    typography: {
        h2: {
            textAlign: 'center',
            fontWeight: 500,
            [baseTheme.breakpoints.down('sm')]: {
                fontSize: '2.7rem'
            }
        }
    }
});
