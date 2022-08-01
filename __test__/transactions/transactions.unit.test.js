const models = require("../../models");
const transactionsRepository = require("../../repositories/transactionsRepository");
const { Op } = require("sequelize");

describe("Transaction unit test", () => {

    describe('Successful Operation', () => {

        /* ------------------ Handle Create Transaction ------------------ */

        describe('Handle Create Transaction', () => {
            it('should be returning the handle create transaction', async () => {

                const createdTransaction = await transactionsRepository.handleCreateTransaction({
                    user_id: "2",
                    owner_id: "1",
                    product_id: "1",
                    requestedPrice: "4540000",
                    isAccepted: false,
                    isOpened: false
                });

                expect(createdTransaction.user_id).toEqual(2);
                expect(createdTransaction.owner_id).toEqual(1);
                expect(createdTransaction.product_id).toEqual(1);
                expect(createdTransaction.requestedPrice).toEqual(4540000);
                expect(createdTransaction.isAccepted).toEqual(false);
                expect(createdTransaction.isOpened).toEqual(false);


                await models.Transactions.destroy({
                    where: {
                        user_id: "2",
                        owner_id: "1",
                        product_id: "1",
                        requestedPrice: "4540000",
                        isAccepted: false,
                        isOpened: false
                    }
                });
            });
        });

        /* ------------------ End Handle Create Transaction ------------------ */


        /* ------------------ Handle Get Transaction By Id ------------------ */

        describe('Handle Get Transaction By Id', () => {
            it('should be returning handle get transaction by id', async () => {

                const createdTransaction = await transactionsRepository.handleCreateTransaction({
                    user_id: "2",
                    owner_id: "1",
                    product_id: "1",
                    requestedPrice: "4540000",
                    isAccepted: false,
                    isOpened: false
                });

                const getTransactionById = await transactionsRepository.handleGetTransactionById({
                    id: createdTransaction.id
                });

                const findOne = await models.Transactions.findOne({ where: { id: createdTransaction.id } });

                expect(findOne.user_id).toEqual(2);
                expect(findOne.owner_id).toEqual(1);
                expect(findOne.product_id).toEqual(1);
                expect(findOne.requestedPrice).toEqual(4540000);
                expect(findOne.isAccepted).toEqual(false);
                expect(findOne.isOpened).toEqual(false);
                
                await models.Transactions.destroy({
                    where: {
                        user_id: "2",
                        owner_id: "1",
                        product_id: "1",
                        requestedPrice: "4540000",
                        isAccepted: false,
                        isOpened: false
                    }
                });
            });
        });


        /* ------------------ End Handle Get Transaction By Id ------------------ */


        /* ------------------ Handle Get Transaction By User Id ------------------ */
        
        describe('Handle Get Transaction By User Id', () => {
            it('should be returning handle get transaction by user id', async () => {

                const createdTransaction = await transactionsRepository.handleCreateTransaction({
                    user_id: "2",
                    owner_id: "1",
                    product_id: "1",
                    requestedPrice: "4540000",
                    isAccepted: false,
                    isOpened: false
                });

                const getTransactionByUserId = await transactionsRepository.handleGetTransactionByUserId({
                    id: createdTransaction.user_id
                });

                const findOne = await models.Transactions.findOne({ where: { user_id: createdTransaction.user_id } });
                
                expect(findOne.user_id).toEqual(2);

                await models.Transactions.destroy({
                    where: {
                        user_id: "2",
                        owner_id: "1",
                        product_id: "1",
                        requestedPrice: "4540000",
                        isAccepted: false,
                        isOpened: false
                    }
                });
            });
        });
        
        /* ------------------ End Handle Get Transaction By User Id ------------------ */


        /* ------------------ Handle Get Transaction By Owner Id ------------------ */

        describe('Handle Get Transaction By Owner Id', () => {
            it('should be returning handle get transaction by owner id', async () => {

                const createdTransaction = await transactionsRepository.handleCreateTransaction({
                    user_id: "2",
                    owner_id: "1",
                    product_id: "1",
                    requestedPrice: "4540000",
                    isAccepted: false,
                    isOpened: false
                });

                const getTransactionByUserId = await transactionsRepository.handleGetTransactionByUserId({
                    id: createdTransaction.owner_id
                });

                const findOne = await models.Transactions.findOne({ where: { owner_id: createdTransaction.owner_id } });
                
                expect(findOne.owner_id).toEqual(1);

                await models.Transactions.destroy({
                    where: {
                        user_id: "2",
                        owner_id: "1",
                        product_id: "1",
                        requestedPrice: "4540000",
                        isAccepted: false,
                        isOpened: false
                    }
                });
            });
        });

        /* ------------------ End Handle Get Transaction By Owner Id ------------------ */


        /* ------------------ Handle Update Transaction By Id ------------------ */

        describe('Handle Update Transaction By Id', () => {
            it('should be returning the handle update transaction by id', async () => {

                const createdTransaction = await transactionsRepository.handleCreateTransaction({
                    user_id: "2",
                    owner_id: "1",
                    product_id: "1",
                    requestedPrice: "4540000",
                    isAccepted: false,
                    isOpened: false
                });

                const updatedTransaction = await transactionsRepository.handleUpdateTransactionById({
                    id: createdTransaction.id,
                    requestedPrice: "4540000",
                    isAccepted: true,
                    isOpened: true
                });

                const findOne = await models.Transactions.findOne({ where: { id: createdTransaction.id } });

                expect(findOne.user_id).toEqual(2);
                expect(findOne.owner_id).toEqual(1);
                expect(findOne.product_id).toEqual(1);
                expect(findOne.requestedPrice).toEqual(4540000);
                expect(findOne.isAccepted).toEqual(true);
                expect(findOne.isOpened).toEqual(true);


                await models.Transactions.destroy({
                    where: {
                        user_id: "2",
                        owner_id: "1",
                        product_id: "1",
                        requestedPrice: "4540000",
                        isAccepted: true,
                        isOpened: true
                    }
                });
            });
        });

        /* ------------------ End Handle Update Transaction By Id ------------------ */


        /* ------------------ Handle Get Transaction Notification ------------------ */

        describe('Handle Get Transaction Notification', () => {
            it('should be returning handle Get transaction notification', async () => {
                
                const createdTransaction = await transactionsRepository.handleCreateTransaction({
                    user_id: "2",
                    owner_id: "1",
                    product_id: "1",
                    requestedPrice: "4540000",
                    isAccepted: false,
                    isOpened: false
                });

                const getTransactionNotification = await transactionsRepository.handleGetTransactionNotification({
                    id: 1
                })

                const findOne = await models.Transactions.findOne({ where: { [Op.or]: [{ owner_id: { [Op.eq]: 1 } }, { user_id: { [Op.eq]: 2 } }] } })
                
                expect(findOne.user_id).toEqual(2);
                expect(findOne.owner_id).toEqual(1);

                await models.Transactions.destroy({
                    where: {
                        user_id: "2",
                        owner_id: "1",
                        product_id: "1",
                        requestedPrice: "4540000",
                        isAccepted: false,
                        isOpened: false
                    },
                });
            });
        });

        /* ------------------ End Handle Get Transaction Notification ------------------ */

    });
});