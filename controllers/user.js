const UserModel = require('../models/user');

module.exports.list = async function (req, res, next) {
    try {
        const list = await UserModel.find().select('-password');
        return res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

module.exports.getById = async function (req, res, next) {
    try {
        const id = req.params.id;
        const user = await UserModel.findById(id).select('-password');
        return res.json(user);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

module.exports.create = async function (req, res, next) {
    try {
        const user = new UserModel(req.body);

        const result = await UserModel.create(user);
        return res.json({
            success: true,
            message: 'User created successfully.'
        }
        );
    } catch (error) {
        console.log(error);
        next(error);
    };
};

module.exports.update = async function (req, res, next) {
    try {
        const id = req.params.id;

        const user = new UserModel(req.body);
        user._id = id;

        const result = await UserModel.updateOne({ _id: id }, updateUser);

        if (result.modifiedCount > 0) {
            return res.json(
                { success: true, message: 'User updated.' }
            );
        } else {
            throw new Error('User not updated.')
        }
    } catch (error) {
        console.log(error);
        next(error);
    };
};

module.exports.delete = async function (req, res, next) {
    try {
        const id = req.params.id;

        const result = await UserModel.findByIdAndDelete(id);
        if (result) {
            return res.status(404).json(
                { success: true, message: 'User deleted.' }
            );
        } else {
            throw new Error('User not deleted.')
        }
    } catch (error) {
        console.log(error);
        next(error);
    };
};