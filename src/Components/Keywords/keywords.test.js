import React from "react";
import { render, waitForElement } from "@testing-library/react";
import { Keywords } from "./Keywords";
import { Keyword } from "./Keyword";

test("renders keywords without crashing", () => {
    const data = [{"pos":"0","data":[{"title":"Route 66","url":"https://en.wikipedia.org/wiki/U.S._Route_66"},{"title":"Stefan Kluge","url":"http://www.imdb.com/name/nm1667631/"},{"title":"Mathias Einmann","url":"http://www.imdb.com/name/nm1667578/"}]}]
    const div = document.createElement("div");
    render(<Keywords keywords={ data } timeHandler={ () => {} }/>, div);
});

test("keywords are present", async () => {
    const data = [{"pos":"0","data":[{"title":"Route 66","url":"https://en.wikipedia.org/wiki/U.S._Route_66"},{"title":"Stefan Kluge","url":"http://www.imdb.com/name/nm1667631/"},{"title":"Mathias Einmann","url":"http://www.imdb.com/name/nm1667578/"}]}]
    const { container } = render(<Keywords keywords={ data } timeHandler={ () => {} }/>);
    const keywordsElem = await waitForElement(() => container.querySelector('[class="keywords"]'));
    expect(keywordsElem).toBeInTheDocument();
});





test("renders keyword without crashing", () => {
    const data = {"pos":"0","data":[{"title":"Route 66","url":"https://en.wikipedia.org/wiki/U.S._Route_66"},{"title":"Stefan Kluge","url":"http://www.imdb.com/name/nm1667631/"},{"title":"Mathias Einmann","url":"http://www.imdb.com/name/nm1667578/"}]}
    const div = document.createElement("div");
    render(<Keyword item={ data } timeHandler={ () => {} }/>, div);
});

test("keyword is present", async () => {
    const data = {"pos":"0","data":[{"title":"Route 66","url":"https://en.wikipedia.org/wiki/U.S._Route_66"},{"title":"Stefan Kluge","url":"http://www.imdb.com/name/nm1667631/"},{"title":"Mathias Einmann","url":"http://www.imdb.com/name/nm1667578/"}]}
    const { container } = render(<Keyword item={ data } timeHandler={ () => {} }/>);
    const keywordElem = await waitForElement(() => container.querySelector('[class="keyword"]'));
    expect(keywordElem).toBeInTheDocument();
});