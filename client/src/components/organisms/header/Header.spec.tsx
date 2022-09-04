import {describe, expect,  test} from '@jest/globals';
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("<Header />", () => {
    test("renders the Header component", () => {
        render(<Header />);

        const header = screen.getByRole("banner");

        expect(header).toBeDefined();
    });
});
