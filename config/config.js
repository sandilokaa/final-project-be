require("dotenv").config();

module.exports = {
  development: {
    username: "gvpxinhauispgg",
    password: "dfd1766d5804c040afa66b10a6c32ff6472630d40b41bd1ad578659b0cd12d0e",
    database: "df92893uidvhsg",
    host: "ec2-3-222-74-92.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    username: "postgres",
    password: "sanlokaja123",
    database: "secondhand_db",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "gvpxinhauispgg",
    password: "dfd1766d5804c040afa66b10a6c32ff6472630d40b41bd1ad578659b0cd12d0e",
    database: "df92893uidvhsg",
    host: "ec2-3-222-74-92.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};