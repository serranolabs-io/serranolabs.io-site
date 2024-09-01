import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Head from "@docusaurus/Head";
// @ts-ignore
import Logo from "/img/logo.png";
import Gallery from "../components/Gallery";

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="mt-20">
      <h1 className="text-center h1 text-7xl  lg:text-9xl mb-[6rem] text-black italic">
        Serrano Labs
      </h1>
      <div className="flex justify-center mb-4">
        <img src={Logo} width={200} height={200} />
      </div>
      <p className="text-center large text-muted-foreground Manrope">
        {siteConfig.tagline}
      </p>
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
      <main className=""></main>
      <Gallery />
    </Layout>
  );
}
