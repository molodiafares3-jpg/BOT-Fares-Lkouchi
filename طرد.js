module.exports = {
    name: "طرد",
    description: "لطرد عضو من المجموعة (خاص بفارس الكوشي والآدمنز).",
    adminOnly: true,
    execute(api, message, config) {
        if (message.type === "message" && message.replyToMessage) {
            const targetID = message.replyToMessage.senderID;
            api.removeUserFromGroup(targetID, message.threadID, (err) => {
                if (err) return api.sendMessage("❌ ما قدرتش نطرده، تأكد أن البوت لوكي آدمن في المجموعـة!", message.threadID);
                api.sendMessage("✈️ بأمر من المطور فارس الكوشي، طرت يا حمامة وتم الطرد بنجاح!", message.threadID);
            });
        } else if (Object.keys(message.mentions).length > 0) {
            const targetID = Object.keys(message.mentions)[0];
            api.removeUserFromGroup(targetID, message.threadID, (err) => {
                if (err) return api.sendMessage("❌ فشل الطرد.", message.threadID);
                api.sendMessage("✈️ تم الطرد بنجاح واقتلاع العضو من المجموعة!", message.threadID);
            });
        } else {
            api.sendMessage("❌ يرجى الرد على رسالة الشخص بكلمة 'طرد' أو عمل تاغ له لتنفيذ الأمر.", message.threadID);
        }
    }
};
