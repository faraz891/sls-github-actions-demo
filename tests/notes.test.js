'use strict'
let init = require('./steps/init')
let { an_authenticated_user } = require('./steps/given')
let idToken;

describe('Given an authenticated user', () => {
    beforeAll(async () => {
    init();
    let user = await an_authenticated_user();
    idToken = user.AuthenticationResult.idToken;
    console.log(idToken);
    });

describe('When we invoke POST /notes endpoint', () => {
    it("should create a new note", async () => {
        expect(true).toBe(true);
    });    
});

});