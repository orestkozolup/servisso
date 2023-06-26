"use client";

import { Box, Grid, ButtonGroup } from "@mui/material";
import { styled } from "@mui/system";
import { ButtonLink } from "@/components";
import { CALENDAR_NAVIGATION, ORIENTATIONS } from "@/const";

const StyledDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const StyledHeader = styled("h2")();
const StyledSubtext = styled("p")();

const AppLayout = ({ children }) => (
  <Box sx={{ height: "100%" }}>
    <Grid sx={{ height: "100%" }} container>
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          bgcolor: (theme) => theme.palette.primary.main,
          borderRadius: "0 1.5rem 1.5rem 0",
        }}
      >
        <StyledDiv>
          <StyledHeader
            sx={{
              fontSize: "2rem",
              color: (theme) => theme.palette.primary.contrastText,
            }}
          >
            Servisso
          </StyledHeader>
          <StyledSubtext
            sx={{
              fontSize: "1rem",
              color: (theme) => theme.palette.primary.contrastText,
            }}
          >
            Admin panel
          </StyledSubtext>
          <ButtonGroup orientation={ORIENTATIONS.VERTICAL}>
            {CALENDAR_NAVIGATION.map(({ href, label }) => (
              <ButtonLink href={href} label={label} key={href} />
            ))}
          </ButtonGroup>
        </StyledDiv>
      </Grid>
      <Grid item xs={12} md={10}>
        {children}
      </Grid>
    </Grid>
  </Box>
);

export default AppLayout;
