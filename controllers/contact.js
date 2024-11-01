const ContactModel = require('../models/contact');

module.exports.list = async function (req, res, next) {
    try {
        const list = await ContactModel.find();
        return res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

module.exports.create = async function (req, res, next) {
    try {
        const contact = new ContactModel(req.body);
        await ContactModel.create(contact);
        return res.json({ success: true, message: 'Contact created.' });
    } catch (error) {
        console.log(error);
        next(error);
    };
};

module.exports.getByID = async function (req, res, next) {
    try {
        const id = req.params.id;
        const contact = await ContactModel.findById(id);
        return res.json(contact);
    } catch (error) {
        console.log(error);
        next(error);
    };
};

module.exports.update = async function (req, res, next) {
    try {
        const id = req.params.id;

        const contact = new ContactModel(req.body);
        contact._id = id;

        const result = await ContactModel.updateOne({ _id: id }, updateContact);

        if (result.modifiedCount > 0) {
            res.json(
                { success: true, message: 'Contact updated.' }
            );
        } else {
            throw new Error('Contact not updated.');
        }
    } catch (error) {
        console.log(error);
        next(error);
    };
};

module.exports.remove = async function (req, res, next) {
    try {
        const id = req.params.id;

        const result = await ContactModel.findByIdAndDelete(id);
        if (result) {
            return res.status(404).json(
                { success: true, message: 'Contact deleted.' }
            );
        } else {
            throw new Error('Contact not deleted.');
        };
    } catch (error) {
        console.log(error);
        next(error);
    };
};