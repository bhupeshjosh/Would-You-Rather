import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LoginComponent } from "./Login";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { users } from "../../util/_DATA";

let store;
export function createTestStore() {
  const store = createStore(combineReducers({}));
  return store;
}

beforeEach(() => {
  store = createTestStore();
});

describe("Login functionality", () => {
  test("Login", () => {
    console.log("user values :  " + users);
    render(
      <Provider store={store}>
        <LoginComponent users={users} />
      </Provider>
    );
    expect(
      screen.getByText("Welcome to would you rather App!")
    ).toBeInTheDocument();
  });

  test("select user correctly", () => {
    render(
      <Provider store={store}>
        <LoginComponent users={users} />
      </Provider>
    );
    //screen.debug();
    //   fireEvent.selectOptions(getByTestId("select"), "Sarah Edo");
    //   expect(getByTestId("Sarah Edo").selected).toBeTruthy();
    expect(
      screen.getByRole("option", { name: "Tyler McGinnis" }).selected
    ).toBe(true);
  });
});
