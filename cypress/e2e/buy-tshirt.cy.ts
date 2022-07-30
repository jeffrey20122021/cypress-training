import {
  MenuContentPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  ShopingCartPage,
  ProductListPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shopingCartPage: ShopingCartPage;
  let loginPage: LoginPage;
  let addressStep: AddressStepPage;
  let shippingStep: ShippingStepPage;
  let paymentStep: PaymentStepPage;
  const product = "Printed Dress";
  const email = "aperdomobo@gmail.com";
  const password = "WorkshopProtractor";
  const message = "Your order on My Store is complete.";

  before(() => {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage();
    shopingCartPage = new ShopingCartPage();
    loginPage = new LoginPage();
    addressStep = new AddressStepPage();
    shippingStep = new ShippingStepPage();
    paymentStep = new PaymentStepPage();
  });

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addTShirtToCart(product);
    productListPage.proceedToCheckout();
    shopingCartPage.proceedToCheckout();
    loginPage.login(email, password);
    addressStep.goTologinButton();
    shippingStep.acceptTerms();
    shippingStep.proceedCheckout();
    paymentStep.bankwirePay();
    paymentStep.confirmOrder();
    paymentStep.confirmMessage(message);
  });
});
