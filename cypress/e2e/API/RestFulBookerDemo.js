describe('API Testing with Cypress', () => {
    let id;
    it('GET - List of Booking IDs', () => {
        cy.request('GET', 'https://restful-booker.herokuapp.com/booking')
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.log(response.body.length);
                id = response.body[0].bookingid;
                for (let i = 0; i < 20; i++) {
                    cy.log(response.body[i]);

                }
            });
    });


    it('GET - Particular id', () => {
        cy.request('GET', 'https://restful-booker.herokuapp.com/booking/'+id)
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.log(response.body);

            });
    });

    it('POST - Generate A Token', () => {
        cy.request('POST', 'https://restful-booker.herokuapp.com/auth', {
            "username" : "admin",
            "password" : "password123"
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(response.body);

        });
    });

    // it('PUT - Update a resource', () => {
    //     cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
    //         id: 1,
    //         title: 'Updated Title',
    //         body: 'Updated Body',
    //         userId: 1,
    //     }).then((response) => {
    //         expect(response.status).to.eq(200);
    //         expect(response.body).to.have.property('title', 'Updated Title');
    //     });
    // });
    //
    // it('DELETE - Delete a resource', () => {
    //     cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1')
    //         .then((response) => {
    //             expect(response.status).to.eq(200);
    //         });
    // });
});
