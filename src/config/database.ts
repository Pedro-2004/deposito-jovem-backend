// Importa a classe Pool do pg para gerenciar conexões com o PostgreSQL
import { Pool } from 'pg';

// Carrega as variáveis do arquivo .env para process.env
import 'dotenv/config';

// Cria uma instância do Pool com as configurações de acesso ao banco
const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Disponibiliza a mesma instância do Pool para outros arquivos
export default pool;
