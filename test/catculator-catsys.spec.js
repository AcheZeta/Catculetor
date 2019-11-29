/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";

import "../catculator-catsys.js";

describe("Suite cases", () => {
  it("Case default", async () => {
    const _element = await fixture("<catculator-catsys></catculator-catsys>");
    assert.strictEqual(_element.hello, 'Hello World!');
  });
});
