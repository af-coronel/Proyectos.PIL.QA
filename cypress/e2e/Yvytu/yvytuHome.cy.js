/// <reference types="cypress" />
const YvytuHome = require ("../../PageObjectModel/yvytuPages/yvytuHome");

describe("Test sobre la pagina YVYTU", () => {

    beforeEach(() => {
        cy.visit("https://vientosdelaselva.com.ar/");

      });

    it("Verificar barra de navegación - Iterar en Botones píldora", () => {
        const menu = [
            "LA RESERVA", 
            "CABAÑAS", 
            "COMO LLEGAR", 
            "CONTACTO", 
            "DONÁ"
        ];
        
        YvytuHome
        .getMenuPillButtons()
        .each((boton, indice) => {
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
        const menu = [
          "",
          "LA RESERVA",
          "CABAÑAS",
          "COMO LLEGAR",
          "CONTACTO",
          "DONÁ",
        ];

        YvytuHome
        .getMenuAllButton()
        .each((boton, indice) => {
          if (indice != 0) {
            cy.wrap(boton).should("have.text", menu[indice]);
          }
        });
      });

    it.only("Verificar comportamiento del botón Ir Arriba", () => { 
       YvytuHome
       .getIrArribaButton()
       .should("not.be.visible");
       YvytuHome
       .getGenericSubtitle()
       .contains("Conocé una historia mágica.")
       .scrollIntoView();
       YvytuHome
       .getIrArribaButton()
       .should("be.visible")
       .and("have.text", "\n            Ir arriba\n          ")
       .click();
       YvytuHome
       .getMenuPillButtons()
       .each((boton, indice) => {
            cy.wrap(boton)
            .should(
                "be.visible"
            );

        })
    });
});    