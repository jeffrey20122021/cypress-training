import {MenuContentPage} from "../page/index";
import {LoginPage} from "../page/index";
import {AddressStepPage} from "../page/index";
import {ShippingStepPage} from "../page/index";
import {PaymentStepPage} from "../page/index";
import {ShopingCartPage} from "../page/index";
import {ProductListPage} from "../page/index";

const menuContentPage = new MenuContentPage();
const loginPage = new LoginPage();
const addressStep = new AddressStepPage();
const shippingStep = new ShippingStepPage();
const paymentStep = new PaymentStepPage();
const shopingCartPage = new ShopingCartPage();
const productListPage = new ProductListPage();

describe("Buy a t-shirt", () => {
  const email = "aperdomobo@gmail.com";
  const password = "WorkshopProtractor";
  const message = "Your order on My Store is complete.";

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addcart();
    productListPage.pcheckout();
    shopingCartPage.pcheckout();
    loginPage.login(email, password);
    addressStep.goTologinButton();
    shippingStep.check();
    shippingStep.pcheckout();
    paymentStep.bankwirepay();
    paymentStep.confirmOrderm();
    paymentStep.confirmMessage(message);
  });
});
