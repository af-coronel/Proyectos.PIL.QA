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

    it("Verificar comportamiento del botón Ir Arriba", () => { 
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
         .and("have.text",
          "\n            Ir arriba\n          ")
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
    //Para testear atributos usamos have.attr, atributo, valor. 
    // "a" denota un enlace funcional, en html. 
    it("Verificar Botón de Reservar", () => {
       YvytuHome
          .getGenericButton()
          .contains("Reservar")
          .should("have.attr", "href", "https://wa.me/5493757454400")
          .and("have.attr", "target", "_blank");
    
    //Primer test visual: have.css
       YvytuHome
          .getGenericButton()
          .contains("Reservar")
          .should("have.css","Background",
            "rgb(34, 153, 84) none repeat scroll 0% 0% / auto padding-box border-box"
          );
      });

      it.only("Verificar Imagenes de las Cabañas", () => {
        YvytuHome
          .getImgCabaniaYaguarete()
          .should("have.attr", "src", "./public/images/cabana-gallery/01.png")
      });


  });    