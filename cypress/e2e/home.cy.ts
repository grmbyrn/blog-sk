describe('home test', () => {
	it('should contain the heading "Self-host', () => {
		cy.visit('/');
		cy.get('h1').contains('Modern BitTorrent index and tracker').should('be.visible');
	});
});
