const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const uploadPicture = require("./utils/fileUpload");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// ------------------------- Public File Access ------------------------- //

app.use("/public/files", express.static(path.join(__dirname, "/storages")));

// ------------------------- End Public File Access ------------------------- //



// ------------------------- Import Controllers ------------------------- //

const authController = require("./controllers/authController");

const usersController = require("./controllers/usersController");

const productsController = require("./controllers/productsController");

const transactionsController = require("./controllers/transactionsController");
// ------------------------- End Import Controllers ------------------------- //



// ------------------------- Import middlewares ------------------------- //
const middleware = require("./middlewares/auth");
// ------------------------- End Import middlewares ------------------------- //



// ------------------------- Define Routes ------------------------- //

// ------------------------- Auth ------------------------- //

app.post("/v1/auth/register", authController.handleRegister);
app.post("/v1/auth/login", authController.handleLogin);
app.get("/v1/auth/me", middleware.authenticate, authController.handleCurrentUser);

// ------------------------- End Auth ------------------------- //


// ------------------------- User Behavior (complete account info) ------------------------- //

app.get("/v1/users", usersController.handleGetAllUsers);
app.get("/v1/users/:id", usersController.handleGetUserById);
app.put("/v1/users/update/:id", middleware.authenticate, uploadPicture.single("picture"), usersController.handleUpdateUsers);
app.put("/v1/users/delete/:id", middleware.authenticate, usersController.handleDeleteUsers);
app.get("/v1/users/:id/products", middleware.authenticate, usersController.handleGetProductByUserId);

// ------------------------- End User Behavior ------------------------- //



// ------------------------- Product System ------------------------- //

app.get("/v1/products/search", productsController.handleGetAllProducts);
app.post("/v1/products/create", middleware.authenticate, uploadPicture.fields([{name: "picture"}]), productsController.handleCreateProduct);
app.get("/v1/products/:id", middleware.authenticate, productsController.handleGetProductById);
app.put("/v1/products/update/:id", middleware.authenticate, uploadPicture.fields([{name: "picture"}]), productsController.handleUpdateProductById);
app.delete("/v1/products/delete/:id", middleware.authenticate, productsController.handleDeleteProductById);

// ------------------------- End Product System ------------------------- //


// ------------------------- Transaction System ------------------------- //

app.post("/v1/transactions/create", middleware.authenticate, transactionsController.handleCreateTransaction);
app.get("/v1/transactions/user/:id", middleware.authenticate, transactionsController.handleGetTransactionByUserId);
app.get("/v1/transactions/owner/:id", middleware.authenticate, transactionsController.handleGetTransactionByOwnerId);
app.put("/v1/transactions/update/:id", middleware.authenticate, transactionsController.handleUpdateTransactionById);
app.get("/v1/transactions/:id", middleware.authenticate, transactionsController.handleGetTransactionById);
app.get("/v1/transactions/notification/:id", middleware.authenticate, transactionsController.handleGetTransactionNotification);

// ------------------------- End Transaction System ------------------------- //

app.listen(process.env.PORT || 2000, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${process.env.PORT || 2000}`);
});