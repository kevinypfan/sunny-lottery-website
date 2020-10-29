import React from "react";
import DefaultLayout from "../components/layouts/Default";
import Carousel from "../components/Home/Carousel";
import StoreInfo from "../components/StoreInfo";
import { Container } from "@material-ui/core";

export default function Index() {
  return (
    <DefaultLayout>
      {/* <Carousel /> */}
      <Container>
        <StoreInfo />
      </Container>
    </DefaultLayout>
  );
}
