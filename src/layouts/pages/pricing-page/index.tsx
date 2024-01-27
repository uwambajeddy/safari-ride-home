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

import { useState } from "react";

// @mui material components
import Container from "@mui/material/Container";

// Material Dashboard 2 PRO React TS examples components
import PageLayout from "examples/LayoutContainers/PageLayout";

// Pricing page components
import Header from "layouts/pages/pricing-page/components/Header";
import Footer from "layouts/pages/pricing-page/components/Footer";
import PricingCards from "layouts/pages/pricing-page/components/PricingCards";
import Faq from "layouts/pages/pricing-page/components/Faq";

function PricingPage(): JSX.Element {
  const [tabValue, setTabValue] = useState<number>(0);
  const [prices, setPrices] = useState<string[]>(["1", "2", "3"]);

  const handleSetTabValue = (event: any, newValue: any) => {
    setTabValue(newValue);

    if (event.currentTarget.id === "drivers") {
      setPrices(["A", "B", "C"]);
    } else {
      setPrices(["1", "2", "3"]);
    }
  };

  return (
    <PageLayout>
      <Header tabValue={tabValue} tabHandler={handleSetTabValue}>
        <Container>
          <PricingCards prices={prices} />
          {/*<TrustedBrands /> */}
          <Faq />
        </Container>
      </Header>
      <Footer />
    </PageLayout>
  );
}

export default PricingPage;
