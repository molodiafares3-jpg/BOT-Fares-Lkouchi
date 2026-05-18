module.exports = {
    name: "روليت",
    description: "لعبة الروليت الروسية الخطيرة لاختبار حظك.",
    adminOnly: false,
    async execute(api, message, config) {
        api.sendMessage("🔫 جاري وضع رصاصة واحدة في المسدس وتدوير الأسطوانة... 🔄", message.threadID);

        setTimeout(() => {
            // احتمالية الموت 1 من 6
            const IsDead = Math.floor(Math.random() * 6) === 0;

            api.getUserInfo(message.senderID, (err, ret) => {
                const name = ret[message.senderID] ? ret[message.senderID].name : "يا بطل";
                let replyMsg = "";

                if (IsDead) {
                    replyMsg = `💥 💥 [ طااااخ! ] 💀\n\n` +
                               `🪦 للأسف يا [ ${name} ]، الرصاصة كانت من نصيبك واستقرت في رأسك! لقد مت في اللعبة بنجاح.. 😂\n\n` +
                               `🤖 البوت Luky يرسل تعازيه للمطور فارس الكوشي 👑`;
                } else {
                    replyMsg = `🔔 [ كليك.. نجووووت! ] 🎉\n\n` +
                               `😎 حظك من حديد يا [ ${name} ]! الأسطوانة كانت فارغة وكتبت لك حياة جديدة اليوم.\n\n` +
                               `✨ جرب حظك مجدداً إذا كنت شجاعاً!`;
                }

                api.sendMessage(replyMsg, message.threadID);
            });
        }, 2000);
    }
};
