const Axios = require("axios");

const loadMember = async () => {
  const { data } = await Axios("https://jsonplaceholder.typicode.com/users");
  const members = data.map((member) => {
    return {
      name: member.name,
      email: member.email,
      city: member.address.city,
    };
  });
  return members;
};

module.exports = loadMember;
