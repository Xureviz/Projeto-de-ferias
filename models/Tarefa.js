const db = require('./db')

const Tarefa = db.sequelize.define('tarefas', {
    titulo: {
        type: db.Sequelize.STRING
    },
    comentario: {
        type: db.Sequelize.STRING
    }
})

module.exports = Tarefa