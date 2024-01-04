const { prisma } = require('../prisma/prisma-client');
const brypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    try {
        const { login, password } = req.body;
        if (!login || !password) {
            return res.status(400).json({ message: 'Пожалуйста, заполните обязательные поля' })
        }
        const user = await prisma.user.findFirst({
            where: {
                login,
            }
        });
        const isPasswordCorrect = user && (await brypt.compare(password, user.password));
        const secret = process.env.JWT_SECRET;

        if (user && isPasswordCorrect && secret) {
            res.status(200).json({
                id: user.id,
                login: user.login,
                token: jwt.sign({ id: user.id }, secret, { expiresIn: '40d' })
            })
        } else {
            return res.status(400).json({ message: 'Неверно введен логин или пароль' })
        }
    } catch {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
}
const register = async (req, res, next) => {
    try {
        const { login, password } = req.body;

        if(!login || !password) {
            return res.status(400).json({ message: 'Пожалуйста, заполните обязательные поля' })
          }

        const registeredUser = await prisma.user.findFirst({
            where: {
                login
            }
        });

        if (registeredUser) {
            return res.status(400).json({ message: 'Пользователь, с таким login уже существует' })
          }


        const salt = await brypt.genSalt(10);
        const hashedPassword = await brypt.hash(password, salt);

        const user = await prisma.user.create({
            data: {
                login,
                password: hashedPassword
            }
        });

        const secret = process.env.JWT_SECRET;

        if (user && secret) {
            res.status(201).json({
                id: user.id,
                login: user.login,
                token: jwt.sign({ id: user.id }, secret, { expiresIn: '40d' })
            })
        } else {
            return res.status(400).json({ message: 'Не удалось создать пользователя' })
        }
    } catch {
        res.status(500).json({ message: 'Что-то пошло не так' })
    }
}
const current = async (req, res) => {
    return res.status(200).json(req.user)
}

module.exports = {
    login,
    register,
    current
}