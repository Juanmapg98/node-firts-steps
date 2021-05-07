const Model = require("./model");

let addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};

let getUsers = async (filterUser) => {
  let filter = {};
  if (filterUser != null) {
    fiter = { user: filterUser };
  }
  const users = await Model.find(filter);
  return users;
};

module.exports = {
  add: addUser,
  list: getUsers,
};
