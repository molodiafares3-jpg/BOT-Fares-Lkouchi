module.exports = {
    name: "devWelcome",
    description: "ترحيب ملكي خاص بالمطور فارس عند دخوله المجموعة.",
    async execute(api, message, config) {
        if (message.type === "event" && message.logMessageType === "log:subscribe") {
            const threadID = message.threadID;
            const addedParticipants = message.logMessageData.addedParticipants;
            
            // ضع آيدي حسابك الشخصي هنا مكان الأصفار
            const devID = "61588841673406"; 

            if (addedParticipants.some(p => p.userFbId === devID)) {
                const msg = `👑 [ تعظيم سلام للمطور ] 👑\n\n` +
                            `🚀 انتبهوا يا أعضاء! لقد انضم الآن صانعي ومطوري العبقري:\n` +
                            `✨ 🔥 [ Fares Lkouchi ] 🔥 ✨\n\n` +
                            `🔮 منور الجروب يا زعيم، البوت وكل الحاضرين في خدمتك! 🫡`;
                api.sendMessage(msg, threadID);
            }
        }
    }
};
