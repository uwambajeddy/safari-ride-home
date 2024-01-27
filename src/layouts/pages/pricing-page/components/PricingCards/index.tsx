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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React TS components
import MDBox from "components/MDBox";

// Material Dashboard 2 PRO React TS examples components
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";

// Material Dashboard 2 PRO React context
import { useMaterialUIController } from "context";

function PricingCards({ prices }: { prices: string[] }): JSX.Element {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [starter, premium, enterprise] = prices;
  return (
    <MDBox position="relative" zIndex={10} mt={8} px={{ xs: 1, sm: 0 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            color={darkMode ? "dark" : "white"}
            badge={{ color: darkMode ? "warning" : "light", label: "Red" }}
            price={{ currency: "", value: starter, type: "" }}
            specifications={[
              { label: "Search by origin, destination, & departure" },
              // { label: "20GB Cloud storage", includes: true },
              // { label: "Integration help", includes: false },
              // { label: "Sketch Files", includes: false },
              // { label: "Destination,", includes: true },
              // { label: "Departure", includes: true },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: darkMode ? "warning" : "dark",
              label: "join",
            }}
            shadow={darkMode}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            color={darkMode ? "dark" : "white"}
            badge={{ color: darkMode ? "warning" : "light", label: "Yellow" }}
            price={{ currency: "", value: premium, type: "" }}
            specifications={[
              { label: "Pay online using a Credit, Debit Card, or Momo Pay" },
              // { label: "Pay online using a credit card or", includes: true },
              // { label: "debit", includes: true },
              // { label: "Sketch Files", includes: true },
              // { label: "Debit Card,", includes: true },
              // { label: "Momo Pay", includes: true },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "info",
              label: "try premium",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            color={darkMode ? "dark" : "white"}
            badge={{ color: darkMode ? "warning" : "light", label: "Green" }}
            price={{ currency: "", value: enterprise, type: "" }}
            specifications={[
              { label: "Meet the driver at a Pickup, Enjoy your ride" },
              // { label: "100GB Cloud storage", includes: true },
              // { label: "Integration help", includes: true },
              // { label: "Sketch Files", includes: true },
              // { label: "Enjoy your ride", includes: true },
              // { label: "Complete documentation", includes: true },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: darkMode ? "warning" : "dark",
              label: "join",
            }}
            shadow={darkMode}
          />
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default PricingCards;
