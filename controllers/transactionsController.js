const transactionsService = require("../services/transactionsService");

// ------------------------- Handle Get Transaction By Id (Controller) ------------------------- //

const handleGetTransactionById = async (req, res, next) => {
    const { id } = req.params;

    const { status, status_code, message, data } = await transactionsService.handleGetTransactionById({ id });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

// ------------------------- End Handle Get Transaction By Id (Controller) ------------------------- //


// ------------------------- Handle Create Transaction (Controller) ------------------------- //

const handleCreateTransaction = async (req, res, next) => {

    const { product_id, owner_id, requestedPrice, isAccepted, isRejected, isOpened } = req.body;

    const user_id = req.user.id;

    const { status, status_code, message, data } = await transactionsService.handleCreateTransaction({
        user_id,
        owner_id,
        product_id,
        requestedPrice,
        isAccepted,
        isRejected,
        isOpened
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Handle Create Transaction (Controller) ------------------------- //


// ------------------------- Handle Get Transaction By User Id (Controller) ------------------------- //

const handleGetTransactionByUserId = async (req, res, next) => {

    const { id } = req.params;

    const { isAccepted, isRejected } = req.query;

    const { status, status_code, message, data } = await transactionsService.handleGetTransactionByUserId({ 
        id, 
        isAccepted,
        isRejected 
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });

}

// ------------------------- End Handle Get Transaction By User Id (Controller) ------------------------- //


// -------------------------  Handle Get Transaction By Owner Id (Controller) ------------------------- //

const handleGetTransactionByOwnerId = async (req, res, next) => {
    const { id } = req.params;

    const { isAccepted, isRejected } = req.query;

    const { status, status_code, message, data } = await transactionsService.handleGetTransactionByOwnerId({ 
        id, 
        isAccepted,
        isRejected 
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

// ------------------------- End Handle Get Transaction By Owner Id (Controller) ------------------------- //



// ------------------------- Handle Update Transaction By Id (Controller) ------------------------- //

const handleUpdateTransactionById = async (req, res, next) => {

    const { id } = req.params;

    const { isAccepted, isRejected, isOpened, isSold } = req.body;

    const user_id = req.user.id;

    const { status, status_code, message, data } = await transactionsService.handleUpdateTransactionById({ 
        id, 
        user_id,
        isAccepted, 
        isRejected,
        isOpened,
        isSold 
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}


// ------------------------- End Handle Update Transaction By Id (Controller) ------------------------- //


// ------------------------- Handle Get Transaction Notification  (Controller) ------------------------- //

const handleGetTransactionNotification = async (req, res, next) => {

    const { id } = req.params;
    
    const user_id = req.user.id;

    const { status, status_code, message, data } = await transactionsService.handleGetTransactionNotification({ 
        id, 
        user_id,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
}

// ------------------------- End Handle Get Transaction Notification (Controller) ------------------------- //


module.exports = { 
    handleCreateTransaction, 
    handleGetTransactionByUserId,
    handleGetTransactionByOwnerId,
    handleUpdateTransactionById,
    handleGetTransactionById,
    handleGetTransactionNotification
};