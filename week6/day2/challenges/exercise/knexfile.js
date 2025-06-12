export default {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'postgres',
      password: 'admin',
      database: 'user_management'
    },
    migrations: {
      directory: './server/migrations'
    }
  }
};