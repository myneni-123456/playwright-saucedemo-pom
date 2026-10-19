class LoginPage {
  constructor(page) {
    this.page = page;
    // All addresses in one place
    this.username = page.locator('[data-test="username"]');
    this.password = page.locator('[data-test="password"]');
    this.loginBtn = page.getByRole('button', {name: 'Login'});
    this.title = page.locator('.title');
    this.errorMsg = page.locator('[data-test="error"]');
    this.backpack = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}
module.exports = { LoginPage };