const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/login.page.js');

test('POM - Valid login and add to cart', async ({ page }) => {
  const loginPage = new LoginPage(page); // call the house
  
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  
  await expect(loginPage.title).toHaveText('Products');
  await loginPage.backpack.click();
  await expect(loginPage.cartBadge).toHaveText('1');
  
  console.log('POM TEST PASSED - Valid user');
});

test('POM - Locked user error', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.goto();
  await loginPage.login('locked_out_user', 'secret_sauce');
  
  await expect(loginPage.errorMsg).toContainText('locked out');
  
  console.log('POM TEST PASSED - Locked user');
});