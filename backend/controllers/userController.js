const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const encryptPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

const checkPassword = async (p1, p2) => {
    return await bcrypt.compare(p1, p2)
}

// pl sp tjso meed tp be dpen

exports.registerUser = async (req, res) => {
    try {
        const { email, password, name } = req.body;

        if (!email || !password || !name) {
            return res.json({
                success: false,
                message: "Please fill in all the required fields"
            })
        }

        if (password.length < 6) {
            return res.json({
                success: false,
                message: "Password must be upto 6 characters"
            })
        }

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.json({
                success: false,
                message: "Email has already been registered"
            })
        }

        const user = await User.create({
            name, email, password: await encryptPassword(password),
            phone: "",
            address: "",
            country: "",
            state: ""
        })

        if (user) {
            return res.json({
                success: true,
                message: "Registration successful",
                data: {
                    id: user._id,
                    name: name,
                    email: email
                }
            })
        } else {
            return res.json({
                success: false,
                message: "Invalid user data"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                success: false,
                message: "Please fill in all the required fields"
            })
        }

        const userExists = await User.findOne({ email })

        if (userExists) {
            if (await checkPassword(password, userExists.password)) {
                return res.json({
                    success: true,
                    message: "Login successful",
                    data: {
                        id: userExists._id,
                        name: userExists.name,
                        email: userExists.email
                    }
                })
            } else {
                return res.json({
                    success: false,
                    message: "Invalid credentials"
                })
            }
        } else {
            return res.json({
                success: false,
                message: "Invalid credentials"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

exports.updateUser = async (req, res) => {
    try {

        const user = await User.findById(req.body.id)

        console.log(req.body);

        if (user) {
            user.name = req.body.name
            user.phone = req.body.phone
            user.address = req.body.address
            user.state = req.body.state
            user.country = req.body.country

            const updatedUser = await user.save()

            if (updatedUser) {
                return res.json({
                    success: true,
                    message: "User updated successfully"
                })
            } else {
                return res.json({
                    success: false,
                    message: "Some error occured"
                })
            }

        } else {
            return res.json({
                success: false,
                message: "User does not exist"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

exports.getUser = async (req, res) => {
    try {

        const user = await User.findById(req.body.id)

        if (user) {

            return res.json({
                success: true,
                data: {
                    name: user.name,
                    email: user.email,
                    address: user.address,
                    phone: user.phone,
                    country: user.country,
                    state:user.state
                }
            })
        } else {
            return res.json({
                success: false
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}