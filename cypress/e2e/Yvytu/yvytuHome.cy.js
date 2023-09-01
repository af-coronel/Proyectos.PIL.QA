/// <reference types="cypress" />

describe("Test sobre la pagina YVYTU", () => {
    it("Verificar barra de navegación - Iterar en Botones píldora", () => {
        cy.visit("https://vientosdelaselva.com.ar/");

        const menu = ["LA RESERVA", "CABAÑAS", "COMO LLEGAR", "CONTACTO", "DONA"];

        cy.get('a[class*="rounded-full py-2 px-4"]').each((boton, indice) => {
            cy.wrap(boton).should("have.text", menu[indice]).and("be.visible")
        });
    });   
});