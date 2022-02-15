import React from "react";
import { render, screen } from "@testing-library/react";
import AppContext from "../context/AppContext";
import Tasks from "../pages/Tasks";

import tasks from "./mocks/tasksMock.json";
import user from "./mocks/userMock.json";

test("renders task", async () => {
  render(
    <AppContext.Provider value={{ user, tasks }}>
      <Tasks />
    </AppContext.Provider>
  );

  const task1 = await screen.findByText(tasks[0].task);

  expect(task1).toBeInTheDocument();
});
