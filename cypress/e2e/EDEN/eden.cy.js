/// <reference types="cypress" />
import EdenHome from "../../PageObjectMode/edenHome";
import EdenHeader from "../../PageObjectMode/edenHeader";
import EdenEvent from "../../PageObjectMode/edenEvent";

const edenHome = new EdenHome();
const edenHeader = new EdenHeader();
const edenEvent = new EdenEvent();

describe("Test sobre la página de EDEN ENTRADAS", () => {

    it("Verificar Subtitulos", () => {
        cy.visit("https://www.edenentradas.com.ar/");
        const txtBuscar = "BUSCAR EVENTO";
        const txtCalendar = "CALENDARIO DE EVENTOS";
        edenHome.getSubTitles().first().should("contain.text", txtBuscar);
        edenHome.getSubTitles().last().should("contain.text", txtCalendar);
    });


    it("Verificar Menú", () => {
        cy.visit("https://www.edenentradas.com.ar/");

        const menuBtn = ["HOME","TODOS","AGENDA DEL FINDE","RECITALES","TEATROS","CUARTETOS","FESTIVALES","SALAS"];
        edenHeader.getMenuButtons().each((button, $index) => {
            cy.wrap(button).should("contain.text", menuBtn[$index]);
        });
    });


    it("Verificar página de recitales", () => {
        cy.visit("https://www.edenentradas.com.ar/");
        edenHeader.getMenuButtons().contains("RECITAL").click();
        //const newUrl = "https://www.edenentradas.com.ar/sitio/contenido/recitales";
        //cy.url().should("eq", newUrl);
        cy.url().should("include", "/sitio/contenido/recitales");
    });


    it("Verificar imagen del logo", () => {
        cy.visit("https://www.edenentradas.com.ar/");
        edenHeader.getImageLogo().should("be.visible").and("have.prop", "naturalHeight").and("be.greaterThan", 0);
        const imgSource = "https://static.edenentradas.com.ar/sitio/images/logo.gif";
        edenHeader.getImageLogo().should("have.attr", "src", imgSource);
        edenHeader.getImageLogo().should("have.attr", "alt", "EdenEntradas");
    });

    it.only("Verificar el funcionamiento del buscador", () => {
        cy.visit("https://www.edenentradas.com.ar/");
        edenHeader.getSearchInput().type("Queen");
        edenHeader.getSearchSuggestion().click();
        const eventTxt = 'Experiencia Queen "Champions of the World Tour 23" '
        edenEvent.getEventTitles().should("contain.text", eventTxt)
    });

});
    