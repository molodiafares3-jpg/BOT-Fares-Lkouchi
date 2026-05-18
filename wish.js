module.exports = {
    name: "أمنية",
    description: "اكتب أمنيتك لترى نسبة حظ تحقيقها في السجلات الترفيهية.",
    adminOnly: false,
    async execute(api, message, config) {
        const args = message.body.split(" ").slice(1).join(" ");
        if (!args) {
            return api.sendMessage("❌ اكتب أمنيتك أو حلمك بعد الأمر! (مثال: أمنية أن أنجح وأصبح مبرمجاً)", message.threadID);
        }

        const wishRate = Math.floor(Math.random() * 81) + 20; // بين 20 و 100
        api.sendMessage("🔮 جاري فتح كتاب الأماني وقراءة النجوم... 🌌", message.threadID);

        setTimeout(() => {
            const msg = `🌟 [ رادار تحقيق الأماني والأحلام ] ✨\n\n` +
                        `📝 أمنيتك: "${args}"\n` +
                        `📈 نسبة تحققها المستقبلي: ${wishRate}%\n\n` +
                        `📣 كلمة البوت لوكي: تفاءل بالخير دائماً واعمل بجد وسوف تصل لأهدافك بإذن الله! 🚀\n\n` +
                        `👑 مطور البوت المتميز: Fares Lkouchi`;
            api.sendMessage(msg, message.threadID);
        }, 1800);
    }
};
