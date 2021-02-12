import React from "react";
import { render } from "@testing-library/react";
import { Title } from "./Title";

test("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Title title="Title" synopsis_url="google.fr"/>, div);
});

test("Title is present", () => {
    const { container } = render(<Title title="Title" synopsis_url="google.fr"/>);
    const menu = container.querySelector('[class="title"]');
    expect(menu.nodeName).toBe("H1");
});

test("Synopsis is present", () => {
    const { container } = render(<Title title="Title" synopsis_url="google.fr"/>);
    const menu = container.querySelector('[class="synopsis"]');
    expect(menu.nodeName).toBe("A");
});