const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body;

    const vendedores = await prisma.vendedor.create({
        data: info
    });

    res.status(200).json(vendedores).end();
}

const read = async (req, res) => {
    let vendedores = await prisma.vendedor.findMany();

    res.status(200).json(vendedores).end();
}

const readId = async (req, res) => {
    let vendedores = await prisma.vendedor.findMany({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            salario: true,
            setor: {
                select: {
                    nome: true,
                    comissao: true
                }
            }
        }
    });

    res.status(200).json(vendedores).end();
}

module.exports = {
    create,
    readId,
    read
}