import { ObjectId } from 'mongodb';

export const getAgendas = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const { cpf_tutor, data_entrada, data_saida } = req.query;

    if (!cpf_tutor && (!data_entrada || !data_saida)) {
      return res.status(400).json({ mensagem: 'Informe o CPF ou o intervalo de datas para consulta.' });
    }

    const filtros = [];

    if (data_entrada && data_saida) {
      filtros.push({
        data_entrada: { $gte: new Date(data_entrada) },
        data_saida: { $lte: new Date(data_saida) }
      });
    }
    if (cpf_tutor) {
      filtros.push({ cpf_tutor });
    }

    const agendas = await db.collection('estadia')
    .find({ $or: filtros })
    .toArray();

  res.status(200).json(agendas);

} catch (error) {
  console.error('Erro ao buscar agendas:', error.message, error.stack);
  res.status(500).json({ mensagem: 'Erro ao buscar agendas.' });
}
};

export const getAgendaById = async (req, res) => {
  const db = req.app.locals.db;
  const id = req.params.id;

  try {
    const agenda = await db.collection('agenda').findOne({ _id: new ObjectId(id) });

    if (!agenda) {
      return res.status(404).json({ mensagem: 'Agenda não encontrada.' });
    }

    res.status(200).json(agenda);
  } catch (error) {
    console.error('Erro ao buscar agenda por ID:', error);
    res.status(500).json({ mensagem: 'Erro ao buscar agenda por ID.' });
  }
};

export async function PostEstadia(req, res) {
  try {
    const db = req.app.locals.db;
    const {cpf_tutor, nome_pet, data_entrada, data_saida, id_pet } = req.body;

    const existePet = await db.collection('pet').find({_id: new ObjectId(id_pet)});
        if(!existePet && !id_pet){
            return res.status(404).json({
                error: true,
                message: "Pet not found"
            })
        }

    const novaEstadia = {
      
      cpf_tutor,
      nome_pet,
      data_entrada,
      data_saida,
      created_at: new Date(),
      updated_at: new Date()
    };
    const resultado = await db.collection('estadia').insertOne(novaEstadia);

    res.status(201).json({
      mensagem: "Estadia cadastrada com sucesso!",
    });

  } catch (error) {
    console.error("Erro ao cadastrar estadia:", error);
    res.status(500).json({ mensagem: "Erro interno no servidor." });
  }
};

export const putEstadia = async (req, res) => {
  const db = req.app.locals.db;
  const id = req.params.id; // pegando o ID
  const {nome_cliente, cpf_tutor, nome_pet, data_entrada, data_saida, id_pet} = req.body;
  const novosDadosEstadia ={
      id_pet,
      nome_pet,
      data_entrada,
      data_saida,
      updated_at : new Date(),
  }
  
  const result = await db.collection('estadia').updateOne(
      { _id: new ObjectId (id) }, // procurando o pet pelo campo "id"
      { $set: novosDadosEstadia } // atualizando os dados
  );
  if(result.updateCount === 0){
      return res.status(404).json({ mensagem: 'Estadia não encontrado.' });
  }
  res.status(200).json({ mensagem: 'Estadia atualizada com sucesso!' });
};

