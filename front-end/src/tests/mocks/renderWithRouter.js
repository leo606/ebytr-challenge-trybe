import React from "react";
import { BrowserRouter, Routes, Route, memo } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import AppContext from "../../context/AppContext";

const renderWithRouter = (Component, path, contextValue) => {
  const history = createMemoryHistory({ initialEntries: [path] });

  return {
    ...render(
      <AppContext.Provider value={contextValue}>
        <BrowserRouter history={history}>
          <Component />
        </BrowserRouter>
      </AppContext.Provider>
    ),
    history,
  };
};
export default renderWithRouter;
