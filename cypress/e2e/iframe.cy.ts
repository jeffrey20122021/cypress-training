import {IframePage} from "../page/index";

describe("Interacting with iFrame", () => {
  let iFramePage: IframePage;

  before(() => {
    iFramePage = new IframePage();
    iFramePage.visit();
  });

  it("Get title", () => {
    iFramePage.getFrameTitle().should("have.text", "HTML Tutorial");
  });

  it("Check Css Title", () => {
    iFramePage.goToCssPageInFrame();
    iFramePage.getFrameTitle().should("have.text", "CSS Tutorial");
  });
});
