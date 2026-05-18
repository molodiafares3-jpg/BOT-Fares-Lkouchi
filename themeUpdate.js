module.exports = {
    name: "themeUpdate",
    description: "إرسال إشعار تلقائي عند تغيير ألوان أو إيموجي المجموعة.",
    async execute(api, message, config) {
        if (message.type === "event") {
            const threadID = message.threadID;
            const authorID = message.author; // الشخص الذي قام بالتغيير

            // 1. إذا تم تغيير لون أو ثيم الجروب
            if (message.logMessageType === "log:thread-color") {
                api.getUserInfo(authorID, (err, ret) => {
                    const name = ret[authorID] ? ret[authorID].name : "عضو";
                    
                    const msg = `🔔 [ تحديث المظهر ] ✨\n\n` +
                                `🎨 قام العضو [ ${name} ] بتغيير ألوان / ثيم المجموعة!\n\n` +
                                `🤖 نظام المراقبة [ Luky ] تحت إشراف Fares Lkouchi 👑`;
                    api.sendMessage(msg, threadID);
                });
            }

            // 2. إذا تم تغيير الإيموجي الرئيسي للجروب (مثل اللايك 👍)
            if (message.logMessageType === "log:thread-icon") {
                api.getUserInfo(authorID, (err, ret) => {
                    const name = ret[authorID] ? ret[authorID].name : "عضو";
                    const newEmoji = message.logMessageData.icon;

                    const msg = `🔔 [ تحديث الإيموجي ] ⚙️\n\n` +
                                `🎯 قام العضو [ ${name} ] بتغيير إيموجي الجروب الرئيسي إلى: [ ${newEmoji} ]\n\n` +
                                `🤖 البوت العام Luky شغال ونشط ⚡`;
                    api.sendMessage(msg, threadID);
                });
            }
        }
    }
};
