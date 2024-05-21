const telegramApi = require('node-telegram-bot-api')
const token = '6683702354:AAFuEb4l2ffg-3tb9LXErvgVn8E5nMdbh_0'


const bot = new telegramApi(token, {polling: true})

const start = () => {

    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info', description: 'Информация о пользователе'}
    ])
    bot.on('message', async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/734/c29/734c2933-892b-340b-980f-9d94305e9d95/6.webp')
            return  bot.sendMessage(chatId, 'Привет, я бот')
        }
        if (text === '/info') {
            return  bot.sendMessage(chatId, 'you name is ' + msg.from.username)
        }
        return bot.sendMessage(chatId, 'Я тебя не понимаю')
    })
}

start()