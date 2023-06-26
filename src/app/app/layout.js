"use client";

import { Box, Grid, ButtonGroup } from "@mui/material";
import { ButtonLink } from "@/components";
import { CALENDAR_NAVIGATION, ORIENTATIONS } from "@/const";

const AppLayout = ({ children }) => (
  <Box>
    <Grid container>
      <Grid item xs={12} md={2}>
        <h2>Servisso</h2>
        <p>Admin panel</p>
        <ButtonGroup orientation={ORIENTATIONS.VERTICAL}>
          {CALENDAR_NAVIGATION.map(({ href, label }) => (
            <ButtonLink href={href} label={label} />
          ))}
        </ButtonGroup>
      </Grid>
      <Grid item xs={12} md={10}>
        {children}
      </Grid>
    </Grid>
  </Box>
);

export default AppLayout;
