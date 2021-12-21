import React from "react";
import styled from "styled-components";
import MainMenu from "./MainMenu";
import MainPage from "./Pages/MainPage";
import WriteQuote from "./Pages/Write_quote";
import FindQuote from "./Pages/Find_quote";
import CalcPrice from "./Pages/Calc_price";
import Settings from "./Pages/Settings";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Body() {
  const Body = styled.div`
    display: flex;
  `;
  return (
    <BrowserRouter>
      <Body>
        <MainMenu />
        <Switch>
          <Route path exact="/">
            <MainPage />
          </Route>
          <Route path="/write_quote">
            <WriteQuote />
          </Route>
          <Route path="/find_quote">
            <FindQuote />
          </Route>
          <Route path="/calc_price">
            <CalcPrice />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </Body>
    </BrowserRouter>
  );
}
