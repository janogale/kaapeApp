import React from "react";

import dynamic from "next/dynamic";

import { Container } from "./Container";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Header } from "./Header";

const Layout = ({ children, hide = false }) => {
  const [active, setActive] = React.useState(null);
  React.useEffect(function () {
    setActive(true);
  });

  return (
    <Container minH="100vh" id="container">
      {hide || <Header />}
      <Main>{children}</Main>
      {true || <Footer />}
    </Container>
  );
};

export default Layout;
