// server/server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
 
import { connectDB} from './config/database.js';

// Importando Rotas
import taskRoutes from './routes/taskRoutes.js'; 

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


// Rota raiz
app.get('/', (req, res) => {
    res.send('API do Sistema de Agendamentos Online');
  });


  // Usar as rotas
app.use('/api/tasks', taskRoutes);

// Rota coringa: deve ser a **última**
app.use((req, res) => {
  res.status(404).json({
    erro: 'Rota não encontrada',
    caminho: req.originalUrl
  });
});
  
connectDB();


app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});