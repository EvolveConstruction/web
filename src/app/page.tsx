import { Box } from "@mui/material";
import { CSSProperties } from "react";
import LoadingVideo from "@/components/loadingVideo";
import RandomMessage from "@/components/randomMessage";
import { Message } from "@/types/message";

const containerBoxStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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

export default function Home() {
  return (
    <Box sx={containerBoxStyle}>
      <RandomMessage messages={msgs} />
      <LoadingVideo />
    </Box>
  );
}
