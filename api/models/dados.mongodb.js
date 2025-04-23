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
    horario_entrada: new Date(),
    horario_saida: null, //isso significa que o animal não saiu
    pet: {
        _id: {
            $oid: "68014f9a34b0168be07b585e"
          },
    }
})

use('hotelpet')
db.estadia.find()


