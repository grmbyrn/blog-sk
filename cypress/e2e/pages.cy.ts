describe('self-host test', () => {
	it('should contain the heading "Self-host', () => {
		cy.visit('/self-host');
		cy.get('h1').contains('Self-host').should('be.visible');
	});
});
