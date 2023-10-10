class YvytuHome{
    /* La estrategia ideal para el armado de POM es: 
    1. Ordenar los métodos del objeto definido considerado
    el orden de los elementos que aparecen a medida que
    recorremos la página.
    2. Poner comentarios que indiquen a qué elementos
    se refieren los métodos del objeto */
    
    
    //Botones del Header
    getMenuPillButtons(){
        return cy.get('a[class*="rounded-full py-2 px-4"]');
      }
    
    getMenuAllButton() {
        return cy.get("nav#menu-nav a");
      }


    //Banner de imagen home
    getCurrentImageBanner() {
        return cy.get(
          `[class^="w-full h-600 bg-[url('/public/images/header-gallery/"][class*="slick-current"]`
        );
      }
    
    getImagenesBanner() {
        return cy.get(`[class*="bg-[url('/public/images/header-gallery/"]:visible`);
      }
    
    getImgButton() {
        return cy.get("ul").first().find("li button");
      }

    getGenericSubtitle() {
        return cy.get("h2");
      }

    getGenericParrafo() {
        return cy.get(".text-justify p");
      }  

    getGenericButton() {
        return cy.get("a");
      }
    

    // Seccion de texto //

    //Boton ir arriba
    getIrArribaButton() {
        return cy.get("#btn-scroll-top");
      }  

    //Reel de Imágenes
    getReelImagenes() {
    return cy.get('[class="slick-list draggable"]').eq(1).find("img");
      }

    //Cabañas
    getImgCabaniaYaguarete() {
    return cy.get("#slick-slide00");
      }

    getImgCabaniaArasari() {
    return cy.get("#slick-slide10");
      }
      
    
    //Elementos no testeados en esta instancia:

    //Como llegar
    //Contacto
    //Colaborá
    //Sponsor
    //Redes
    //Footer  
};

export default new YvytuHome();