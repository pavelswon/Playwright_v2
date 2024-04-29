import { Locator, Page } from '@playwright/test';
import { writeHeapSnapshot } from 'v8';

export class PaymentPage {

    readonly page: Page;
    readonly url: string = 'https://dominos.ua/uk/brovary/payment/';

    readonly nameImput: Locator;
    readonly mailImput: Locator;
    readonly phoneInput: Locator;
    readonly paymentTypeInput: Locator;
    readonly restItem: Locator;
    readonly dateInput: Locator;
    readonly selectDate: Locator;
    readonly timeInput: Locator;
    readonly selectTime: Locator;
    readonly commentInput: Locator;
    readonly orderButton: Locator;

    constructor (page: Page) {
        this.page = page;
        
        this.nameImput = page.locator("(//*[contains(@class, 'inhdDl')])[1]");
        this.mailImput = page.locator("(//*[contains(@class, 'inhdDl')])[2]");
        this.phoneInput = page.locator("(//*[contains(@class, 'inhdDl')])[3]");
        this.paymentTypeInput = page.locator("(//*[contains(@class, 'KWWwf')])[1]");
        this.restItem = page.locator("(//*[contains(@class, 'hGolEo')])[1]");
        this.dateInput = page.locator("(//*[contains(@class, 'css-ackcql')])[1]");
        this.selectDate = page.locator("//*[@id= 'react-select-6-option-0']");
        this.timeInput = page.locator("/(//*[contains(@class, 'css-ackcql')])[2]");
        this.selectTime = page.locator("//*[@id= 'react-select-4-option-0']");
        this.commentInput = page.locator("//*[contains(@class, 'dowIjb')]")
        this.orderButton = page.locator("//*[contains(@class, 'lmkglM')]");
    }

    async goto() {
        await this.page.goto(this.url);
        await this.page.waitForTimeout(1000);
    }

    async getName() {
        await this.nameImput.click();
        await this.nameImput.pressSequentially('Test')
    }

    async getMail() {
        await this.mailImput.click();
        await this.mailImput.pressSequentially('test@test.ua')
    }

    async getNumber() {
        await this.phoneInput.click();
        await this.phoneInput.pressSequentially('380630000000');
    }

    async selectPaymentType() {
        await this.paymentTypeInput.click();
    }

    async restItemClick() {
        await this.restItem.click();
    }

    async getDateDelivery() {
        await this.dateInput.click();
        await this.selectDate.click();
    }

    async getTimeDelivery() {
        await this.timeInput.click();
        await this.selectTime.click();
    }

    async getComment() {
        await this.commentInput.click();
        await this.commentInput.pressSequentially('Тест');
    }

    async clickOrderButton() {
        await this.orderButton.click();
    }

}