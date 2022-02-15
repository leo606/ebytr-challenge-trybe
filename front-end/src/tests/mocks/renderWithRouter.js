import React from "react";
import { BrowserRouter, Routes, Route, memo } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import AppContext from "../../context/AppContext";

const renderWithRouter = (Component, path, contextValue) => {
  const history = createMemoryHistory();

  return {
    ...render(
      <AppContext.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route exact path={path} element={<Component />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    ),
    history,
  };
};
export default renderWithRouter;
