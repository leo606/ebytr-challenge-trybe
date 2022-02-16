import React from "react";
import { render, screen } from "@testing-library/react";
import AppContext from "../context/AppContext";
import Tasks from "../pages/Tasks";
import renderWithRouter from "./mocks/renderWithRouter";

import tasks from "./mocks/tasksMock.json";
import user from "./mocks/userMock.json";

describe("renders task", () => {
  it("render all tasks", () => {
    renderWithRouter(Tasks, "/tasks", { user, tasks });

    tasks.forEach((task) => {
      const taskInPage = screen.getByText(task.task);
      // console.log(taskInPage);
      expect(taskInPage).toBeInTheDocument();
    });
  });
});
