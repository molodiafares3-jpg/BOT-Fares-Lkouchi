module.exports = {
    name: "approvalNoti",
    description: "إشعار عند تغيير إعدادات موافقة الأعضاء الجدد.",
    async execute(api, message, config) {
        if (message.type === "event" && message.logMessageType === "log:thread-approval-mode") {
            const threadID = message.threadID;
            const mode = message.logMessageData.APPROVAL_MODE; // تفعل أو أقفل

            const status = mode === "on" ? "🔒 تم تفعيل موافقة الإدارة قبل دخول أي عضو." : "🔓 تم فتح الجروب للجميع دون موافقة مسبقة.";
            const msg = `🛡️ [ تحديث أمان المجموعة ] ✨\n\n` +
                        `${status}\n\n` +
                        `🤖 نظام حماية Luky يعمل بكفاءة ⚡`;
            api.sendMessage(msg, threadID);
        }
    }
};
