import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;
    readonly url: string = 'https://dominos.ua/uk/brovary/checkout/';
    readonly streetInput: Locator;
    readonly selectStreet: Locator;
    readonly houseNumberInput: Locator;
    readonly entranceInput: Locator;
    readonly appartmensInput: Locator;
    readonly floorInput: Locator;
    readonly intercomInput: Locator;
    readonly chekoutButton: Locator;

    constructor (page: Page) {
        this.page = page;
        
        this.streetInput = page.locator("(//input[@id='input'])[1]");
        this.selectStreet = page.locator('//button[contains(@class, fVCWCR)]');
        this.houseNumberInput = page.locator("(//input[@id='input'])[2]");
        this.entranceInput = page.locator("(//input[contains(@class, '13dwe9f')])[2]");
        this.appartmensInput = page.locator("(//input[contains(@class, '13dwe9f')])[3]");
        this.floorInput = page.locator("(//input[contains(@class, '13dwe9f')])[4]");
        this.intercomInput = page.locator("(//input[contains(@class, '13dwe9f')])[5]");
        this.chekoutButton = page.locator("//p[contains(@class, 'itJHy')]");
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async getStreet(street: string) {
        await this.streetInput.click();
        await this.streetInput.pressSequentially(street);
        await this.selectStreet.click();
    }

    async getHouseNumber(houseNumber: string) {
        await this.houseNumberInput.click();
        await this.houseNumberInput.pressSequentially(houseNumber);
    }

    async getEntranceInput(entrance: string) {
        await this.entranceInput.click();
        await this.entranceInput.pressSequentially(entrance);
    }

    async getAppartmensInput(appartmens: string) {
        await this.appartmensInput.click();
        await this.appartmensInput.pressSequentially(appartmens);
    }

    async getFloorInput(floor: string) {
        await this.floorInput.click();
        await this.floorInput.pressSequentially(floor);
    }
    
    async getIntercomInput(intercom: string) {
        await this.intercomInput.click();
        await this.intercomInput.pressSequentially(intercom);
    }

    async clickChekoutButton() {
        await this.chekoutButton.click();
    }
}
