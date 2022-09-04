import {describe, expect,  test} from '@jest/globals';
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
    test("renders the Button component", () => {
        render(<Button onClick={() => console.log("click")}>test button</Button>);

        const testButton = screen.getByRole("button", { name: /test button/i });

        expect(testButton).toBeDefined();
    });
});