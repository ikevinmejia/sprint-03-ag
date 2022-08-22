import { render } from "@testing-library/react";
import { Login } from "../../components/Login";

describe("Pruebas en <Login/>", () => {
  test("match con el snapshot", () => {
    const { container } = render(<Login />);
    expect(container).toMatchSnapshot();
  });
});
