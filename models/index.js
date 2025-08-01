const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("your_db_name", "your_db_user", "your_db_password", {
  host: "localhost",
  dialect: "postgres",
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models
db.User = require("./user.model")(sequelize, DataTypes);
db.Category = require("./category.model")(sequelize, DataTypes);
db.Product = require("./product.model")(sequelize, DataTypes);
db.Order = require("./order.model")(sequelize, DataTypes);
db.OrderItem = require("./orderItem.model")(sequelize, DataTypes);

// Define relations
db.Category.hasMany(db.Product);
db.Product.belongsTo(db.Category);

db.User.hasMany(db.Order);
db.Order.belongsTo(db.User);

db.Order.hasMany(db.OrderItem);
db.OrderItem.belongsTo(db.Order);

db.Product.hasMany(db.OrderItem);
db.OrderItem.belongsTo(db.Product);

module.exports = db;
