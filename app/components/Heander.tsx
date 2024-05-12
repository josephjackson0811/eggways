"use client";

import { Box, Container } from "@mui/material";
import Link from "next/link";

export default function Header() {
  return (
    <Box className="py-3">
      <Container>
        <Box className="flex justify-between items-center">
          <p>
            <b className="text-xl">EGGWAYS</b>
          </p>
          <Box>
            <Link href="/" className="pr-10">
              Home
            </Link>
            <Link href="/" className="pr-10">
              About
            </Link>
            <Link href="/" className="pr-10">
              Service
            </Link>
          </Box>
          <button className=" border-cyan-400 border-2 px-5 py-2 rounded-full bg-cyan-400">
            Join us
          </button>
        </Box>
      </Container>
    </Box>
  );
}
