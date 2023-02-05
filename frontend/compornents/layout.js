// どのコンポーネントでも共通の部分を作成する ヘッダーなど
// _app.jsの記述があるのにこうしないといけない？

import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { Nav, NavItem } from "reactstrap";

// コンポーネントとして登録する
const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>フードデリバリーサービス</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        />
      </Head>
      <header>
        <Nav className="navber navber-dark bg-dark">
          <NavItem>
            <Link href="/">
              <a className="navbar-brand">ホーム</a>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container> {props.children}</Container>
    </div>
  );
};

export default layout;

// <Nav className="navber navber-dark bg-dark"></Nav>
// CSSフレームワーク側で用意されているタグを書けば実装出来る

// const Layout = (props) => {}
// <Container> {props.children}</Container>が示す意味は...
