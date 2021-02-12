import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { Map } from "./Map";

test("renders without crashing", () => {
    const div = document.createElement("div");
    render(<Map timeHandler={ () => {} }/>, div);
});

test("map is present", async () => {
    const { container } = render(<Map timeHandler={ () => {} }/>);
    const mapElem = await waitForElement(() => container.querySelector('[class="map leaflet-container leaflet-grab leaflet-touch-drag"]'));
    expect(mapElem).toBeInTheDocument();
});

test("marker is present", async () => {
    const waypoints = [{"lat":"32.42","lng":"-90.13","label":"Ridgeland","timestamp":"45"}]
    const { container } = render(<Map timeHandler={ () => {} } waypoints={ waypoints }/>);
    const markerElem = await waitForElement(() => container.querySelector('[class="leaflet-marker-icon leaflet-zoom-hide leaflet-interactive"]'));
    expect(markerElem).toBeInTheDocument();
});