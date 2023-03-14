import Head from "next/head";
import PropTypes from "prop-types";

export default function PageSEO({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="jundevharsh, front-end, developer, portfolio, next.js, website"
      />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
    </Head>
  );
}

PageSEO.propTypes = {
  title: PropTypes.string.isRequired,
};
