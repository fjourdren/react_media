import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { WebsitePlayer } from "./Player";

test("renders without crashing", () => {
    const div = document.createElement("div");
    render(<WebsitePlayer file_url="test"/>, div);
});

test("video-react is present", async () => {
    const { container } = render(<WebsitePlayer file_url="test"/>);
    const playerElem = await waitForElement(() => container.querySelector('[class="video-react-controls-enabled video-react-paused video-react-fluid video-react-user-active video-react-workinghover video-react"]'));
    expect(playerElem).toBeInTheDocument();
});