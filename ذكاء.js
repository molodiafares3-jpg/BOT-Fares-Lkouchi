const axios = require("axios");

module.exports = {
    name: "لوكي",
    description: "اسأل الذكاء الاصطناعي لوكي عن أي شيء.",
    adminOnly: false,
    async execute(api, message, config) {
        const args = message.body.split(" ").slice(1).join(" ");
        if (!args) return api.sendMessage("❌ اكتب سؤالك بعد الأمر يا محترم! (مثال: ذكاء من هو فارس؟)", message.threadID);

        api.sendMessage("🔍 لوكي يفكر الآن وكتابة الإجابة...", message.threadID);

        try {
            const res = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(args)}`);
            const queryEn = res.data[0][0][0];
            
            const aiRes = await axios.get(`https://api.simsimi.net/v2/?text=${encodeURIComponent(queryEn)}&lc=en`);
            const replyEn = aiRes.data.success;

            const transRes = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=${encodeURIComponent(replyEn)}`);
            const replyAr = transRes.data[0][0][0];

            api.sendMessage(`🤖 إجابة البوت لوكي:\n\n${replyAr}`, message.threadID);
        } catch (error) {
            api.sendMessage(`🤖 مرحباً بك! أنا البوت لوكي ومطوري هو فارس الكوشي، أنا هنا لمساعدتك دائماً!`, message.threadID);
        }
    }
};
