const productsRepository = require("../../repositories/productsRepository");
const models = require("../../models");

describe("Product unit test", () => {

    describe('Successful Operation', () => {

        /* ------------------ Handle Create Product ------------------ */

        describe('Handle Create Product', () => {
            it('should be returning the Handle Create Product', async () => {

                const handleCreatedProduct = await productsRepository.handleCreateProduct({
                    user_id: "1",
                    name: "kaos vintage",
                    price: "3250000",
                    category: "fashion",
                    description: "Lorem Ipsum",
                    isPublish: true,
                    isSold: false
                });

                expect(handleCreatedProduct.user_id).toEqual(1);
                expect(handleCreatedProduct.name).toEqual("kaos vintage");
                expect(handleCreatedProduct.price).toEqual("3250000");
                expect(handleCreatedProduct.category).toEqual("fashion");
                expect(handleCreatedProduct.description).toEqual("Lorem Ipsum");
                expect(handleCreatedProduct.isPublish).toEqual(true);
                expect(handleCreatedProduct.isSold).toEqual(false);


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

        /* ------------------ End Handle Create Product ------------------ */


        /* ------------------ Handle Get All Product ------------------ */

        describe('Handle Get All Product', () => {
            it('should be returning handle get all products', async () => {

                const handleGetAllProducts = await productsRepository.handleGetAllProducts({});

                expect(handleGetAllProducts).toEqual(handleGetAllProducts);
            });
        });
        
        /* ------------------ End Handle Get All Product ------------------ */


        /* ------------------ Handle Get Product By Id ------------------ */

        describe(' Handle Get Product By Id', () => {
            it('should be returning handle get product by id', async () => {

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
                    id: handleCreatedProduct.id,
                });

                const findOne = await models.Products.findOne({ where: { id: handleCreatedProduct.id } });
                
                expect(findOne.user_id).toEqual(1);
                expect(findOne.name).toEqual("kaos vintage");
                expect(findOne.price).toEqual("3250000");
                expect(findOne.category).toEqual("fashion");
                expect(findOne.description).toEqual("Lorem Ipsum");
                expect(findOne.isPublish).toEqual(true);
                expect(findOne.isSold).toEqual(false);

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
        
        /* ------------------ End Handle Get Product By Id ------------------ */


        /* ------------------ Handle Update Product By Id ------------------ */

        describe('Handle Update Product By Id', () => {
            it('should be returning the handle update product by id', async () => {

                const handleCreatedProduct = await productsRepository.handleCreateProduct({
                    user_id: "1",
                    name: "kaos vintage",
                    price: "3250000",
                    category: "fashion",
                    description: "Lorem Ipsum",
                    isPublish: true,
                    isSold: false
                });

                const handleUpdatedProductById = await productsRepository.handleUpdateProductById({
                    id: handleCreatedProduct.id,
                    name: "kaos vintage nascar",
                    price: "3250000",
                    description: "Original 100% official, fake? uang kembali",
                    isPublish: true
                });

                const findOne = await models.Products.findOne({ where: { id: handleCreatedProduct.id } });
                
                expect(findOne.user_id).toEqual(1);
                expect(findOne.name).toEqual("kaos vintage nascar");
                expect(findOne.price).toEqual("3250000");
                expect(findOne.category).toEqual("fashion");
                expect(findOne.description).toEqual("Original 100% official, fake? uang kembali");
                expect(findOne.isPublish).toEqual(true);
                expect(findOne.isSold).toEqual(false);


                await models.Products.destroy({
                    where: {
                        id: handleCreatedProduct.id,
                    }
                });
            });
        });

        /* ------------------ End Handle Update Product By Id ------------------ */

    });
});