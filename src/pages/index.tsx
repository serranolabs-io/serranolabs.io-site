import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Head from "@docusaurus/Head";
// @ts-ignore
import Logo from "/img/logo.png";
import Gallery from "../components/Gallery";
// src/index.js
import React from "react";

import { PostHogProvider } from "posthog-js/react";

// const options = {
//   api_host: "https://us.i.posthog.com",
// };

// "phc_Qy48W4iZYOFqje9LAYmOuFVjlXrTblA5YCfWmMwAaoe",
function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="">
        <div className="flex justify-center mb-4">
          <img src={Logo} width={200} height={200} />
        </div>
        <h1 className="text-center h1 text-7xl lg:text-6xl mb-[1rem] text-black">
          Serrano Labs
        </h1>
        <p className="text-center large text-muted-foreground Manrope">
          {siteConfig.tagline}
        </p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Serrano Labs, everything here is made with love."
    >
      {/* <PostHogProvider
        apiKey={"phc_Qy48W4iZYOFqje9LAYmOuFVjlXrTblA5YCfWmMwAaoe"}
        options={options}
      > */}
      <Hero />
      <main className=""></main>
      <Gallery />
      {/* </PostHogProvider> */}
    </Layout>
  );
}
