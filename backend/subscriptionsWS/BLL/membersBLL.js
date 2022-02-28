const Members = require('../models/membersModel');
const loadMembers = require('../DAL/membersLoad')


// USED  ONLY ON THE FIRST RUN
 const loadFirstTime = async() => {
    const members = await loadMembers()
     members.forEach(async(member) => {
         await createMembers(member).then(data => console.log(data)).catch(err => console.log(err));
     });
 }
//loadFirstTime()

//Get All members
const getAllMembers = () => {
    return new Promise ((resolve, reject) => {
        Members.find({}, (err, cars) => {
            if(err) {
                reject(err);
            }else {
                resolve(cars)
            }
        });
    });
};

//Get by ID
const getMemberByID = (id) => {
    return new Promise ((resolve, reject) => {
        Members.findById(id, (err, member) => {
            if(err) {
                reject(err);
            }else {
                resolve(member)
            }
        });
    });
}



//Create Member
const createMembers = (obj) => {
    console.log(obj);
    return new Promise ((reject, resolve) => {
        const newMember = new Members(obj);
        newMember.save((err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Member Created Successfully");
            };
        });
    });
}



// Update Memeber
const updateMember = (id, obj) => {
    return new Promise ((resolve, reject) => {
        Members.findByIdAndUpdate(id, obj, (err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Updated Succsessfully")
            }
        });
    });
};

// Delete Member
const deleteMember = (id) => {
    return new Promise ((resolve, reject) => {
        Members.findByIdAndDelete(id, (err) => {
            if(err) {
                reject(err);
            }else {
                resolve("Deleted Successfully");
            };
        });
    });
};

module.exports = {
    createMembers,
    getAllMembers,
    getMemberByID,
    deleteMember,
    updateMember
}