import React from "react";
import renderWithRouter from "./mocks/renderWithRouter";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "../pages/Login";
import axios from "axios";
import users from "./mocks/userMock.json";
import tasks from "./mocks/tasksMock.json";

describe("login page test", () => {
  it("renders elements", () => {
    const setUser = jest.fn();
    const setTasks = jest.fn();

    renderWithRouter(Login, "/", { setUser, setTasks });

    const userInput = screen.getByPlaceholderText(/username/i);
    expect(userInput).toBeInTheDocument();

    const btnSubmit = screen.getByRole("button");
    expect(btnSubmit).toHaveTextContent("Entrar");
  });

  it("post on click", () => {
    jest.spyOn(axios, "post").mockImplementation(() =>
      Promise.resolve({
        status: 200,
        data: { users, tasks },
      })
    );

    const setUser = jest.fn();
    const setTasks = jest.fn();

    renderWithRouter(Login, "/", { setUser, setTasks });

    const userInput = screen.getByPlaceholderText(/username/i);
    const btnSubmit = screen.getByRole("button");

    userEvent.type(userInput, "abc");
    userEvent.click(btnSubmit);

    expect(axios.post).toHaveBeenCalled();
  });
});
