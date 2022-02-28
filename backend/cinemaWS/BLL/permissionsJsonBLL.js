const PermissionsDAL = require("../DAL/permissionsDAL");

const getPermissions = async () => {
  const data = await PermissionsDAL.getPermissionsJSON();
  return data;
};

const getPermissonsById = async (id) => {
  const data = await PermissionsDAL.getPermissionsJSON();
  const permissionsArray = data;
  const permission = permissionsArray.find((permission) => permission.id === id);
  return permission;
};

const createPermission = async (obj) => {
  const data = await PermissionsDAL.getPermissionsJSON();
  const permissionsArray = data;
  permissionsArray.push(obj);
  const res = await PermissionsDAL.setPermissionsJSON(data);
  return res;
};

const updatePermission = async (id, obj) => {
  const data = await PermissionsDAL.getPermissionsJSON();
  const permissionsArray = data;
  const permmisionElem = permissionsArray.find((permmision) => permmision.id === id);
  if (permmisionElem) {
      permmisionElem.permissions = obj.permissions;
    const res = await PermissionsDAL.setPermissionsJSON(data);
    return res;
  } else {
    return "No such id...";
  }
};


const deletePermission = async (id) => {
  const data = await PermissionsDAL.getPermissionsJSON();
  const permissionsArray = data;
  const index = permissionsArray.findIndex((permission) => permission.id === id); 
  if (index >= 0) {
    permissionsArray.splice(index, 1);
    const res = await PermissionsDAL.setPermissionsJSON(data);
    return res;
  } else {
    const res = "No such user..";
    return res;
  }
};

module.exports = {
    getPermissions,
    getPermissonsById,
    createPermission,
    updatePermission,
    deletePermission
};
