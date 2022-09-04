import {describe, expect,  test} from '@jest/globals';
import { render, screen } from "@testing-library/react";
import Heading from "./Heading";

describe("<Heading />", () => {
    test("renders the Heading component", () => {
        render(<Heading level={3}>hello world!</Heading>);

        const helloWorld = screen.getByRole("heading", { name: /hello world!/i });

        expect(helloWorld).toBeDefined();
    });
});
