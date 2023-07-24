import { ListPage } from '../support/list.page';
import { UserDetailPage } from '../support/user-detail.page';

describe('User Management Tests', () => {
    const listPage = new ListPage();
    const userDetailPage = new UserDetailPage();

    beforeEach(() => {
        listPage.visit();
        listPage.clickCreateNew();
    });

    it('should show validation errors for empty fields on form submit', () => {
        cy.get('button[type="submit"]').click();
        cy.contains('First Name is required').should('be.visible');
        cy.contains('Last Name is required').should('be.visible');
        cy.contains('Username is required').should('be.visible');
        cy.contains('Department is required').should('be.visible');
    });

    it('should successfully submit the form with valid data', () => {
        cy.get('[formControlName="firstName"]').type('Tony');
        cy.get('[formControlName="lastName"]').type('Lee');
        cy.get('[formControlName="username"]').type('tonylee');
        cy.get('[formControlName="department"]').select('Marketing');

        cy.get('button[type="submit"]').click();

        // Click the "details" button for the newly created user
        listPage.clickUserDetails();

        // Verify the user detail page
        userDetailPage.verifyUserDetailPage();
    });
});
