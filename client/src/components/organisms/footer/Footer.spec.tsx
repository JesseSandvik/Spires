import {describe, expect,  test} from '@jest/globals';
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("<Footer />", () => {
    test("renders the Footer component", () => {
        render(<Footer />);

        const footer = screen.getByRole("contentinfo");

        expect(footer).toBeDefined();
    });
});
