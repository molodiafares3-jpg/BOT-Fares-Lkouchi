module.exports = {
    name: "حب",
    description: "يقيس نسبة التوافق بينك وبين شخص تمنشنه.",
    adminOnly: false,
    execute(api, message, config) {
        const mention = Object.keys(message.mentions);
        if (mention.length === 0) return api.sendMessage("❌ لازم تدير تاغ (mention) للشخص اللي حاب تقيس النسبة معاه!", message.threadID);
        
        const percentage = Math.floor(Math.random() * 101);
        let comment = "";

        if (percentage >= 80) comment = "❤️ هادو خلاص قاريين الفاتحة، ربي يجمعكم!";
        else if (percentage >= 50) comment = "🙂 كاين أمل، بصح لازم تزيدو تتهلاو في بعضاكم.";
        else comment = "💔 اخطيك يا خويا/أختي، هاذي علاقة فاشلة من البداية 😂.";

        api.sendMessage(`📊 البوت لوكي يقيس نسبة التوافق:\nالنسبة بينكم هي: ${percentage}%\n\n${comment}`, message.threadID);
    }
};
