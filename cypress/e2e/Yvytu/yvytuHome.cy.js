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

    it("Verificar Imágenes del Banner Principal", () => {
        //El texto es /public/images/header-gallery/01.png y varía hasta 04
        const bannerList = ["01.png", "02.png", "03.png", "04.png"];
    
        bannerList.forEach((banner, inx) => {
          YvytuHome
            .getCurrentImageBanner()
            .should(
              "have.class",
              `bg-[url('/public/images/header-gallery/${banner}')]`
            );
    
          YvytuHome
            .getImgButton()
            .its("length")
            .then((cantidad) => {
              if (cantidad != inx + 1) {
                YvytuHome
                  .getImgButton()
                  .eq(inx + 1)
                  .click();
                cy.wait(1000);
              }
            });
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
         .wait(1000) // Espera 1 segundo
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

    it("Verificar textos de la página", () => {
      let inxPar = 0;
    
        //Leer el readme
        cy.fixture("textos_yvytu")
          .then((txt_yvytu) => {

        //Se toma cada elemento definido dentro del arrayJson que está en fixtures
        //Se anidan forEach en forEach 
          txt_yvytu.forEach((elTexto, inx) => {
          cy.log(`**VALIDACIÓN DEL TITULO: ${inx + 1}**`);

          let yvyTitulo = elTexto.titulo;

        //Se splitea el título del JSON con espacio para tomar cada palabra individual
            yvyTitulo = yvyTitulo.split(" ");
            yvyTitulo.forEach((palabra) => {
            YvytuHome
              .getGenericSubtitle()
              .eq(inx + 1)
              .should("contain.text", palabra);
        });
    
          //Verificar Párrafos
           let yvyParrafos = elTexto.parrafos;

          //"Parrafos" en el json contiene multiples parrafos
            yvyParrafos.forEach((elParrafo) => {
            cy.log(`Validar Parrafo ${inxPar}: ${elParrafo}`);
    
            YvytuHome
              .getGenericParrafo()
              .eq(inxPar)
              .invoke("text")
              .then((parr) => {
                  cy.log(`Parrafo sin modificar: ${parr}`);
                  parr = parr.replace(/\s+/g, " ").trim();
                  cy.log(`Parrafo modificado: ${parr}`);
                  expect(parr).to.include(elParrafo);
                });
              inxPar++;
            });
          });
        });
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

    it("Verificar Reel de Imágenes", () => {
      let arrayImagenes = [
          "frase01.png",
          "noche.png",
          "pasafauna.png",
          "picaflor.png",
          "carpincho.png",
          "frase01.png",
          "noche.png",
          "pasafauna.png",
          "picaflor.png",
          "carpincho.png",
          "frase01.png",
          "noche.png",
          "pasafauna.png",
          "picaflor.png",
        ];
    
      YvytuHome.getReelImagenes().each((imagenes, index) => {
        cy.wrap(imagenes).should(
        "have.attr",
        "src",
        `./public/images/gallery/${arrayImagenes[index]}`
        );
       });
      });

    it("Verificar Imagenes de las Cabañas", () => {
     cy.log("**Todas las imagenes tienen como texto alternativo Imagen 1**");
     cy.log("**YVYTU-015 Error texto alternativo**");
      YvytuHome
        .getImgCabaniaYaguarete()
        .should("have.attr", "src", "./public/images/cabana-gallery/01.png")
        .and("have.attr", "alt", "Foto de la fachada de la cabaña Yaguareté");
      YvytuHome
        .getImgCabaniaArasari()
        .should("have.attr", "src", "./public/images/cabana-gallery/01.png")
        .and("have.attr", "alt", "Foto de la fachada de la cabaña Yaguareté");
      });
    
    it("Verificar Botón de Donar", () => {
      YvytuHome
        .getGenericButton()
        .contains("Donar")
        .should("have.attr", "href", "https://cafecito.app/reserva-yvytu")
        .and("have.attr", "target", "_blank");
    
      YvytuHome
        .getGenericButton()
        .contains("Donar")
        .should(
         "have.css",
         "Background",
         "rgb(34, 153, 84) none repeat scroll 0% 0% / auto padding-box border-box"
        );
      });
    
    it("Visual Tetsing de Yvytu usando Snapshoot", () => {
        cy.compareSnapshot("home-page", 0.2); //Umbral del 20%
      });
    
    it("Visual Tetsing de Yvytu usando Snapshoot en un elemento", () => {
        YvytuHome
         .getMenuPillButtons()
         .parent()
         .compareSnapshot("botones");
      });
    
    it("Visual testing del boton ir arriba", () => {
        YvytuHome
         .getIrArribaButton()
         .should(
          "have.css",
          "background",
          "rgb(34, 153, 84) none repeat scroll 0% 0% / auto padding-box border-box"
        );
      });
    });
      

    //Es mala práctica dejar el codigo comentado
    //En este caso lo dejaré para estudiarlo antes de borrarlo
    /* Código generador del Array para el Reel:
    
    La profe usó este código como puntapié para generar
    el array con el que luego se armó el test para verificar
    el ReelDeImagenes:

      it("Verificar Reel de Imágenes", () => { 
        let newArray = [];
       YvytuHome
      .getReelImagenes()
      .each((imagen, index) => {
        cy.wrap(imagen)
          .invoke("attr", "src")
          .then((texto) => {
            cy.log(texto);
            newArray.push(texto);
          });
      })
      .then(() => {
        cy.log(JSON.stringify(newArray));
      });
    });

    //Generado y copypasteado en/desde Cypress:
    log[
    "./public/images/gallery/frase01.png",
    "./public/images/gallery/noche.png",
    "./public/images/gallery/pasafauna.png",
    "./public/images/gallery/picaflor.png",
    "./public/images/gallery/carpincho.png",
    "./public/images/gallery/frase01.png",
    "./public/images/gallery/noche.png",
    "./public/images/gallery/pasafauna.png",
    "./public/images/gallery/picaflor.png",
    "./public/images/gallery/carpincho.png",
    "./public/images/gallery/frase01.png",
    "./public/images/gallery/noche.png",
    "./public/images/gallery/pasafauna.png",
    "./public/images/gallery/picaflor.png"] */
       