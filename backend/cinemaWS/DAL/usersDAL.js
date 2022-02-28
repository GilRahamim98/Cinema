const jf = require('jsonfile')

const getUserJSON = () => {
    return new Promise((resolve, reject) => {
        jf.readFile(__dirname + "/../jsonDATA/users.json", (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

const setUserJSON = (obj) => {
    return new Promise((resolve, reject) => {
        jf.writeFile(__dirname + "/../jsonDATA/users.json", obj, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve("Users JSONfile updated successfully!");
            }
        })
    })
}

// setUserJSON(    {
//     "id": "33",
//     "firstName": "33",
//     "lastName": "33",
//     "createdDate":"31.1.2022",
//     "sessionTimeOut": "60"
// }).then(data => console.log(data)).catch(err => {console.log(err)});

module.exports = {
    getUserJSON,
    setUserJSON
}