const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body;

    const detalhes = await prisma.detalhe.create({
        data: info
    });

    res.status(200).json(detalhes).end();
}

const read = async (req, res) => {
    let detalhes = await prisma.detalhe.findMany({
        select: {
            id: true,
            id_prod: true,
            id_venda:true,
            quantidade: true
        }
    });

    res.status(200).json(detalhes).end();
}

const readId = async (req, res) => {
    let detalhes = await prisma.detalhe.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            id_prod: true,
            id_venda:true,
            quantidade: true
        }
    });
    res.status(200).json(detalhes).end();
}

module.exports = {
    create,
    readId,
    read
}