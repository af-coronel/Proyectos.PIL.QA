class YvytuHome{

    //Botones del Header
    getMenuPillButtons(){
        return cy.get('a[class*="rounded-full py-2 px-4"]');
    }
    
    getMenuAllButton() {
        return cy.get("nav#menu-nav a");
    }

    //Boton ir arriba
    getIrArribaButton() {
    return cy.get("#btn-scroll-top");
    }
    
    //Banner de imagen home
    getGenericSubtitle() {
        return cy.get("h2");
    }
};

export default new YvytuHome();