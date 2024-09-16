import { Card, CardContent, CardDescription, CardHeader } from "../../lib/Card";
import { FC } from "react";
//@ts-ignore
import Stwory from "/img/stwory-logo.png";
//@ts-ignore
import Bookera from "/img/bookera.png";
import { Github } from "lucide-react";

interface AppProps {
  app: App;
  size?: "small" | "large";
}

const AppCompnent: FC<AppProps> = ({ app, size = "large" }) => {
  const imgSize =
    size === "small" ? "w-[30px] h-[30px]" : "w-[100px] h-[100px]";

  return (
    <a
      className="block hover:text-secondary hover:no-underline"
      target="_blank"
      href={app.url}
    >
      <figure className="group relative">
        {app.isImage ? (
          <img
            className={"[border-radius:20%] " + imgSize}
            src={app.imgJSX}
            alt={app.name}
          />
        ) : (
          <>{app.imgJSX}</>
        )}
        <figcaption className=" transition-colors text-center small">
          {size === "large" ?? app.name}
        </figcaption>
        <Card className="absolute group-hover:visible invisible transition-all bg-background p-4 w-[200px] small z-10">
          {app.description}
        </Card>
      </figure>
    </a>
  );
};

interface Collection {
  apps: App[];
  name: string;
}

interface App {
  imgJSX: JSX.Element;
  isImage: boolean;
  name: string;
  description: string;
  url: string;
}

const Gallery: FC = () => {
  const apps: App[] = [
    {
      name: "Stwory",
      imgJSX: Stwory,
      isImage: true,
      description:
        "Stwory is a game where users create a story from two random daily words. The story with the most likes at the end of the day wins.",
      url: "https://stwory.io",
    },
    {
      name: "Bookera",
      imgJSX: Bookera,
      isImage: true,
      description:
        "Bookera is the next generational library. Read the blog or open the website to learn more.",
      url: "https://bookera.pub",
    },
  ];

  const devTools: App[] = [
    {
      name: "Goat Stack",
      imgJSX: <Github width={84} height={84} />,
      isImage: false,
      url: "https://github.com/serranoio/goat-stack",
      description:
        "This is a template for building very simple viral market apps.",
    },
  ];

  return (
    <section id="gallery" className="py-[12rem] bg-transparent">
      <h1 className="h2 text-center text-secondary mb-2">Gallery</h1>
      <p className="text-center text-secondary-foreground small italic">
        Our most finest selection of handcrafted goods: apps, and dev tooling.
      </p>

      <div className="grid lg:grid-cols-2 max-w-[1200px] mx-auto mt-8 gap-4">
        <Card>
          <CardHeader className="h3 text-center">Apps</CardHeader>
          <CardContent className="flex gap-2 justify-center">
            {apps.map((app) => {
              return <AppCompnent key={app.name} app={app} />;
            })}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="h3 text-center">Dev Tools</CardHeader>
          <CardContent className="flex gap-2 justify-center">
            {devTools.map((app) => {
              return <AppCompnent key={app.name} app={app} />;
            })}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Gallery;
