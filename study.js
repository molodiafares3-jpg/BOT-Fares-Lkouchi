module.exports = {
    name: "دراسة",
    description: "قياس نسبة نجاحك المتوقعة في الاختبارات بحسب آلة الحظ.",
    adminOnly: false,
    async execute(api, message, config) {
        const successRate = Math.floor(Math.random() * 61) + 40; // من 40 إلى 100
        let comment = "";
        
        if (successRate >= 90) comment = "👑 امتياز وتفوق باهر! مكانك محجوز في لوحة الشرف! 🎓";
        else if (successRate >= 65) comment = "📚 نجاح مضمون ومستوى جيد، فقط ركز قليلاً في المراجعة. ✨";
        else comment = "📝 تحتاج إلى مجهود إضافي وتركيز أعمق، الهاتف يشتتك كثيراً! 📱";

        api.getUserInfo(message.senderID, (err, ret) => {
            const name = ret[message.senderID] ? ret[message.senderID].name : "الطالب";
            const msg = `📚 [ رادار توقعات الدراسة والامتحانات ] 🎓\n\n` +
                        `👤 الطالب: [ ${name} ]\n` +
                        `📈 نسبة التوفيق: ${successRate}%\n\n` +
                        `📣 نصيحة Luky: ${comment}\n\n` +
                        `👑 تحت رعاية المطور والمشرف فارس الكوشي`;
            api.sendMessage(msg, message.threadID);
        });
    }
};
