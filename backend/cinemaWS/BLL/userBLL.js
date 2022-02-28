const User = require ('../models/userModel')

//Get All User
const getAllUser = () => {
    return new Promise ((resolve, reject) => {
        User.find({}, (err, cars) => {
            if(err) {
                reject(err);
            }else {
                resolve(cars)
            }
        });
    });
};

//Get User by ID
const getUserByID = (id) => {
    return new Promise ((resolve, reject) => {
        User.findById(id, (err, movie) => {
            if(err) {
                reject(err);
            }else {
                resolve(movie)
            }
        });
    });
}

//Create User
const createUser = (obj) => {
    return new Promise ((reject, resolve) => {
        const newUser = new User(obj);
        newUser.save((res, err) => {
            if(err) {
                reject(err);
            }else {
                // resolve("User Created Successfully");
                resolve(newUser._id);
            };
        });
    });
}

// Update User
const updateUser = (id, obj) => {
    return new Promise ((resolve, reject) => {
        User.findByIdAndUpdate(id, obj, (err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Updated Succsessfully")
            }
        });
    });
};

// Delete User
const deleteUser = (id) => {
    return new Promise ((resolve, reject) => {
        User.findByIdAndDelete(id, (err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Deleted Successfully");
            };
        });
    });
};

module.exports = {
    getAllUser,
    getUserByID,
    createUser,
    updateUser,
    deleteUser
}