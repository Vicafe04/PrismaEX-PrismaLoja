const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body;

    const produtos = await prisma.produtos.create({
        data: info
    });

    res.status(200).json(produtos).end();
}

const read = async (req, res) => {
    let produtos = await prisma.produtos.findMany();

    res.status(200).json(produtos).end();
}

module.exports = {
    create,
    read
}