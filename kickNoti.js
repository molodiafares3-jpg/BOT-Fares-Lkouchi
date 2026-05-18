module.exports = {
    name: "kickNoti",
    description: "إرسال إشعار عند قيام مشرف بطرد أحد الأعضاء.",
    async execute(api, message, config) {
        // الفحص إذا كان الحدث هو إزالة عضو بواسطة شخص آخر
        if (message.type === "event" && message.logMessageType === "log:unsubscribe") {
            const threadID = message.threadID;
            const authorID = message.author; // الآدمن الذي طرد
            const leftParticipantID = message.logMessageData.leftParticipantFbId; // العضو المطرود

            // إذا كان الآدمن شخصاً آخر وليس العضو نفسه الذي خرج تلقائياً
            if (authorID !== leftParticipantID) {
                api.getUserInfo([authorID, leftParticipantID], (err, ret) => {
                    if (err) return;
                    const adminName = ret[authorID].name;
                    const userName = ret[leftParticipantID].name;

                    const msg = `🚨 [ إشعار طرد من المجموعة ] 🚷\n\n` +
                                `👮‍♂️ المشرف: [ ${adminName} ]\n` +
                                `❌ قام بطرد العضو: [ ${userName} ] من الجروب!\n\n` +
                                `🤖 نظام الرقابة العام Luky نشط بإشراف Fares Lkouchi 👑`;

                    api.sendMessage(msg, threadID);
                });
            }
        }
    }
};
