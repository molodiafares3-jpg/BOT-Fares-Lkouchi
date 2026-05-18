module.exports = {
    name: "callEndedNoti",
    description: "إشعار عند انتهاء المكالمة الجماعية.",
    async execute(api, message, config) {
        if (message.type === "event" && (message.logMessageType === "rtc:call_joined" || message.logMessageType === "log:call-end")) {
            const threadID = message.threadID;
            const msg = `📉 [ انتهت المكالمة ] 📞\n\n` +
                        `✨ غادر الجميع المكالمة الجماعية الآن.\n` +
                        `💬 شكراً لمن شارك معنا، ونلتقي في سهرات قادمة إن شاء الله! 🤖`;
            api.sendMessage(msg, threadID);
        }
    }
};
