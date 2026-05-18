module.exports = {
    name: "اضحك",
    description: "يعطيك نكتة عشوائية لتموت من الضحك.",
    adminOnly: false,
    async execute(api, message, config) {
        const jokes = [
            "مرة واحد اشترى حذاء ضيق، قام عمل فيه وسيع! 😂",
            "استاذ قال للطلاب: الحيوانات التي تلد تسمى ثدييات.. والتي تبيض تسمى؟ رد طالب: تسمى بيوضات! 🥚",
            "مرة واحد راح يشتري ساعة، لقاها غالية.. اشترى خمس دقائق بس! ⏰",
            "مرة خياط مشى في مكان مقطوع.. قام خاطه! 🪡",
            "واحد سأل صاحبه: ليش القطار مهم؟ قاله: عشان تحتيه خطين! 🚂"
        ];

        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];

        const replyMsg = `🎭 [ نكتة البوت Luky المنعشة ] 😂\n\n` +
                         `💬 ${randomJoke}\n\n` +
                         `👑 ابتسم مع البوت شغال عام برعاية Fares Lkouchi`;

        api.sendMessage(replyMsg, message.threadID);
    }
};
