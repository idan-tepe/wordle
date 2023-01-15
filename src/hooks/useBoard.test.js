import { expect } from "chai";
import { fillTheDictionary } from "./useBoard";

describe("fiilTheDictionary", () => {
  it("shot have length of more then 0", () => {
    const word = "event";
    const dic = new Map();
    fillTheDictionary(word, dic);
    expect(dic).to.have.lengthOf(4);
    // expect(true).to.equal(true);
  });
});
