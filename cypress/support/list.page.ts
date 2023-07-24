export class ListPage {
    visit() {
        cy.visit('/users');
        cy.contains('Users list').should('be.visible');
    }

    clickCreateNew() {
        cy.contains('Create New').click();
    }

    clickUserDetails() {
        cy.contains('details').first().click();
    }
}
