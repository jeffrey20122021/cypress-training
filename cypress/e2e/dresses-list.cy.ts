import {MenuContentPage, DressesListPage} from "../page/index";

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  let names: string[];

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
    names = ["Printed Chiffon Dress", "Printed Summer Dress", "Printed Dress", "Printed Dress", "Printed Summer Dress"];
  });

  it("show the available dresses", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.visitDressMenu();
    dressesListPage.validateItemsNumber(5);
    dressesListPage.validateItemsNames(names);
  });
});
