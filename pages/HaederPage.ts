import { Locator, Page } from '@playwright/test';

export class HeaderPage {
    readonly page: Page;
    readonly logoItem: Locator;
    readonly actionItem: Locator;
    readonly pizzaItem: Locator;
    readonly drinkItem: Locator;
    readonly sidesItem: Locator;
    readonly dessertItem: Locator;
    readonly loginItem: Locator;


    constructor (page: Page) {
        this.page = page;

        this.logoItem = page.locator("//*[contains(@class, 'igVohh')]");
        this.actionItem = page.locator("(//*[contains(@class, 'jDjInB')])[4]");
        this.pizzaItem = page.locator("(//*[contains(@class, 'jDjInB')])[5]")
        this.drinkItem = page.locator("(//*[contains(@class, 'jDjInB')])[6]");
        this.sidesItem = page.locator("(//*[contains(@class, 'jDjInB')])[7]");
        this.dessertItem = page.locator("(//*[contains(@class, 'jDjInB')])[8]");
        this.loginItem = page.locator("//*[contains(@class, 'kYlJCL')]");
    }

    async clickLogoItem() {
        await this.logoItem.click();
    }

    async clickActionItem() {
        await this.actionItem.click();
    }

    async clickPizzaItem() {
        await this.pizzaItem.click();
    }

    async clickDrinkItem() {
        await this.drinkItem.click();
    }

    async clickSidesItem() {
        await this.sidesItem.click();
    }

    async clickDessertItem() {
        await this.dessertItem.click();
    }

    async clickLoginItem() {
        await this.loginItem.click();
    }
}