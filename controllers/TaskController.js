import Task from '../models/Task.js';

// const tasks = [
//   { id: 1, title: 'limpar casa', description: 'Descricao aleatoria', dueDate: '2023-11-10', status: "pendente" },
//   { id: 2, title: 'chupetinha', description: 'Descricao aleatoria', dueDate: '2024-11-10', status: "andamento" },
//   { id: 3, title: 'dormir', description: 'Descricao aleatoria', dueDate: '2023-11-10', status: "concluida" },
// ];

export const listarTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

export const criarTask = async (req, res) => {
  const { title, description, dueDate, status } = req.body;
  const novo = new Task({ title, description, dueDate, status });
  await novo.save();
  res.status(201).send(`Dados Salvos com sucesso => Titulo: ${title}, Descricao:${description}`);
};

export const obterTask = async (req, res) => {
  const ag = await Task.findById(req.params.id);
  if (!ag) return res.status(404).json({ erro: 'Task não encontrado' });
  res.json(ag);

  // console.log(req.params);
  // res.send("Obtendo...");
};

export const atualizarTask = async (req, res) => {
  const {  title, description, dueDate, status  } = req.body;
  const ag = await Task.findByIdAndUpdate(req.params.id, {  title, description, dueDate, status  }, { new: true });
  res.json(ag);
};

export const deletarTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).end();
};

