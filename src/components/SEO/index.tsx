import Head from "next/head";
import { useEffect, useState } from "react";

interface ISEO {
  title: string;
}

export const SEO = ({ title }: ISEO) => {
  const [protocol, setProtocol] = useState<string>("");
  const [hostname, setHostname] = useState<string>("");
  const [port, setPort] = useState<string>("");

  useEffect(() => {
    setProtocol(window.location.protocol);
    setHostname(window.location.hostname);
    setPort(window.location.port);
  }, []);

  const finalPort = port && `: ${port}`;
  const metaDescription =
    "A web application to gather insights into the current Formula 1 season";

  return (
    <Head>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${protocol}${hostname}${finalPort}`} />
      <meta property="og:image" content={"/ogImage.png"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#e10600"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#060609" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#060609" />
    </Head>
  );
};
