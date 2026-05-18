module.exports = {
    name: "callNoti",
    description: "تنبيه أعضاء الجروب عند بدء مكالمة جماعية جديدة.",
    async execute(api, message, config) {
        if (message.type === "event") {
            const threadID = message.threadID;

            // كشف بدء مكالمة فيديو أو مكالمة صوتية جماعية
            if (message.logMessageType === "rtc:call_started" || message.logMessageType === "log:call-start") {
                const callMsg = `📞 [ تنبيه مكالمة جماعية ] 🔥\n\n` +
                                `📣 يا جماعة، بدأت مكالمة جماعية (Call) داخل المجموعة الآن! \n` +
                                `🏃‍♂️ تفضلوا بالدخول والمشاركة في السهرة والدردشة معنا.\n\n` +
                                `🤖 بوت التفاعل Luky يتمنى لكم وقتاً ممتعاً برعاية فارس الكوشي 👑`;

                api.sendMessage(callMsg, threadID);
            }
        }
    }
};
