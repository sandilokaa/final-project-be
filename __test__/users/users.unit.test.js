const usersRepository = require("../../repositories/usersRepository");
const productsRepository = require("../../repositories/productsRepository");
const models = require("../../models");

describe("Users unit test", () => {

    describe('Successful Operation', () => {

        /* ------------------ Handle Get All Users ------------------ */

        describe('Handle Get All Users', () => {
            it('should be returning handle get all users', async () => {

                const handleGetAllUsers = await usersRepository.handleGetAllUsers({});

                expect(handleGetAllUsers).toEqual(handleGetAllUsers);
            });
        });

        /* ------------------ End Handle Get All Users ------------------ */


        /* ------------------ Handle Get User By Id ------------------ */

        describe('Handle Get User By Id', () => {
            it('should be returning handle get user by id', async () => {

                const createdUser = await usersRepository.createNewUser({
                    name: "user testing",
                    email: "usertesting123@example.com",
                    password: "usertesting123"
                });

                const handleGetUserById = await usersRepository.handleGetUserById({
                    id: createdUser.id,
                });

                const findOne = await models.Users.findOne({ where: { id: createdUser.id } });
                expect(findOne.name).toEqual("user testing");
                expect(findOne.email).toEqual("usertesting123@example.com");
                await models.Users.destroy({
                    where: {
                        name: "testingUpdate",
                        email: "testingUnit@example.com"
                    }
                });
            });
        });

        /* ------------------ End Handle Get User By Id ------------------ */


        /* ------------------ Handle Get User By Email ------------------ */

        describe('Handle Get User By Email', () => {
            it('should be returning handle get user by email', async () => {

                await usersRepository.createNewUser({
                    name: "user testing",
                    email: "usertesting123@example.com",
                    password: "usertesting123"
                });

                const getUser = await usersRepository.getUserByEmail({
                    email: "usertesting123@example.com"
                });

                expect(getUser.email).toEqual("usertesting123@example.com");
                await models.Users.destroy({
                    where: {
                        name: "user testing",
                        email: "usertesting123@example.com"
                    }
                });
            });
        });

        /* ------------------ End Handle Get User By Email ------------------ */


        /* ------------------ End Handle Update User By Id ------------------ */

        describe('Handle Update User By Id', () => {
            it('should be returning handle updated user by id', async () => {

                const createdUser = await usersRepository.createNewUser({
                    name: "user testing",
                    email: "usertesting123@example.com",
                    password: "usertesting123"
                });

                const updatedUser = await usersRepository.handleUpdateUsers({
                    id: createdUser.id,
                    name: "user testing",
                    city: "semarang",
                    address: "jalan jalan dijalanan",
                    phoneNumber: "0812345678"
                });

                const findOne = await models.Users.findOne({ where: { id: createdUser.id } });
                expect(findOne.name).toEqual("user testing");
                expect(findOne.city).toEqual("semarang");
                expect(findOne.address).toEqual("jalan jalan dijalanan");
                expect(findOne.phoneNumber).toEqual("0812345678");
                await models.Users.destroy({
                    where: {
                        name: "user testing",
                        email: "usertesting123@example.com"
                    }
                });
            });
        });

        /* ------------------ End Handle Update User By Id ------------------ */


        /* ------------------ Handle Get Product By User Id ------------------ */

        describe('Handle Get Product By User Id', () => {
            it('should be returning hand;e get product by user id', async () => {

                const handleCreatedProduct = await productsRepository.handleCreateProduct({
                    user_id: "1",
                    name: "kaos vintage",
                    price: "3250000",
                    category: "fashion",
                    description: "Lorem Ipsum",
                    isPublish: true,
                    isSold: false
                });

                const getProductById = await productsRepository.handleGetProductById({
                    id: handleCreatedProduct.user_id
                });

                const findOne = await models.Products.findOne({ where: { user_id: handleCreatedProduct.user_id } });
                expect(findOne.user_id).toEqual(1);
                await models.Products.destroy({
                    where: {
                        user_id: "1",
                        name: "kaos vintage",
                        price: "3250000",
                        category: "fashion",
                        description: "Lorem Ipsum",
                        isPublish: true,
                        isSold: false
                    }
                });
            });
        });

        /* ------------------ End Handle Get Product By User Id ------------------ */

    });
});