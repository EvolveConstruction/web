"use client";

import { Typography } from "@mui/material";
import localFont from "next/font/local";
import { Message } from "@/types/message";

interface Props {
  messages: Message[];
}

const conceptFont = localFont({
  src: "../../public/fonts/ConceptSolid.woff2",
});

export default function RandomMessage({ messages }: Props) {
  // generate random number to show text
  const msgCount = messages.length;
  const msgNumber = Math.floor(msgCount * Math.random());
  const msg = messages[msgNumber];

  return (
    <>
      <Typography variant="h2" className={conceptFont.className}>
        {msg.big}
      </Typography>
      <Typography variant="h6"> {msg.small} </Typography>
    </>
  );
}
