module.exports = {
    name: "نرد",
    description: "رمي حجر النرد العشوائي (الزهر) من 1 إلى 6.",
    adminOnly: false,
    async execute(api, message, config) {
        const diceFaces = ["⚀ 1", "⚁ 2", "⚂ 3", "⚃ 4", "⚄ 5", "⚅ 6"];
        const result = diceFaces[Math.floor(Math.random() * diceFaces.length)];

        api.sendMessage("🎲 جاري رمي حجر النرد على الطاولة... 🔄", message.threadID);

        setTimeout(() => {
            const msg = `🎲 [ نتيجة رمي حجر النرد ] ✨\n\n` +
                        `🎯 استقر النرد على الوجه:\n` +
                        `👉 [ ${result} ] 👈\n\n` +
                        `🤖 العب مجدداً واختبر حظك مع البوت العام Luky ⚡`;
            api.sendMessage(msg, message.threadID);
        }, 1200);
    }
};
