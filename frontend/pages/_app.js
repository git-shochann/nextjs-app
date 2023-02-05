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
        <head></head>
        {/* プロパティが{}内 */}
        <Component {...pageProps}> </Component>
      </>
    );
  }
}
