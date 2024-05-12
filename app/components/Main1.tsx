import { Box, Container } from "@mui/material";
import React from "react";

const Main1 = () => {
  return (
    <Box
      className=" flex items-center"
      sx={{
        height: "95vh",
        backgroundImage: "url('./1.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Box className="text-center">
          <p className=" text-6xl mb-5">
            <b>Largest freelance community on earth</b>
          </p>
          <p className="mb-10 text-xl">
            Hire talient, land jobs, connect with people in diverse freelance
            fields, and much more!
          </p>
          <Box>
            <button className=" border-cyan-400 border-2 px-5 py-2 rounded-full bg-cyan-400 mr-5">
              Join us on Discord
            </button>
            <button className=" border-cyan-400 border-2 px-5 py-2 rounded-full">
              Sign up
            </button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Main1;
