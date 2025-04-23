

export const postClient = async (req, res) => {
    const db = req.app.locals.db;

    const novoPet = req.body; // pegando os dados do corpo da requisição

    await db.collection('client').insertOne(novoPet); // inserindo na collection
    res.status(201).json({ mensagem: 'Tutor cadastrado com sucesso!' }); // resposta
};


//Delete Client
export const deleteClient = async (req, res) => {
    const db = req.app.locals.db;
    const id = req.params.id;

    try {
        const resultado = await db.collection('client').deleteOne({ id: id });

        if (resultado.deletedCount === 0) {
            return res.status(404).json({ mensagem: 'Tutor não encontrado.' });
        }

        res.status(200).json({ mensagem: 'Tutor deletado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao deletar o tutor.', erro });
    }
};
