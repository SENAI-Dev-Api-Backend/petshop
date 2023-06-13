module.export = (sequelize, Sequelize) => {
    const user = sequelize.define('user', {
        name: {
            type: Sequelize.STRING,
        },
        birth_date: {
            type: Sequelize.INTEGER,
        },
        cpf: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        cpf: {
            type: Sequelize.STRING,
        },
    })
}

return user;