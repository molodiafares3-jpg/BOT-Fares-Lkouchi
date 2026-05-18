const fs = require("fs");
const login = require("fca-project-orion");

// 1. قراءة ملف الإعدادات المفرصل لمعرفة الآدمن والأسماء
const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// 2. تسجيل الدخول باستخدام ملف الكوكيز appstate.json
login({appState: JSON.parse(fs.readFileSync('appstate.json', 'utf8'))}, (err, api) => {
    if(err) return console.error(err);

    // طباعة رسالة الترحيب في شاشة السيرفر عند اشتغال البوت بنجاح
    console.log(`🤖 تم تشغيله [ ${config.botName} ] البوت الشخصي للحساب جاهز للعمل بنجاح 🎉`);
    console.log(`👑 المطور: ${config.developerName}`);

    // 3. الاستماع للرسائل الواردة في الحساب
    api.listenMqtt((err, message) => {
        if(err) return console.error(err);

        // التفاعل والرد على الرسائل النصية فقط
        if(message.type === "message" && message.body) {
            console.log(`📩 رسالة جديدة من [${message.senderID}]: ${message.body}`);

            // 👑 فحص إذا كان مرسل الرسالة هو الآدمن (أنت)
            if (message.senderID === config.adminID) {
                // إذا كتبت للبوت كلمة "تحديث" سيرد عليك بهذا الأمر الخاص بالآدمن
                if (message.body === "تحديث") {
                    return api.sendMessage("🔄 جاري تحديث النظام يا سيدي الفاضل...", message.threadID);
                }
            }

            // 🤖 الرد التلقائي العادي لبقية المستخدمين الذين يراسلون حسابك
            const replyMessage = `🤖 مرحبا بك!\n\nأنا البوت التلقائي [ ${config.botName} ] ⚡ الخاص بـ ${config.developerName}.`;
            api.sendMessage(replyMessage, message.threadID);
        }
    });
});
