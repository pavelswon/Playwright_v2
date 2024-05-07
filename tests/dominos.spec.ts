import { test, expect } from '@playwright/test';
import { StartPage} from '../pages/StartPage';
import { PizzaPage } from '../pages/PizzaPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { PaymentPage } from '../pages/PaymentPage';
import { HeaderPage } from '../pages/HaederPage';
import { LoginPage } from '../pages/LoginPage';

test('Go to the site', async ({ page }) => {
    const startPage = new StartPage(page);
    const headerPage = new HeaderPage(page);

    await startPage.goto();
    await startPage.selectCity(startPage.getCity);
    await headerPage.clickPizzaItem();
});

test ('Log In', async ({ page }) => {
  const startPage = new StartPage(page);
  const loginPage = new LoginPage(page);
  const headerPage = new HeaderPage(page);

  await startPage.goto();
  await startPage.closeWindowOfCity();
  await headerPage.clickLoginItem();
  await loginPage.loginField();
  await loginPage.passwordField();
  await loginPage.clickShowPass();
  await loginPage.clickLoginButton();
 });

test('Pizza selection', async ({ page }) => {
  const startPage = new StartPage(page);
  const pizzaPage = new PizzaPage(page);

  await pizzaPage.goto();
  await startPage.closeWindowOfCity();
  await pizzaPage.getPizza();
  await pizzaPage.getSize();
  await pizzaPage.getSide();
  await pizzaPage.addToCartLocator();
  await pizzaPage.clickOrderButton();
  });
  

test('Filling in checkout', async ({ page }) => {  
  const startPage = new StartPage(page);
  const checkoutPage = new CheckoutPage(page);
  
  await checkoutPage.goto();
  await startPage.closeWindowOfCity();
  await checkoutPage.getStreet('Короленка');
  await checkoutPage.getHouseNumber('1');
  await checkoutPage.getEntranceInput('1');
  await checkoutPage.getAppartmensInput('1');
  await checkoutPage.getFloorInput('1');
  await checkoutPage.getIntercomInput('1');
  await checkoutPage.clickChekoutButton();
});

test('Payment', async({ page }) => {
  const startPage = new StartPage(page);
  const paymentPage = new PaymentPage(page);

  await paymentPage.goto()
  await startPage.closeWindowOfCity();
  await paymentPage.getName();
  await paymentPage.getMail();
  await paymentPage.getNumber();
  await paymentPage.selectPaymentType();
  await paymentPage.restItemClick();
  await paymentPage.getComment();
  await paymentPage.clickOrderButton();
});

  test('Full order', async ({ page }) => {
  
    const startPage = new StartPage(page);
    const pizzaPage = new PizzaPage(page);
    const checkoutPage = new CheckoutPage(page);
    const paymentPage = new PaymentPage(page);
    const headerPage = new HeaderPage(page);
  
    await startPage.goto();
    await startPage.selectCity(startPage.getCity);
    await headerPage.clickPizzaItem();
    await pizzaPage.getPizza();
    await pizzaPage.getSize();
    await pizzaPage.getSide();
    await pizzaPage.addToCartLocator();
    await pizzaPage.clickOrderButton();
    await checkoutPage.getStreet('Короленка');
    await checkoutPage.getHouseNumber('1');
    await checkoutPage.getEntranceInput('1');
    await checkoutPage.getAppartmensInput('1');
    await checkoutPage.getFloorInput('1');
    await checkoutPage.getIntercomInput('1');
    await checkoutPage.clickChekoutButton();
    await paymentPage.getName();
    await paymentPage.getMail();
    await paymentPage.getNumber();
    await paymentPage.selectPaymentType();
    await paymentPage.restItemClick();
    await paymentPage.getComment();
    await paymentPage.clickOrderButton();

    const successMessageExists = await page.locator('//*[contains(@class, "iKrsLZ")]').count();
    expect(successMessageExists).toBeTruthy();
  });