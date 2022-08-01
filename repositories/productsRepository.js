const { Products, Users } = require("../models");
const { Op } = require("sequelize");

class ProductsRepository {

    // ------------------------- Handle Get All Product (Repository) ------------------------- //

    static async handleGetAllProducts({ name, category, isPublish, isSold }) {

        const query = {
            where: {},
        };

        if (name) {
            const searchByName = await Products.findAll({
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: '%' + name + '%' } },
                    ]
                },
                limit: 10,
            });

            return searchByName;
        }

        if (category) {
            query.where = { ...query.where, category };
        }

        if (isPublish) {
            query.where = { ...query.where, isPublish };
        }

        if (isSold) {
            query.where = { ...query.where, isSold };
        }

        const getDataWhereQuery = await Products.findAll(query);

        return getDataWhereQuery;
    }

    // ------------------------- End Handle Get All Product (Repository) ------------------------- //



    // ------------------------- Handle Get Product By Id (Repository) ------------------------- //

    static async handleGetProductById({ id }) {

        const query = {
            where: {},
            include: [{
                model: Users,
                attributes: ["id", "name", "city", "picture"]
            }],
        }

        if (id) {
            query.where = { ...query.where, id: id }
        }

        const getProductById = await Products.findOne(query);

        return getProductById;
    }


    // ------------------------- End Handle Get Product By Id (Repository) ------------------------- //



    // ------------------------- Handle Create Product (Repository) ------------------------- //

    static async handleCreateProduct({
        user_id,
        name,
        price,
        category,
        description,
        picture,
        isPublish,
        isSold
    }) {
        const handleCreatedProduct = Products.create({
            user_id,
            name,
            price,
            category,
            description,
            picture,
            isPublish,
            isSold
        });

        return handleCreatedProduct;
    }


    // ------------------------- End Handle Create Product (Repository) ------------------------- //


    // ------------------------- Handle Update Product (Repository) ------------------------- //

    static async handleUpdateProductById({ id, name, price, category, description, picture, isPublish, isSold }) {
        const handleUpdatedProductById = await Products.update({
            name,
            price,
            category,
            description,
            picture,
            isPublish,
            isSold,
        },
            { where: { id } }
        );

        return handleUpdatedProductById;
    }

    // ------------------------- End Handle Update Product (Repository) ------------------------- //


    // ------------------------- Handle Delete Product (Repository) ------------------------- //

    static async handleDeleteProductById({ id }) {
        const handleDeletedProductById = await Products.destroy({ where: { id } });

        return handleDeletedProductById;
    }

    // ------------------------- End Handle Delete Product (Repository) ------------------------- //

};

module.exports = ProductsRepository;