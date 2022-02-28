const Subscriptions = require('../models/subscriptionsModel');

//Get All Subs
const getAllSub = () => {
    return new Promise ((resolve, reject) => {
        Subscriptions.find({}, (err, cars) => {
            if(err) {
                reject(err);
            }else {
                resolve(cars)
            }
        });
    });
};

//Get by ID
const getSubByID = (id) => {
    return new Promise ((resolve, reject) => {
        Subscriptions.findById(id, (err, sub) => {
            if(err) {
                reject(err);
            }else {
                resolve(sub)
            }
        });
    });
}

//Create Sub
const createSub = (obj) => {
    return new Promise ((reject, resolve) => {
        const newSub = new Subscriptions(obj);
        newSub.save((err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Subscriptions Created Successfully");
            };
        });
    });
}

// Update Sub
const updateSub = (id, obj) => {
    return new Promise ((resolve, reject) => {
        Subscriptions.findByIdAndUpdate(id, obj, (err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Updated Succsessfully")
            }
        });
    });
};

// Delete sub
const deleteSub = (id) => {
    return new Promise ((resolve, reject) => {
        Subscriptions.findByIdAndDelete(id, (err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Deleted Successfully");
            };
        });
    });
};

module.exports = {
    getAllSub,
    getSubByID,
    createSub,
    updateSub,
    deleteSub
}