/// <reference types="cypress" />
const YvytuHome = require ("../../PageObjectModel/yvytuPages/yvytuHome");

describe("Test sobre la pagina YVYTU", () => {
    it("Verificar barra de navegación - Iterar en Botones píldora", () => {
        cy.visit("https://vientosdelaselva.com.ar/");

        const menu = [
            "LA RESERVA", 
            "CABAÑAS", 
            "COMO LLEGAR", 
            "CONTACTO", 
            "DONÁ"
        ];
        
        YvytuHome.getMenuPillButtons().each((boton, indice) => {
            cy.wrap(boton)
            .should(
                "have.text",
                menu[indice])
            .and(
                "be.visible"
             )
        });
    });

    it("Verificar Barra de Navegación - Iterar en Botones", () => {

        cy.visit("https://vientosdelaselva.com.ar/");
        const menu = [
          "",
          "LA RESERVA",
          "CABAÑAS",
          "COMO LLEGAR",
          "CONTACTO",
          "DONÁ",
        ];
    
        YvytuHome.getMenuAllButton().each((boton, indice) => {
          if (indice != 0) {
            cy.wrap(boton).should("have.text", menu[indice]);
          }
        });
      });
});