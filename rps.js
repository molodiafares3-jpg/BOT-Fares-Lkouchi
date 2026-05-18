module.exports = {
    name: "لعب",
    description: "لعبة حجر، ورقة، مقص ضد البوت لوكي.",
    adminOnly: false,
    async execute(api, message, config) {
        const args = message.body.split(" ").slice(1).join(" ");
        const choices = ["حجر", "ورقة", "مقص"];
        
        if (!args || !choices.includes(args)) {
            return api.sendMessage("❌ اختر واحدة واكتبها بعد الأمر لتلعب! (مثال: لعب حجر أو لعب ورقة أو لعب مقص)", message.threadID);
        }

        const botChoice = choices[Math.floor(Math.random() * choices.length)];
        const userChoice = args;
        let result = "";

        if (userChoice === botChoice) result = "🤝 تعادل! عقولنا تفكر معاً.";
        else if (
            (userChoice === "حجر" && botChoice === "مقص") ||
            (userChoice === "ورقة" && botChoice === "حجر") ||
            (userChoice === "مقص" && botChoice === "ورقة")
        ) {
            result = "🎉 كفووو! أنت الفائز وهزمت ذكاء البوت! 🔥";
        } else {
            result = "😜 هارد لك! البوت لوكي هو الذي فاز عليك هذه المرة! 🤖";
        }

        const msg = `🎮 [ جولة حجر ورقة مقص ] ⚡\n\n` +
                    `👤 اختيارك: ${userChoice}\n` +
                    `🤖 اختيار البوت: ${botChoice}\n\n` +
                    `🎯 النتيجة: ${result}\n\n` +
                    `👑 بإشراف وحماية من Fares Lkouchi`;
        api.sendMessage(msg, message.threadID);
    }
};
