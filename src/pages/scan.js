import React from "react";

import dynamic from "next/dynamic";

import { Heading, Text } from "@chakra-ui/react";
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
    <Layout hide={true}>
      <QrReaderNoSSR />
    </Layout>
  );
};

export default Index;
