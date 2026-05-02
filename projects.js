const myProjectsData = [
    {
        name: "Key System",
        actionType: "view",
        repoUrl: "https://github.com/OYB0/OYB/tree/main/Roblox/Executor/KeySystem", // تمت إضافة رابط المستودع ليظهر زر View Repo
        scripts: [
            { name: "KeySystemUi.lua", rawUrl: "https://raw.githubusercontent.com/OYB0/OYB/main/Roblox/Executor/KeySystem/KeySystemUi.lua" },
            { name: "SecretCode.lua", rawUrl: "https://raw.githubusercontent.com/OYB0/OYB/main/Roblox/Executor/KeySystem/SecretCode.lua" }
        ],
        imageUrl: "https://raw.githubusercontent.com/OYB0/OYB/main/Roblox/Executor/KeySystem/cover.png",
        mainCategory: "Roblox",
        badge: "Executor Script"
    },
    {
        name: "Events Panel",
        actionType: "link", // نوع جديد للروابط الخارجية والبرامج
        linkData: {
            url: "https://create.roblox.com/store/asset/89740483068098/OYB-Events-Panel",
            btnText: "View on Roblox Studio",
            iconImage: "https://github.com/OYB0/oyb0.github.io/blob/main/RobloxStudio.png?raw=true" // صورة مصغرة تظهر في الزر
        },
        imageUrl: "https://raw.githubusercontent.com/OYB0/OYB/main/Roblox/RobloxStudio/EventsPanel/cover.png",
        mainCategory: "Roblox",
        badge: "Roblox Studio Model"
    },
    {
        name: "Roblox Telegram Monitor",
        actionType: "view", 
        repoUrl: "https://github.com/OYB0/OYB/tree/main/Roblox/RobloxStudio/RobloxTelegramMonitor",
        scripts: [
            { name: "TheScript.lua", rawUrl: "https://raw.githubusercontent.com/OYB0/OYB/main/Roblox/RobloxStudio/RobloxTelegramMonitor/TheScript.lua" }
        ],
        imageUrl: "https://raw.githubusercontent.com/OYB0/OYB/main/Roblox/RobloxStudio/RobloxTelegramMonitor/cover.png",
        mainCategory: "Roblox",
        badge: "Roblox Studio"
    },
    {
        name: "Multi-Game Script Loader",
        actionType: "view", 
        repoUrl: "https://github.com/OYB0/OYB0/tree/main/Roblox/Executor/Multi-GameScriptLoader",
        scripts: [
            { name: "TheScript.lua", rawUrl: "https://raw.githubusercontent.com/OYB0/OYB/main/Roblox/Executor/Multi-GameScriptLoader/TheScript.lua" }
        ],
        imageUrl: "https://github.com/OYB0/OYB0/blob/main/Roblox/Executor/Multi-GameScriptLoader/cover.png?raw=true",
        mainCategory: "Roblox",
        badge: "Executor Script"
    },
    {
        name: "OYB Hub",
        actionType: "copy", 
        copyContent: "loadstring(game:HttpGet('https://raw.githubusercontent.com/OYB0/OYBHubscript/refs/heads/main/oybscript'))()",
        imageUrl: "https://github.com/OYB0/oyb0.github.io/blob/main/OYBHub.png?raw=true",
        mainCategory: "Roblox",
        badge: "Run on Executor"
    }
];
