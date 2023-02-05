// 全てのコンポーネントの根幹となる

import React from "react";
import App from "next/app";
import Head from "next/head";

export default class MyApp extends App {
  // オーバーライド
  render() {
    // AppのpropsにComponent, pagePropsがあると認識すればOK
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          />
        </Head>
        {/* プロパティが{}内 */}
        <Component {...pageProps}> </Component>
      </>
    );
  }
}
