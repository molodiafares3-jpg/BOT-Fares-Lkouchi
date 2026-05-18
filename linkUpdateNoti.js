module.exports = {
    name: "linkUpdateNoti",
    description: "إشعار عند ربط حسابات خارجية بالمجموعة.",
    async execute(api, message, config) {
        if (message.type === "event" && message.logMessageType === "log:thread-linked-group") {
            const threadID = message.threadID;
            const msg = `🔗 [ ربط حساب جديد ] ✨\n\n` +
                        `📢 تم ربط المجموعة بحساب أو منصة اجتماعية جديدة بنجاح!\n` +
                        `🤖 تابعونا لمعرفة كل جديد مع Luky والمطور فارس 👑`;
            api.sendMessage(msg, threadID);
        }
    }
};
