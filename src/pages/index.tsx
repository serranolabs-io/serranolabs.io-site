import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Head from "@docusaurus/Head";
// @ts-ignore
import Logo from "/img/logo.png";

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="mt-20">
      <h1 className="text-center h1 mb-4 text-background italic">
        Serrano Labs
      </h1>
      <p className="text-center large text-muted-foreground Manrope mb-12">
        {siteConfig.tagline}
      </p>
      <div className="flex justify-center">
        <img src={Logo} />
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
      <Hero />
      <main className="bg-primary"></main>
    </Layout>
  );
}
