const jf = require('jsonfile')

const getPermissionsJSON = () => {
    return new Promise((resolve, reject) => {
        jf.readFile(__dirname + "/../jsonDATA/permissions.json", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const setPermissionsJSON = (obj) => {
    return new Promise((resolve, reject) => {
        jf.writeFile(__dirname + "/../jsonDATA/permissions.json", obj, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("Users JSONfile updated successfully!");
            }
        })
    })
}

// setPermissionsJSON(    
//     {
//         "id": "2",
//         "permissions": ["View Subscriptions", "Create Subscriptions", "Delete Subscriptions", "View Movies", "Create Movies", "Delete Movies"]
//     }
// ).then(data => console.log(data)).catch(err => {console.log(err)});

module.exports = {
    getPermissionsJSON,
    setPermissionsJSON
}