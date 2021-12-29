import React from "react";
import { Footer, Header } from "../sections";

const DefaultLayout = (props) => {
  const {children} = props

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
