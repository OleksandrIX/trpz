const mongodbConfig = {
    uri: `${process.env.MONGO_CONNECTION_SCHEME}://${process.env.MONGO_HOST}/${process.env.MONGO_DB}`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
};

const mysqlConfig = {
    database: process.env.MYSQL_DB,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    options: {
        dialect: process.env.MYSQL_DIALECT,
        host: process.env.MYSQL_HOST,
        logging: false
    },
};

module.exports = {
    mongodbConfig,
    mysqlConfig,
};

