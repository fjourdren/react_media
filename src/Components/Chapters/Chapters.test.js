import React from "react";
import { render, waitForElement, screen } from "@testing-library/react";
import { ChaptersList } from "./ChaptersList";
import { ChapterItem } from "./ChapterItem";

test("renders ChaptersList without crashing", () => {
    const div = document.createElement("div");
    render(<ChaptersList timeHandler={ () => {} }/>, div);
});

test("contains no chapters", async () => {
    const { container } = render(<ChaptersList timeHandler={ () => {} }/>);
    const noChapters = await waitForElement(() => container.querySelector('H3'));
    expect(noChapters).toBeInTheDocument();
});

test('Check no chapter text', () => {
    render(<ChaptersList timeHandler={ () => {} }/>);
    const noChaptText = screen.getByText(/Aucun chapitre/i);
    expect(noChaptText).toBeInTheDocument();
});  

test("noChapt is an h3", () => {
    const { container } = render(<ChaptersList timeHandler={ () => {} }/>);
    const menu = container.querySelector('[class="noChapt"]');
    expect(menu.nodeName).toBe("H3");
});





test("renders ChapterItem without crashing", () => {
    const div = document.createElement("div");

    let chapter = {
        title: "test"
    }

    render(<ChapterItem chapter={ chapter } timeHandler={ () => {} }/>, div);
});

test("ChapterItem li is present", () => {
    let chapter = {
        title: "test"
    }

    const { container } = render(<ChapterItem chapter={ chapter } timeHandler={ () => {} }/>);
    const menu = container.querySelector('[class="chapterName"]');
    expect(menu.nodeName).toBe("LI");
});
