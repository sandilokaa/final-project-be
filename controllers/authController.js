const authService = require("../services/authService");

// ------------------------- Auth Register ------------------------- //

const handleRegister = async (req, res) => {
    const { name, email, password } = req.body;

    const { status, status_code, message, data} = await authService.handleRegister({
        name,
        email,
        password,
    });

    res.status(status_code).send({
        status: status,
        message: message,
        data: data,
    });
};

// ------------------------- End Auth Register ------------------------- //

// ------------------------- Auth Login ------------------------- //

const handleLogin = async (req, res) => {
    const {email, password} = req.body;

    const {status, status_code, message, data} = await authService.handleLogin({
        email,
        password,
    });

    res.status(status_code).send({
        status : status,
        message: message,
        data : data,
    });
};

// ------------------------- End Auth Login ------------------------- //


// ------------------------- Auth Current User ------------------------- //

const handleCurrentUser = async (req, res) => {
    
    const currentUser = req.user;

    res.status(200).send({
        status: true,
        message: "Get current user success.",
        data: {
            user: currentUser,
        },
    });
}

// ------------------------- End Auth Current User ------------------------- //


module.exports = { handleRegister, handleLogin, handleCurrentUser };