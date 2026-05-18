module.exports = {
    name: "activeReminder",
    description: "إرسال رسالة تشجيعية عند حدوث نشاط مكثف في الأحداث.",
    async execute(api, message, config) {
        // إذا كان هناك تفاعل أحداث مستمر وجاء حدث عادي مثل تغيير الكنيات
        if (message.type === "event" && Math.random() < 0.05) { // نسبة ظهور بسيطة لعدم الإزعاج
            const threadID = message.threadID;
            const msg = `✨ [ كبسولة نشاط البوت Luky ] 🤖\n\n` +
                        `💬 الجروب منور بوجودكم يا أساطير! شاركونا الحديث والألعاب.\n` +
                        `🎮 اكتبوا كلمة "الاوامر" لتجربة أحدث ألعاب التسلية المتاحة للجميع مجاناً!\n\n` +
                        `👑 تحيات المطور المحترف Fares Lkouchi`;
            api.sendMessage(msg, threadID);
        }
    }
};
