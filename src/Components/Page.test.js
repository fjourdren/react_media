import React from "react";
import { render } from "@testing-library/react";
import { Page } from "./Page";

test("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Page/>, div);
});