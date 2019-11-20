module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn('users', 'role', { type: Sequelize.STRING, allowNull: false, defaultValue: 'COMMON' }),

  down: (queryInterface, _Sequelize) =>
    queryInterface.removeColumn('users', 'role'),
}
