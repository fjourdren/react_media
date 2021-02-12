import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { Onglets } from "./Onglets";
import { OngletsMenuItem } from "./OngletsMenuItem";
import { OngletsMenuList } from "./OngletsMenuList";

test("renders Onglets without crashing", () => {
    const div = document.createElement("div");
    render(<Onglets items={[]} itemsName={[]}/>, div);
});

test("Onglets is present", async () => {
    const { container } = render(<Onglets items={[]} itemsName={[]}/>);
    const ongletsElem = await waitForElement(() => container.querySelector('[class="onglets"]'));
    expect(ongletsElem).toBeInTheDocument();
});





test("renders OngletsMenuItem without crashing", () => {
    const div = document.createElement("div");
    render(<OngletsMenuItem title={ "test" } selected={ false } onClick={ () => {} }/>, div);
});

test("OngletsMenuItem is present and selected", async () => {
    const { container } = render(<OngletsMenuItem title={ "test" } selected={ true } onClick={ () => {} }/>);
    const OngletsMenuItemElem = await waitForElement(() => container.querySelector('[class="on onglets-menu-item"]'));
    expect(OngletsMenuItemElem).toBeInTheDocument();
});





test("renders OngletsMenuList without crashing", () => {
    const div = document.createElement("div");
    render(<OngletsMenuList itemsName={[]} onClick={ () => {} }/>, div);
});

test("OngletsMenuList is present", async () => {
    const { container } = render(<OngletsMenuList itemsName={[]} onClick={ () => {} }/>);
    const OngletsMenuListElem = await waitForElement(() => container.querySelector('[class="ongletsMenu"]'));
    expect(OngletsMenuListElem).toBeInTheDocument();
});