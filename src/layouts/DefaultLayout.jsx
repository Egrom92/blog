import React, {useEffect, useState} from "react";
import { Footer, Header } from "../sections";
import { Search } from "../components";
import {useSelector} from "react-redux";
import {useBodyFixToggle} from "../hooks";


const DefaultLayout = (props) => {
  const {children} = props

  const { toggleSearchModal } = useSelector((store) => store.search);

  useBodyFixToggle(toggleSearchModal)

  return (
    <>
      <Header/>
      {children}
      <Footer />
      {toggleSearchModal && <Search />}
    </>
  );
};

export default DefaultLayout;
