module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    order_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    total_amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
  });
  return Order;
};
