module.exports = {
    name: "initGroup",
    description: "إرسال رسالة تعريفية بالبوت عند إضافته لمجموعة جديدة.",
    async execute(api, message, config) {
        if (message.type === "event" && message.logMessageType === "log:subscribe") {
            const threadID = message.threadID;
            const addedParticipants = message.logMessageData.addedParticipants;

            // الفحص إذا كان العضو المضاف هو البوت نفسه
            const isBotAdded = addedParticipants.some(p => p.userFbId === api.getCurrentUserID());

            if (isBotAdded) {
                const introMsg = `🎉 [ تم تفعيل البوت بنجاح ] 🤖\n\n` +
                                 `👋 أهلاً بكم جميعاً يا أعضاء هذه المجموعة المتميزة!\n` +
                                 `⚡ أنا البوت العام [ Luky ]، تم إضافتي وتفعيلي هنا بنجاح.\n\n` +
                                 `👑 مطوري وصانعي هو البطل: Fares Lkouchi\n` +
                                 `🎮 يمكن لأي شخص منكم الآن الاستمتاع بأوامري العامة عبر كتابة كلمة "الاوامر" أو "/اوامر" في الشات.\n\n` +
                                 `✨ أتمنى لكم وقتاً ممتعاً ومليئاً بالتفاعل والتسلية!`;

                api.sendMessage(introMsg, threadID);
            }
        }
    }
};
