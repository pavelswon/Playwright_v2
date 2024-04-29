import { Locator, Page } from '@playwright/test';

export class PizzaPage {

    readonly page: Page;
    readonly url: string = 'https://dominos.ua/uk/brovary/pizza/'
    readonly selectPizza: Locator; 
    readonly selectSize: Locator;
    readonly selectSide: Locator;
    readonly addToCart: Locator;
    readonly orderButton: Locator;

    constructor(page: Page) {
        this.page = page; 
        
        this.selectPizza = page.locator("//div[contains(@class, 'jzwFJR')]/a/p[text()='Піца Карбонара']");
        this.selectSize = page.locator("(//div[contains(@class, 'dzrCAg')])[4]");
        this.selectSide = page.locator("(//div[contains(@class,'ldjnev')])[3]");
        this.addToCart = page.locator("//div[contains(@class, 'cSwOGY')]");
        this.orderButton = page.locator("//p[contains(@class, 'ecPOAI')]");
    }

    async goto() {
        await this.page.goto(this.url);
        await this.page.waitForTimeout(1000);
    }

    async getPizza() {
        await this.page.waitForSelector('//div[contains(@class, "jzwFJR")]/a/p[text()="Піца Карбонара"]');
        await this.selectPizza.click();
    }

    async getSize(){
        await this.selectSize.click();
    }

    async getSide(){
        await this.selectSide.click();
    }

    async addToCartLocator(){
        await this.addToCart.click();
        await this.page.waitForTimeout(1500);
    }

    async clickOrderButton(){
        await this.orderButton.click();
    }
}