module.exports = {
    name: "المطور",
    description: "عرض معلومات مطور وصانع البوت لوكي.",
    adminOnly: false,
    async execute(api, message, config) {
        const msg = `👑 [ الكرت الرسمي لمطور البوت ] 👑\n\n` +
                    `👤 المطور والمالك: Fares Lkouchi 💎\n` +
                    `🤖 اسم البوت النشط: Luky ⚡\n` +
                    `🛠️ لغة البرمجة: JavaScript (Node.js)\n` +
                    `🔒 حالة البوت: عام ومفتوح للجميع مجاناً 🔓\n\n` +
                    `📣 رسالة المطور: مرحباً بكم في عالمي الذكي! شكراً لاستخدامكم البوت وتفاعلكم الراقي داخل المجموعات! ✨`;
        api.sendMessage(msg, message.threadID);
    }
};
