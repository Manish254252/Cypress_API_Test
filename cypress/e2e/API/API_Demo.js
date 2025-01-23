describe('API Testing with Cypress', () => {
    it('GET - Validate response status and data', () => {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', 1);
                expect(response.body).to.have.property('title');
            });
    });

    it('POST - Create a new resource', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('title', 'foo');
        });
    });

    it('PUT - Update a resource', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
            id: 1,
            title: 'Updated Title',
            body: 'Updated Body',
            userId: 1,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('title', 'Updated Title');
        });
    });

    it('DELETE - Delete a resource', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => {
                expect(response.status).to.eq(200);
            });
    });
});
