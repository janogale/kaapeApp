import React from "react";
import { Text } from "@chakra-ui/react";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import QrReader from "../components/QrReader";

const Index = () => {
  const [active, setActive] = React.useState(null);
  React.useEffect(function () {
    setActive(true);
  });

  return (
    <Container minH="100vh">
      <Header />
      <Main bg="gray.300">
        <Text>Scan Menu</Text>
        {active && <QrReader />}
      </Main>

      <Footer />
    </Container>
  );
};

export default Index;
