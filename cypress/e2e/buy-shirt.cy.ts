import {
  MenuContentPage,
  LoginPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  ShopingCartPage,
  ProductListPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const loginPage = new LoginPage();
const addressStep = new AddressStepPage();
const shippingStep = new ShippingStepPage();
const paymentStep = new PaymentStepPage();
const shopingCartPage = new ShopingCartPage();
const productListPage = new ProductListPage();

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shopingCartPage: ShopingCartPage;
  let loginPage: LoginPage;
  let addressStep: AddressStepPage;
  let shippingStep: ShippingStepPage;
  let paymentStep: PaymentStepPage;
  const email = "aperdomobo@gmail.com";
  const password = "WorkshopProtractor";
  const message = "Your order on My Store is complete.";


  menuContentPage = new MenuContentPage();
  productListPage = new ProductListPage();
  shopingCartPage = new ShopingCartPage();
  loginPage = new LoginPage();
  addressStep = new AddressStepPage();
  shippingStep = new ShippingStepPage();
  paymentStep = new PaymentStepPage();

  it("then should be bought a t-shirt", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.addToCart();
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
