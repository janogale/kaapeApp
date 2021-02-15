import React from "react";

import dynamic from "next/dynamic";

import { Text } from "@chakra-ui/react";
import Layout from "../../components/Layout";

const QrReaderNoSSR = dynamic(() => import("../../components/QrReader"), {
  ssr: false,
});

const Index = () => {
  const [active, setActive] = React.useState(null);
  React.useEffect(function () {
    setActive(true);
  });

  return (
    <Layout>
      <Text>Scan Menu</Text>
      {typeof window != "undefined" && <QrReaderNoSSR />}
    </Layout>
  );
};

export default Index;
