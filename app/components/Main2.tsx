import { ArrowRight } from "@mui/icons-material";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";

const Main2 = () => {
  return (
    <Box className="py-20 pb-32">
      <Container>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <p className="pb-10">
                <b className="text-5xl">About Us.</b>
              </p>
              <p className="pb-5">
                Welcome to Eggways, the premier destination for connecting
                talented freelancers with exciting job opportunities. Founded in
                2023, we are dedicated to revolutionizing the way businesses and
                freelancers collaborate, makeing it easier than ever to find the
                perfect match for your project needs.
              </p>
              <button className=" border-cyan-400 border-2 px-5 py-2 rounded-full bg-cyan-400">
                Learn More <ArrowRight />
              </button>
            </Grid>
            <Grid item xs={5}>
              <Image width={500} height={500} src="/2.jpg" alt="Image" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Main2;
