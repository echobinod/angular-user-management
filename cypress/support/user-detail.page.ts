export class UserDetailPage {
    verifyUserDetailPage() {
        cy.contains('User detail').should('be.visible');
    }
}
