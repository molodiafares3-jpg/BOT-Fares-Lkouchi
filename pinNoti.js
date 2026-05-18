module.exports = {
    name: "pinNoti",
    description: "تنبيه الأعضاء عند تثبيت رسالة جديدة.",
    async execute(api, message, config) {
        if (message.type === "event" && message.logMessageType === "log:pinned-message") {
            const threadID = message.threadID;
            const msg = `📌 [ إشعار رسالة مثبتة ] ✨\n\n` +
                        `📣 قام أحد المشرفين بتثبيت رسالة جديدة في أعلى الجروب!\n` +
                        `👀 يرجى من جميع الأعضاء تفقدها لمعرفة القوانين أو التحديثات.\n\n` +
                        `🤖 البوت العام Luky يحييكم ⚡`;
            api.sendMessage(msg, threadID);
        }
    }
};
