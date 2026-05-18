module.exports = {
    name: "nicknameNoti",
    description: "إرسال إشعار تلقائي عند تغيير كنية أحد الأعضاء.",
    async execute(api, message, config) {
        if (message.type === "event" && message.logMessageType === "log:user-nickname") {
            const threadID = message.threadID;
            const authorID = message.author; // الشخص الذي غير الكنية
            const participantID = message.logMessageData.participant_id; // العضو الذي تغيرت كنيته
            const newNickname = message.logMessageData.nickname || "الاسم الأصلي";

            api.getUserInfo([authorID, participantID], (err, ret) => {
                if (err) return;
                const authorName = ret[authorID].name;
                const participantName = ret[participantID].name;

                const msg = `⚙️ [ تحديث الألقاب والأسماء ] ✨\n\n` +
                            `👤 قام [ ${authorName} ] بتغيير كنية العضو ( ${participantName} ) إلى:\n` +
                            `🏷️ ｢ ${newNickname} ｣\n\n` +
                            `🤖 البوت العام Luky يراقب التحديثات ⚡`;

                api.sendMessage(msg, threadID);
            });
        }
    }
};
