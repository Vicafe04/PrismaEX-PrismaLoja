const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body;

    const vendas = await prisma.vendas.create({
        data: info
    });

    res.status(200).json(vendas).end();
}

const read = async (req, res) => {
    let vendas = await prisma.vendas.findMany({
        select: {
            id: true,
            data: true,
            Detalhe:{
                select: {
                    id_prod: true,
                    quantidade: true
                }
            }
        }
    });

    res.status(200).json(vendas).end();
}

const readId = async (req, res) => {
    let vendas = await prisma.vendas.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id: true,
            data: true,
            Detalhe:{
                select: {
                    id_prod: true,
                    quantidade: true
                }
            }
        }
    });
    res.status(200).json(vendas).end();
}

module.exports = {
    create,
    readId,
    read
}