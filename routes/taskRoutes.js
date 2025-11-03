import express from 'express';
import {
  listarTasks,
  criarTask,
  obterTask,
  atualizarTask,
  deletarTask
} from '../controllers/TaskController.js';

const router = express.Router();


// localhost:3000/api/agendamentos/listaId/id

router.get('/', listarTasks);
router.get('/:id', obterTask);
router.post('/', criarTask);
router.put('/:id', atualizarTask);
router.delete('/:id', deletarTask);

// Rota inválida dentro de /agendamento/*
router.use((req, res) => {
  res.status(404).json({
    erro: 'Subrota de /task não encontrada',
    caminho: req.originalUrl
  });
});


export default router;
