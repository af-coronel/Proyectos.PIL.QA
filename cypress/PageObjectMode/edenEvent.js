/// <reference types="cypress" />

class EdenEventLocators {
    constructor() {
        this.eventTitles = ".fechas-funciones span";
    }
};

export default class EdenEvent {
    constructor() {
        this.locators = new EdenEventLocators();
    }
    getEventTitles() {
        return cy.get(this.locators.eventTitles);
    }

};