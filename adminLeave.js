module.exports = {
    name: "adminLeave",
    description: "إشعار عند مغادرة أحد المشرفين للجروب.",
    async execute(api, message, config) {
        if (message.type === "event" && message.logMessageType === "log:unsubscribe") {
            const threadID = message.threadID;
            const leftID = message.logMessageData.leftParticipantFbId;

            api.getThreadInfo(threadID, (err, info) => {
                if (err || !info) return;
                // التحقق مما إذا كان العضو المغادر موجوداً في قائمة الآدمنية السابقة
                if (info.adminIDs.some(admin => admin.id === leftID)) {
                    api.getUserInfo(leftID, (err, ret) => {
                        const name = ret[leftID] ? ret[leftID].name : "أحد المشرفين";
                        const msg = `⚠️ [ تنبيه إداري ] 🚨\n\n` +
                                    `👑 غادر المجموعة أحد المشرفين (الآدمنية): [ ${name} ]!\n` +
                                    `🤖 نظام Luky مسجل وبإشراف المطور Fares Lkouchi 👑`;
                        api.sendMessage(msg, threadID);
                    });
                }
            });
        }
    }
};
