const config = {
  port: Number(process.env.PORT) || 3001,
  db: {
    client: process.env.DB_CLIENT,
    connection: {
      connectionString: process.env.DATABASE_URL,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: process.env.DB_PASSWORD,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
    },
  },
}

export default config
