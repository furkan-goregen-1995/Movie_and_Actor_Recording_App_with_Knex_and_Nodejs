module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "aktorler",
            user:"admin",
            password:"admin"
        },
        migration:{
            directory: "./migrations"
        },
        seeds: {
            directory:"./seeds"
        } 
    }
}