import {MenuContentPage, DressesListPage} from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  let names: string[];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    names = ["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"];
  });

  it("show the available dresses", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.visitDressMenu();
    dressesListPage.validateItemsNumber(5);
    dressesListPage.validateItemsNames(names);
  });
});
