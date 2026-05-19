/**
 * 🐱 FaresOS Framework v2 - Specialized Terminal UI
 * Crafted with 💞 by Fares Lkouchi
 * Made in Morocco 🇲🇦
 */

const { spawn } = require("child_process");
const path = require("path");
const chalk = require("chalk");
const CFonts = require("cfonts");
const moment = require("moment-timezone");
const express = require("express");
const fs = require("fs");

const app = express();
// تعديل المنفذ ليتوافق تلقائياً مع منصة Render
const PORT = process.env.PORT || 3000; 

// 🎨 لوحة الألوان الرقمية (Cyberpunk Palette)
const C = {
    neon: chalk.bold.hex("#00ff9f"),    // أخضر نيون
    vibrant: chalk.bold.hex("#ff0055"), // وردي صارخ
    ocean: chalk.hex("#00b4d8"),       // أزرق بحري
    royal: chalk.hex("#7209b7"),       // بنفسجي ملكي
    gold: chalk.bold.hex("#ffbe0b"),    // ذهبي
    ice: chalk.hex("#caf0f8"),         // ثلجي
    ghost: chalk.gray,                  // رمادي خافت
    border: chalk.hex("#4361ee"),       // أزرق الحدود
    warn: chalk.hex("#f77f00")          // برتقالي تحذير
};

// ─── [ وظائف التجميل الرسومية ] ──────────────────────────────────────────

function banner() {
    console.clear?.();
    
    const borderTop = C.border("╔" + "═".repeat(58) + "╗");
    const borderMid = C.border("║") + " ".repeat(58) + C.border("║");
    const borderBot = C.border("╚" + "═".repeat(58) + "╝");

    console.log("\n" + borderTop);
    console.log(C.border("║") + C.neon("  [⚡] PROTOCOL:").padEnd(15) + C.vibrant(" F A R E S   O S   V 2 ".padEnd(41)) + C.border("║"));
    console.log(borderBot);

    CFonts.say("FARES", {
        font: "block",
        align: "center",
        colors: ["#00ff9f", "#4361ee"],
        background: "transparent",
        letterSpacing: 1
    });

    CFonts.say("SYSTEM RUNNING", {
        font: "console",
        align: "center",
        colors: ["#ff0055"],
        gradient: ["#ff0055", "#ffbe0b"],
        transitionGradient: true
    });

    console.log(C.border("    ◈" + "─".repeat(50) + "◈"));
    console.log(C.ice(`         👤 DEV: FARES LKOUCHI  |  🇲🇦 REGION: MOROCCO`));
    console.log(C.border("    ◈" + "─".repeat(50) + "◈\n"));
}

function box(title, lines, accent = C.neon) {
    const width = 56;
    const top = accent("◢" + "▬".repeat(width - 2) + "◣");
    const mid = accent("┃");
    const sep = accent("┣" + "━".repeat(width - 2) + "┫");
    const bot = accent("◥" + "▬".repeat(width - 2) + "◤");

    console.log(top);
    console.log(`${mid} ${C.gold(` ❯❯ ${title} `).padEnd(width + 3)} ${mid}`);
    console.log(sep);
    
    lines.forEach(l => {
        const cleanLen = l.replace(/\u001b\[[0-9;]*m/g, "").length;
        const padding = " ".repeat(Math.max(0, width - 4 - cleanLen));
        console.log(`${mid} ${l}${padding} ${mid}`);
    });
    console.log(bot);
}

function logFares(label, msg, typeColor = C.ocean) {
    const time = moment().tz("Africa/Casablanca").format("HH:mm:ss");
    console.log(
        C.ghost(`[${time}] `) + 
        typeColor(`⟪ ${label.padEnd(8)} ⟫ `) + 
        C.ice("──╼ ") + msg
    );
}

// ─── [ تشغيل السيرفر والواجهة ] ─────────────────────────────────────────

banner();

const day = moment().tz("Africa/Casablanca").format("dddd");
const daysAr = {
    Sunday: "الأحد 🌞", Monday: "الإثنين 🌙", Tuesday: "الثلاثاء 🔥",
    Wednesday: "الأربعاء 💧", Thursday: "الخميس 🌈", Friday: "الجمعة ✨", Saturday: "السبت 🪐"
};

box("معلومات إقلاع النظام", [
    `${C.neon("📅 اليوم      :")} ${C.ice(daysAr[day] || day)}`,
    `${C.neon("🕙 وقت البدء  :")} ${C.ice(moment().tz("Africa/Casablanca").format("HH:mm:ss"))}`,
    `${C.neon("🛡️ النواة     :")} ${C.vibrant("FaresOS Hyperion V2")}`,
    `${C.neon("📡 المنفذ     :")} ${C.gold(PORT)}`,
    `${C.neon("🔗 الحالة     :")} ${C.neon("ACTIVE / STABLE")}`
], C.border);

// واجهة الويب المتوافقة مع Render و أنظمة الـ Uptime
app.get("/", (req, res) => {
    res.status(200).json({ status: "OK", message: "FaresOS V2 is running 24/7 on Render" });
});

app.listen(PORT, () => logFares("NETWORK", C.neon(`Express Server is live on port ${PORT}`), C.neon));

// ─── [ نظام الترجمة والتحكم ] ───────────────────────────────────

const TRANSLATE = [
    [/Đã tải thành công (\d+) module commands và (\d+) module events/g, (m, a, b) => C.neon(`✅ تم بنجاح استدعاء `) + C.gold(`${a} أمراً`) + C.neon(` و `) + C.gold(`${b} حدثاً`)],
    [/Thời gian khởi động:?\s*(\S+)/g, (m, t) => C.ocean(`🚀 زمن تشغيل المحرك: `) + C.gold(t)],
    [/Tiến hành khởi tạo biến môi trường/g, C.ghost("⚙️  جاري مزامنة بروتوكولات البيئة...")],
    [/Logged in as (\d+)/g, (m, id) => C.neon("🎭 تم الدخول بالمعرف: ") + C.gold(id)],
    [/Login successful!?/g, C.neon("🔓 تم تسجيل الدخول بنجاح! السيطرة كاملة.")],
    [/Sever region/gi, C.ocean("🌍 منطقة الخادم:")],
    [/『\s*NINO\s*』/g, C.vibrant("『 FARES 』")],
    [/^━{20,}$/gm, C.border("━".repeat(58))]
];

function translateLine(line) {
    let output = line;
    for (const [regex, replacement] of TRANSLATE) {
        output = output.replace(regex, replacement);
    }
    return output;
}

function startBot(reason) {
    if (reason) {
        console.log("\n" + C.warn("🔄 REBOOTING: ") + C.ice(reason) + "\n");
    }

    // فحص ذكي قبل تشغيل الملف لتفادي التحطم المفاجئ
    if (!fs.existsSync(path.join(__dirname, "main.js"))) {
        logFares("ERROR", C.vibrant("الملف 'main.js' غير موجود بجانب ملف index.js! يرجى التأكد من تسميته بشكل صحيح."), C.vibrant);
        return;
    }

    const child = spawn("node", ["--trace-warnings", "main.js"], {
        cwd: __dirname,
        stdio: ["inherit", "pipe", "pipe"],
        shell: true
    });

    child.stdout.on("data", (data) => {
        const lines = data.toString().split("\n");
        lines.forEach(ln => {
            if (ln.trim()) {
                console.log(translateLine(ln));
            }
        });
    });

    child.stderr.on("data", (data) => {
        const err = data.toString();
        if (err.trim()) {
            console.log(C.vibrant("🚨 ERROR_LOG: ") + C.ghost(err));
        }
    });

    child.on("close", (code) => {
        if (code === 1 || code === "1") {
            setTimeout(() => startBot("تحطم النظام.. جاري إعادة الإقلاع التلقائي."), 5000);
        } else {
            logFares("SYSTEM", C.warn(`Process exited with code: ${code}`), C.warn);
        }
    });
}

// البدء النهائي
logFares("CORE", C.royal("جاري تفعيل النواة المركزية..."), C.royal);
setTimeout(() => {
    startBot();
}, 1000);

// الأوامر العشوائية
const randomCommands = [
  "🤖 أمر عشوائي: قم بتحديث البيانات الآن!",
  "🎲 أمر عشوائي: اختر مستخدماً عشوائياً للفوز.",
  "تنظيف الذاكرة المؤقتة للسيرفر...",
  "⚙️ فحص حالة الاتصال بالشبكة: مستقرة.",
  "حساب عملية عشوائية: " + (Math.floor(Math.random() * 100) + 1)
];

function executeRandomTask() {
  const randomIndex = Math.floor(Math.random() * randomCommands.length);
  console.log("\x1b[36m%s\x1b[0m", randomCommands[randomIndex]);
}

console.log("🚀 السيرفر العشوائي بدأ العمل مع البوت...");
setInterval(executeRandomTask, 15000); // رفعنا المدة لـ 15 ثانية لتقليل الضغط على السجل
