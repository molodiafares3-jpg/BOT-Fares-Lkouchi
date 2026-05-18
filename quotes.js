module.exports = {
    name: "اقتباس",
    description: "يعطيك قولاً مأثوراً أو اقتباساً عميقاً وعظيماً.",
    adminOnly: false,
    async execute(api, message, config) {
        const quotes = [
            "العقول العظيمة تناقش الأفكار، والعقول المتوسطة تناقش الأحداث، والعقول الصغيرة تناقش الأشخاص. — إليانور روزفلت",
            "ليست السعادة في أن تفعل ما تريد، بل في أن تريد ما تفعل. — سقراط",
            "المرء حيث يضع نفسه، فكن في العلياء دائماً. — حكمة عربية",
            "في وسط كل صعوبة تكمن فرصة ذهبية. — ألبرت أينشتاين",
            "السقوط ليس فشلاً، الفشل هو أن تبقى في الأسفل حيث سقطت. — كونفوشيوس"
        ];

        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

        const replyMsg = `📚 [ من أقوال وعظماء التاريخ ] ✨\n\n` +
                         `💬 "${randomQuote}"\n\n` +
                         `🤖 مكتبة Luky الثقافية بإشراف المطور فارس 👑`;

        api.sendMessage(replyMsg, message.threadID);
    }
};
