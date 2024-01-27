/* eslint-disable no-unused-vars */
/**
=========================================================
* Material Dashboard 2 PRO React TS - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-2-pro-react-ts
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { ReactNode } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 PRO React TS examples components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// Material Dashboard 2 PRO React page layout routes
import pageRoutes from "page.routes";

// Images
import bgImage from "assets/images/bg-pricing-one.jpg";

// Declaring props types for Header
interface Props {
  tabValue: number;
  tabHandler: (...arg: any) => void;
  children: ReactNode;
}

function Header({ tabValue, tabHandler, children }: Props): JSX.Element {
  return (
    <>
      <DefaultNavbar
        routes={pageRoutes}
        action={{
          type: "external",
          route: "/scheduled/ScheduledPage",
          label: "Scheduled", // Calendar
          color: "light",
        }}
        transparent
        light
      />
      <MDBox
        position="relative"
        minHeight="50vh"
        height="50vh"
        borderRadius="xl"
        m={2}
        pt={2}
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { black } }) =>
            `${linearGradient(rgba(black.main, 0.25), rgba(black.main, 0.25))}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
        }}
      >
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ position: "relative", py: 15, textAlign: "center" }}
        >
          <Grid item xs={11} lg={5}>
            <MDBox mb={1}>
              <MDTypography variant="h2" color="white" fontWeight="bold">
                How it works
              </MDTypography>
            </MDBox>
            <MDBox mb={2}>
              <MDTypography variant="body2" color="white" fontWeight="light">
                Get a ride with someone in their car, it is affordable, and convenient
              </MDTypography>
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Grid container sx={{ px: 6, my: 8 }}>
        <Grid item xs={12}>
          <Card sx={{ mt: -16 }}>
            <MDBox minWidth={{ xs: "22rem", md: "25rem" }} mx="auto" mt={6}>
              <AppBar position="static">
                <Tabs value={tabValue} onChange={tabHandler}>
                  <Tab
                    id="drivers"
                    label={
                      <MDBox py={0.5} px={2} color="inherit">
                        Drivers
                      </MDBox>
                    }
                  />
                  <Tab
                    id="passengers"
                    label={
                      <MDBox py={0.5} px={2} color="inherit">
                        Passengers
                      </MDBox>
                    }
                  />
                </Tabs>
              </AppBar>
            </MDBox>
            {children}
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Header;
