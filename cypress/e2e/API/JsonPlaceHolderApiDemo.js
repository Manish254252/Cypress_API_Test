it('Store dynamic data', () => {
    cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }).then((response) => {
        Cypress.env('postId', response.body.id);
    });
});

it('Use stored data', () => {
    const postId = Cypress.env('postId');
    cy.request('GET', `https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', postId);
        });
});
