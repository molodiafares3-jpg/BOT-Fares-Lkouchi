module.exports = {
    name: "خمن",
    description: "تخمين رقم عشوائي يختاره البوت من 1 إلى 5.",
    adminOnly: false,
    async execute(api, message, config) {
        const args = message.body.split(" ").slice(1).join(" ");
        if (!args || isNaN(args) || args < 1 || args > 5) {
            return api.sendMessage("❌ يرجى كتابة رقم من 1 إلى 5 بعد الأمر لتلعب! (مثال: خمن 3)", message.threadID);
        }

        const botNumber = Math.floor(Math.random() * 5) + 1;
        const userNumber = parseInt(args);

        api.sendMessage("🔮 البوت Luky يقرأ أفكارك الآن... 🔍", message.threadID);

        setTimeout(() => {
            if (userNumber === botNumber) {
                const winMsg = `🎉 [ كفووو! إجابة صحيحة ] 🧠\n\n` +
                               `🎯 لقد اخترت الرقم [ ${userNumber} ] وكان رقم البوت السري هو فعلاً [ ${botNumber} ]!\n\n` +
                               `👑 أنت عبقري الجروب اليوم، والمطور فارس الكوشي يحييك!`;
                api.sendMessage(winMsg, message.threadID);
            } else {
                const loseMsg = `❌ [ للأسف.. تخمين خاطئ ] 🦾\n\n` +
                                `👤 رقمك: ${userNumber}\n` +
                                `🤖 رقم البوت السري: ${botNumber}\n\n` +
                                `🔄 حظ أوفر المرة القادمة، أعد المحاولة!`;
                api.sendMessage(loseMsg, message.threadID);
            }
        }, 1500);
    }
};
