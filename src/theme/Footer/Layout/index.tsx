import React from "react";
import clsx from "clsx";
import type { Props } from "@theme/Footer/Layout";

export default function FooterLayout({
  style,
  links,
  logo,
  copyright,
}: Props): JSX.Element {
  return (
    <footer className={clsx("footer", "bg-background/20", "")}>
      <p className="text-center small max-w-[800px] mx-auto mb-8 muted italic">
        Everything that we make is poetry, full of love, and elegant in its
        simplicity. This is shown by interweaving beauty and practicality into
        all of our products. We will never lose sight of this vision, not for
        anything in this world, because otherwise we would lose ourselves.
      </p>
      <div className="container container-fluid mx-auto">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
