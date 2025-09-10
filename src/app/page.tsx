import { Typography, Box } from '@mui/material';
import { CSSProperties } from 'react';
import LoadingVideo from '@/components/loadingVideo';

import localFont from 'next/font/local';

const containerBoxStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

type Message = {
  big: string;
  small: string;
};

const msgs: Message[] = [
  {
    big: "Hard hats on!",
    small: "Our site is under construction.",
  },
  {
    big: "We're building something great!",
    small: "Check back soon!",
  },
  {
    big: "Pardon our dust.",
    small: "Our digital foundation is being laid!",
  },
  {
    big: "Our crew is on the job",
    small: "New website coming soon!",
  },
  {
    big: "The blueprint is ready",
    small: "Now we are putting it into action!",
  },
];

 const conceptFont = localFont({
    src: '../../public/fonts/Concept.woff2',
  });

export default function Home() {
  const msgsCount = msgs.length;
  const msgNumber = Math.floor(msgsCount * Math.random());
  const msg = msgs[msgNumber];

 

  return (
    <Box sx={containerBoxStyle}>
      <Typography variant="h2" className={conceptFont.className}>
        {msg.big}
      </Typography>
      <Typography variant="h6">{msg.small}</Typography>
      <LoadingVideo />
    </Box>
  );
}
