
export const getPets = async (req, res) => {
    const db = req.app.locals.db; // guardando o banco na variavel db. Todas as operações do banco vão ser usadas atráves de db

    const pets = await db.collection('pet') // collection que estou procurando
    .find({}) // procurando por todos
    .toArray(); // transformando tudo em um Array
    res.status(200).json(pets); // dando o resultado em forma de JSON e dando status 200
}
export const getPetsID = ()=>{

}

//Post Pets
export const postPets = async (req, res) => {
    const db = req.app.locals.db;

    const novoPet = req.body; // pegando os dados do corpo da requisição

    await db.collection('pet').insertOne(novoPet); // inserindo na collection
    res.status(201).json({ mensagem: 'Pet cadastrado com sucesso!' }); // resposta
};


//Post Mayara tinha feito - pode apagar qualquer coisa
export const putPets = async (req, res) => {
    const db = req.app.locals.db;
    const id = req.params.id; // pegando o ID
    const novosDadosPets = req.body; // pegando os novos dados do corpo

    await db.collection('pet').updateOne(
        { id: id }, // procurando o pet pelo campo "id"
        { $set: novosDadosPets } // atualizando os dados
    );

    res.status(200).json({ mensagem: 'Pet atualizado com sucesso!' });
};

// Delete Pets
export const deletePets = async (req, res) => {
    const db = req.app.locals.db;
    const id = req.params.id;

    try {
        const resultado = await db.collection('pet').deleteOne({ id: id });

        if (resultado.deletedCount === 0) {
            return res.status(404).json({ mensagem: 'Pet não encontrado.' });
        }

        res.status(200).json({ mensagem: 'Pet deletado com sucesso!' });
    } catch (erro) {
        res.status(500).json({ mensagem: 'Erro ao deletar o pet.', erro });
    }
};

