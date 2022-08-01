const productsService = require("../services/productsService");

// ------------------------- Handle Get All Product (Controller) ------------------------- //

const handleGetAllProducts = async (req, res, next) => {

    const { name, category, isPublish, isSold } = req.query;

    const { status, status_code, message, data } = await productsService.handleGetAllProducts({
        name, 
        category, 
        isPublish, 
        isSold
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

// ------------------------- End Handle Get All Product (Controller) ------------------------- //



// ------------------------- Handle Get Product By Id (Controller) ------------------------- //

const handleGetProductById = async (req, res, next) => {

    const { id } = req.params;

    const { status, status_code, message, data } = await productsService.handleGetProductById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Get Product By Id (Controller) ------------------------- //



// ------------------------- Handle Create Product (Controller) ------------------------- //

const handleCreateProduct = async (req, res, next) => {

    const {
        name,
        price,
        category,
        description,
        isPublish,
        isSold
    } = req.body;

    const user_id = req.user.id;

    const { status, status_code, message, data } = await productsService.handleCreateProduct({
        user_id,
        name,
        price,
        category,
        description,
        picture: req.files,
        isPublish,
        isSold
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

// ------------------------- End Handle Create Product (Controller) ------------------------- //


// ------------------------- Handle Update Product (Controller) ------------------------- //

const handleUpdateProductById = async (req,res, next) => {
    const {name, price, category, description, isPublish, isSold} = req.body;
    
    const {id} = req.params;

    const user_id = req.user.id;

    const {status, status_code, message, data} = await productsService.handleUpdateProductById({
        id,
        user_id,
        name,
        price,
        category,
        description,
        picture: req.files,
        isPublish,
        isSold
    });

    res.status(status_code).send({
        status : status,
        message: message,
        data : data,
    });
};

// ------------------------- End Handle Update Product (Controller) ------------------------- //


// ------------------------- Handle Delete Product (Controller) ------------------------- //

const handleDeleteProductById = async (req,res, next) => {
    const {id} = req.params;

    const user_id = req.user.id;

    const {status, status_code, message, data} = await productsService.handleDeleteProductById({
        id,
        user_id,
    });

    res.status(status_code).send({
        status : status,
        message: message,
        data : data,
    });
};

// ------------------------- End Handle Update Product (Controller) ------------------------- //


module.exports = { 
    handleCreateProduct, 
    handleGetAllProducts, 
    handleGetProductById, 
    handleUpdateProductById, 
    handleDeleteProductById
};