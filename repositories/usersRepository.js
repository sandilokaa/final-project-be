const { Users, Products } = require("../models");

class UsersRepository {


    // ------------------------- Handle Get All Users ------------------------- //

    static async handleGetAllUsers(){
        const handleGetAllUsers = await Users.findAll();

        return handleGetAllUsers;
    };

    // ------------------------- End Handle Get All Users ------------------------- //


    // ------------------------- End Handle Get User By Id ------------------------- //

    static async handleGetUserById({ id }){
        const handleGetUserById = await Users.findOne({
            where: { id }
        });

        return handleGetUserById;
    }

    // ------------------------- End Handle Get User By Id ------------------------- //



    // ------------------------- Get User By Email  ------------------------- //

    static async getUserByEmail({ email }) {
        const getUser = await Users.findOne({
            where: {
                email: email
            }
        });

        return getUser;
    };

    // ------------------------- End Get User By Email  ------------------------- //


    // ------------------------- Register User  ------------------------- //
    
    static async createNewUser({ name, email, password }) {
        const createdUser = Users.create({
            name,
            email,
            password
        });

        return createdUser;
    };
    
    // ------------------------- End Register User  ------------------------- //


    
    // ------------------------- Update User (Complete Account Info)  ------------------------- //
    
    static async handleUpdateUsers({ id, name, city, address, phoneNumber, picture }) {

        const updatedUser = await Users.update({
            name,
            city,
            address,
            phoneNumber,
            picture,
        }, {
            where: { id },
        });

        return updatedUser;
        
    };

    // ------------------------- End Update User (Complete Account Info)  ------------------------- //


    // ------------------------- Handle Delete Users ------------------------- //

    static async handleDeleteUsers({ id }) {
        
        const deletedUsers = await Users.destroy({ where: { id } });

        return deletedUsers;
    }

    // ------------------------- End Handle Delete Users ------------------------- //


    
    // ------------------------- Handle Get Product By User Id ------------------------- //

    static async handleGetProductByUserId({ id, isSold }){

        const query = {
            where: {}
        }

        if (id) {
            query.where = { ...query.where, user_id: id }
        }

        if (isSold) {
            query.where = { ...query.where, isSold }
        }

        const handleGetProductByUserId = await Products.findAll(query);

        return handleGetProductByUserId;
    }

    // ------------------------- End Handle Get Product By User Id ------------------------- //
};

module.exports = UsersRepository;