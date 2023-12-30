const { prisma } = require('../prisma/prisma-client');

const profileAdd = async (req, res) => {
    try {
        const data = req.body;

        if (!data.name || !data.surname || !data.patronymic || !data.identificationNumber) {
            return res.status(400).json({ message: "Все поля обязательные" });
        }

        const profile = await prisma.userProfile.create({
            data: {
                ...data,
                userId: req.user.id,
            },
        });

        return res.status(201).json(profile);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Что-то пошло не так" });
    }
};

const profileGet = async (req, res) => {
    const { id } = req.params;
    try {
        const profile = await prisma.userProfile.findUnique({
            where: {
                id,
            },
        });

        res.status(200).json(profile);
    } catch {
        res.status(500).json({ message: "Не удалось получить сотрудника" });
    }
};

const profileEdit = async (req, res) => {
    const data = req.body;
    const id = data.id;

    try {
        await prisma.userProfile.update({
            where: {
                id,
            },
            data,
        });

        res.status(204).json("OK");
    } catch (err) {
        res.status(500).json({ message: "Не удалось редактировать сотрудника" });
    }
};

module.exports = {
    profileEdit,
    profileGet,
    profileAdd
};