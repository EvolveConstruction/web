"use client";

import { Typography } from "@mui/material";
import { Message } from "@/types/message";

interface Props {
  messages: Message[];
}

export default function RandomMessage({ messages }: Props) {
  // generate random number to show text
  const msgCount = messages.length;
  const msgNumber = Math.floor(msgCount * Math.random());
  const msg = messages[msgNumber];

  return (
    <>
      <Typography variant="h2"> {msg.big} </Typography>
      <Typography variant="h6"> {msg.small} </Typography>
    </>
  );
}
