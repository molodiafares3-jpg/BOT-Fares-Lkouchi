module.exports = {
    name: "adminUpdate",
    description: "إرسال إشعار عند تعيين مشرف جديد أو إزالة مشرف.",
    async execute(api, message, config) {
        if (message.type === "event" && message.logMessageType === "log:thread-admins") {
            const threadID = message.threadID;
            const targetID = message.logMessageData.TARGET_ID; // العضو المستهدف
            const type = message.logMessageData.ADMIN_EVENT; // نوع الحدث (add أو remove)

            api.getUserInfo(targetID, (err, ret) => {
                if (err) return;
                const targetName = ret[targetID].name;

                let msg = "";
                if (type === "add") {
                    msg = `🔔 [ ترقية إدارية ] 👑\n\n` +
                          `👏 مبارك للعضو [ ${targetName} ] تم تعيينه كمشرف (آدمن) جديد في المجموعة!\n` +
                          `💪 نتمنى لك التوفيق في إدارة الجروب بالعدل.`;
                } else if (type === "remove") {
                    msg = `🔔 [ تحديث الإدارة ] 🚪\n\n` +
                          `⚠️ تم إزالة صلاحيات الإشراف من العضو [ ${targetName} ] وعاد عضواً عادياً.`;
                }

                // إضافة توقيع المطور
                msg += `\n\n🤖 نظام Luky الذكي بمتابعة من Fares Lkouchi 👑`;
                api.sendMessage(msg, threadID);
            });
        }
    }
};
