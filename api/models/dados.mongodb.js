use('hotelpet')

db.cliente.insertOne({
    nome_tutor: "Dafny Ribeiro",
    cpf:"47251787806",
    created_at: new Date() ,
    updated_at : new Date() 
})

use('hotelpet')
db.cliente.find({})

use('hotelpet')
db.pet.insertOne({
    nome : "Bob",
    especie : "cachorro",
    raca : "Lhasa apso",
    datanasc :"10/03/2011",
    sexo:  "M",
    porte : "pequeno",
    observacoes: "Ele está véio",
    peso: 9.0,
    created_at: new Date() ,
    updated_at : new Date() ,
    cpfCliente : '47251787806' 
})

use('hotelpet')
db.pet.find()


use('hotelpet')
db.estadia.insertOne({
     //isso significa que o animal não saiu
     cpf_tutor: "48524893869",
    data_entrada: new Date("9-12-2000"),
    data_saida: new Date("10-12-2000"),

    pet: {
        _id: {
            $oid: "680a99407c66932cae04f79f"
          },
    }
})

const dataAtual = new Date()
use('hotelpet')
db.estadia.find({
    $or: [
        {
          data_entrada: { $gte: dataAtual},
          data_saida: { $lte: dataAtual }
        },
    ]
})

use('hotelpet')
db.cliente.findOne({cpfCliente:'47251787806'})

