const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body;

    const setores = await prisma.setor.create({
        data: info
    });

    res.status(200).json(setores).end();
}

const read = async (req, res) => {
    let setores = await prisma.setor.findMany({
        select: {
            id: true,
            nome: true,
            comissao: true,
            vendedor: {
                select: {
                    nome:true
                }
            },
            produtos: {
                select: {
                    nome: true,
                    valor: true
                }
            }
        }
    });

    res.status(200).json(setores).end();
}

const readId = async (req, res) => {
    let setores = await prisma.setor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            comissao: true,
            vendedor: {
                select: {
                    nome: true
                }
            },
            produtos: {
                select: {
                    nome: true,
                    valor: true,
                    setorId: true
                }
            }
        }
    });
    res.status(200).json(setores).end();
}

module.exports = {
    create,
    readId,
    read
}