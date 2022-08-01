const { Transactions, Products, Users } = require("../models");
const { Op } = require("sequelize");

class TransactionRepository {

    // ------------------------- Handle Create Transaction (Repository) ------------------------- //

    static async handleCreateTransaction({ 
        user_id, 
        product_id, 
        owner_id,  
        requestedPrice, 
        isAccepted, 
        isRejected,
        isOpened 
    }) {
        
        const createdTransaction = Transactions.create({
            user_id, 
            product_id, 
            owner_id,  
            requestedPrice, 
            isAccepted, 
            isRejected,
            isOpened
        });
        
        return createdTransaction;
    };

    // ------------------------- End Handle Create Transaction (Repository) ------------------------- //


    // ------------------------- Handle Get Transaction By Id (Repository) ------------------------- //

    static async handleGetTransactionById({ id }) {
        
        const query = {
            where: {},
            include: [{
                model: Products,
                attributes: ["name", "category", "price", "picture", "isSold"] 
            },{
                model: Users,
                attributes: ["name", "city", "picture"]
            }]
        };

        if (id) {
            query.where = { ...query.where, id }
        }

        const getTransactionById = await Transactions.findOne(query);

        return getTransactionById;
    };

    // ------------------------- End Handle Get Transaction By Id (Repository) ------------------------- //


    // ------------------------- Handle Get Transaction By User Id (Repository) ------------------------- //

    static async handleGetTransactionByUserId({ id, isAccepted, isRejected }){
        
        const query = {
            where: {},
            include: [{
                model: Products,
                attributes: ["name", "category", "price", "picture", "isSold"] 
            }]
        };

        if (id) {
            query.where = { ...query.where, user_id: id }
        }

        if (isAccepted) {
            query.where = { ...query.where, isAccepted }
        }

        if (isRejected) {
            query.where = { ...query.where, isRejected }
        }

        const getTransactionByUserId = await Transactions.findAll(query);

        return getTransactionByUserId;
    };

    // ------------------------- End Handle Get Transaction By User Id (Repository) ------------------------- //



    // ------------------------- Handle Get Transaction By Owner Id (Repository) ------------------------- //

    static async handleGetTransactionByOwnerId({ id, isAccepted, isRejected }){
        
        const query = {
            where: {},
            include: [{
                model: Products,
                attributes: ["name", "category", "price", "picture", "isSold"] 
            },{
                model: Users,
                attributes: ["name", "city", "picture"]
            }]
        };

        if (id) {
            query.where = { ...query.where, owner_id: id }
        }

        if (isAccepted) {
            query.where = { ...query.where, isAccepted }
        }

        if (isRejected) {
            query.where = { ...query.where, isRejected }
        }

        const getTransactionByOwnerId = await Transactions.findAll(query);

        return getTransactionByOwnerId;
    };

    // ------------------------- End Handle Get Transaction By Owner Id (Repository) ------------------------- //


    
    // ------------------------- Handle Update Transaction By Id (Repository) ------------------------- //

    static async handleUpdateTransactionById({
        id, 
        user_id,
        isAccepted, 
        isRejected ,
        isOpened
    }){

        const updatedTransaction = await Transactions.update({
            isAccepted, 
            isRejected,
            isOpened 
        }, {
            where: { id },
        });

        return updatedTransaction;
    }

    // ------------------------- End Handle Update Transaction By Id (Repository) ------------------------- //


    // ------------------------- Handle Get Transaction Notification (Repository) ------------------------- //
    
    static async handleGetTransactionNotification({ id, user_id }){

        const query = {
            where: {},
            include: [{
                model: Products,
                attributes: ["name", "category", "price", "picture", "isSold"] 
            },{
                model: Users,
                attributes: ["name", "city", "picture"]
            }]
        };

        if (id) {
            query.where = {
                ...query.where,
                [Op.or]: [{ owner_id: { [Op.eq]: id } }, { user_id: { [Op.eq]: id } }]
            }
        }

        const getTransactionNotification = await Transactions.findAll(query);

        return getTransactionNotification;

    }
    
    // ------------------------- End Handle Get Transaction Notification (Repository) ------------------------- //
};

module.exports = TransactionRepository;