module.exports = {
    name: "سعادة",
    description: "قياس نسبة السعادة أو النكد في دم العضو اليوم.",
    adminOnly: false,
    async execute(api, message, config) {
        const rate = Math.floor(Math.random() * 101);
        let comment = "";
        
        if (rate >= 80) comment = "🥳 طاقة إيجابية وفرحة عارمة! منور الجروب بابتسامتك! ✨";
        else if (rate >= 40) comment = "🙂 أمورك مستقرة ومتوازنة، لا فرحان ولا زعلان. 👌";
        else comment = "🥱 نسبة النكد والتعب طالعة اليوم، تحتاج قيلولة أو شوكولاتة! 🍫";

        api.getUserInfo(message.senderID, (err, ret) => {
            const name = ret[message.senderID] ? ret[message.senderID].name : "العضو";
            const msg = `📊 [ مؤشر الحالة النفسية اليومية ] ✨\n\n` +
                        `👤 العضو: [ ${name} ]\n` +
                        `📈 نسبة السعادة: ${rate}%\n\n` +
                        `📣 النتيجة: ${comment}\n\n` +
                        `🤖 البوت العام Luky برعاية المطور فارس الكوشي 👑`;
            api.sendMessage(msg, message.threadID);
        });
    }
};
