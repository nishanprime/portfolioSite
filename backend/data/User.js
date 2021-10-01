import bcrypt from "bcryptjs";
const users = [
  {
    email: "thapanishan9@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    name: "Nishan Thapa",
    isAdmin: true,
  },
];

export default users;
