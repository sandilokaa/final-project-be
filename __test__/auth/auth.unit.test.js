const usersRepository = require("../../repositories/usersRepository");
const models = require("../../models");

describe("Auth unit test", () => {

    describe('Successful Operation', () => {

        /* ------------------ Handle Register ------------------ */

        describe('registration for new users', () => {
            it('should be returning the registration for new users', async () => {

                const createdUser = await usersRepository.createNewUser({
                    name: "user testing",
                    email: "usertesting123@example.com",
                    password: "usertesting123"
                });

                expect(createdUser.name).toEqual("user testing");
                expect(createdUser.email).toEqual("usertesting123@example.com");
                expect(createdUser.password).toEqual("usertesting123");

                await models.Users.destroy({
                    where: {
                        name: "user testing",
                        email: "usertesting123@example.com"
                    }
                });
            });
        });

        /* ------------------ End Handle Register ------------------ */


    });
});