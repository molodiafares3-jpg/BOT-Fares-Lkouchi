module.exports = {
    name: "botAvatarNoti",
    description: "إشعار عند تغيير صورة البوت الشخصية.",
    async execute(api, message, config) {
        if (message.type === "event" && message.logMessageType === "log:thread-image") {
            const threadID = message.threadID;
            const authorID = message.author;

            if (authorID === api.getCurrentUserID()) {
                const msg = `🖼️ [ لوك جديد ] ✨\n\n` +
                            `🤖 لقد تم تحديث صورتي الشخصية بنجاح مظهر جديد وقوة جديدة ⚡\n` +
                            `👑 شكراً لمطوري الفخم فارس الكوشي.`;
                api.sendMessage(msg, threadID);
            }
        }
    }
};
