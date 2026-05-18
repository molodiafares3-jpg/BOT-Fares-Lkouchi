module.exports = {
    name: "botLeaveLog",
    description: "طباعة لوغ في السيرفر عند خروج البوت من مجموعة.",
    async execute(api, message, config) {
        if (message.type === "event" && message.logMessageType === "log:unsubscribe") {
            const leftID = message.logMessageData.leftParticipantFbId;
            if (leftID === api.getCurrentUserID()) {
                console.log(`⚠️ تنبيه: تم طرد البوت أو خرج من المجموعة ذات الآيدي: ${message.threadID}`);
            }
        }
    }
};
