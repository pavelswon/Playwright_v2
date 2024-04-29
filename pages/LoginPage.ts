import { Locator, Page } from '@playwright/test'

export class LoginPage {
    readonly page: Page;

    readonly getLoginField: Locator;
    readonly getPasswordField: Locator;
    readonly getShowPass: Locator;
    readonly loginButton: Locator;

    constructor (page: Page ) {
        this.page = page;

        this.getLoginField = page.locator("(//*[contains(@class, 'inhdDl')])[1]");
        this.getPasswordField = page.locator("//*[@type='password']");
        this.getShowPass = page.locator("//*[contains(@class, 'gMIkhd')]");
        this.loginButton = page.locator("//*[contains(@class, 'hBhYzZ')]");
    }

    async loginField() {
        await this.getLoginField.click();
        await this.getLoginField.pressSequentially("Test@test.ua");
    }

    async passwordField() {
        await this.getPasswordField.click();
        await this.getPasswordField.pressSequentially("Test123")
    }

    async clickShowPass() {
        await this.getShowPass.click();
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}