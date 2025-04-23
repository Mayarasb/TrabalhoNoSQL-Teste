import { ObjectId } from 'mongodb';

export const getAgendas = async (req, res) => {
  const db = req.app.locals.db;

  try {
    const agendas = await db.collection('agenda')
      .find({})
      .toArray();

    res.status(200).json(agendas);
  } catch (error) {
    console.error('Erro ao buscar agendas:', error);
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

export async function createEstadia(req, res) {
  try {
    const db = req.app.locals.db; 
    const { nome_cliente, cpf_tutor, nome_pet, data_entrada, hora_entrada, data_saida } = req.body;

    if (!nome_cliente || !cpf_tutor || !nome_pet || !data_entrada) {
      return res.status(400).json({ mensagem: "Campos obrigatórios faltando!" });
    }
    
    const novaEstadia = {
      nomeCliente: nome_cliente,
      cpfTutor: cpf_tutor,
      nomePet: nome_pet,
      dataEntrada: data_entrada,
      dataSaida: data_saida || null,
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
