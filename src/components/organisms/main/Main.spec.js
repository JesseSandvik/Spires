import { render, screen } from "@testing-library/react";
import Main from "./Main";

describe("<Main />", () => {
  test("01. Renders the Main component", () => {
    render(<Main />);

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
  test("02. Main component renders the prop children", () => {
    render(<Main>test main body</Main>);

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
    expect(main.textContent).toEqual("test main body");
    expect(main.textContent).not.toEqual("this shouldn't exist");
  });
  test("03. Main component inherits className passed as a prop", () => {
    render(<Main className="test-className" />);

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
    expect(main).toHaveClass("test-className");
    expect(main).not.toHaveClass("bad-test-className");
  });
  test("04. Main component inherits id passed as a prop", () => {
    render(<Main id="test-id" />);

    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute("id", "test-id");
    expect(main).not.toHaveAttribute("id", "bad-test-id");
  });
});
