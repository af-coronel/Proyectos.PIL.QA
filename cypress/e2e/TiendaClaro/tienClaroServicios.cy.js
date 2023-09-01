/// <reference types="cypress" />

describe("Test de servicio de Tienda CLARO", () => {

    it("Verificar Servicio de PRODUCTOS RECOMENDADOS ", () => {
        cy.request(
           "GET",
           "https://tienda.claro.com.ar/api/contentManagement?content=productos_recomendados_productos&productId=3074457345616704168"
        ).then((response) => {
                expect(response.status).to.eq(200);
            });   
    });

    it("Verificar Servicio de Chat ACTIVADO", () => {
        cy.request(
          "GET",
          "https://tienda.claro.com.ar/api/chat-config/TIENDA_ENABLE_CHAT"
        ).then((response) => {
          expect(response.status).to.eq(200);
        });
    }); 

    it("Verificar banner y texto de CATEGORÍAS", () => {
      cy.request(
         "GET",
         "https://tienda.claro.com.ar/api/contentManagement?content=banner_categorias&categoryId=/es/claro/equipos&substituteValue=https://tienda.claro.com.ar/staticContent/Claro/"
        ).then((response) => {
        expect(response.status).to.eq(200);
        });
      cy.request(
         "GET",
        "https://tienda.claro.com.ar/api/contentManagement?content=texto_categorias&categoryId=/es/claro/equipos"
        ).then((response) => {
        expect(response.status).to.eq(200);
        });
    });

    it("Verificar categoría SMARTH HOME", () => {
      cy.request(
         "GET",
         "https://tienda.claro.com.ar/api/contentManagement?content=wact_categorias&categoryId=/es/claro/smart-home"
        ).then((response) => {
        expect(response.status).to.eq(200);
        });
    });

});

//En la brevedad estaré subiendo más test de servicios, y pensando más page objects.
//Gracias por la ciencia profe!