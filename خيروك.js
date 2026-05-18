module.exports = {
    name: "خيروك",
    description: "لعبة لو خيروك التفاعلية بالعامية.",
    adminOnly: false,
    execute(api, message, config) {
        const questions = [
            "🤔 لو خيروك: تعيش طول عمرك تاكل غير اللوبيا 🍲 ولا تعيش طول عمرك بلا فيسبوك؟ 📱",
            "🤔 لو خيروك: تسافر للمستقبل وتشوف روحك كيفاش تولي 🚀 ولا ترجع للماضي وتصحح غلطة درتها؟ ⏳",
            "🤔 لو خيروك: تدي مليار سنتيم درك 💰 ولا تدي حكمة تخليك غني طول حياتك? 🧙‍♂️",
            "🤔 لو خيروك: تعيش في قصر وحدك في جزيرة مهجورة 🏰 ولا تعيش في خيمة مع ناس تحبهم؟ ⛺"
        ];
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        api.sendMessage(randomQuestion, message.threadID);
    }
};
