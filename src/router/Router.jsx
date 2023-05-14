import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../components/atomicDesign/templates/DefaultLayout";
import { Top } from "../components/atomicDesign/pages/Top";
import { Users } from "../components/atomicDesign/pages/Users";
import { HeaderOnly } from "../components/atomicDesign/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <DefaultLayout>
              <Top />
            </DefaultLayout>
          }
        />
        <Route
          path="/users"
          element={
            <HeaderOnly>
              <Users />
            </HeaderOnly>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
