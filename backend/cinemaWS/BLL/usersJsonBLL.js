const UsersDAL = require("../DAL/usersDAL");

const getUsers = async () => {
  const data = await UsersDAL.getUserJSON();
  return data;
};

const getUserById = async (id) => {
  const data = await UsersDAL.getUserJSON();
  const usersArray = data;
  const user = usersArray.find((user) => user.id === id);
  return user;
};

const createUser = async (obj) => {
  const data = await UsersDAL.getUserJSON();
  const usersArray = data;
  usersArray.push(obj);
  const res = await UsersDAL.setUserJSON(data);
  return res.id;
};

const updateUser = async (id, obj) => {
  const data = await UsersDAL.getUserJSON();
  const usersArray = data;
  const userElem = usersArray.find((user) => user.id === id);
  if (userElem) {
      userElem.firstName = obj.firstName;
      userElem.lastName = obj.lastName;
      userElem.sessionTimeOut = obj.sessionTimeOut;
    const res = await UsersDAL.setUserJSON(data);
    return res;
  } else {
    return "No such id...";
  }
};


const deleteUser = async (id) => {
  const data = await UsersDAL.getUserJSON();
  const usersArray = data;
  const index = usersArray.findIndex((user) => user.id === id); 
  if (index >= 0) {
    usersArray.splice(index, 1);
    const res = await UsersDAL.setUserJSON(data);
    return res;
  } else {
    const res = "No such user..";
    return res;
  }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
