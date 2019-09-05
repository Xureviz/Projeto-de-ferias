const Sequelize = require('sequelize')

const sequelize = new Sequelize('orlando', 'artur', 'windsf98',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}