const myProjectsData = [
    {
        name: "Key System",
        actionType: "view",
        repoUrl: "https://github.com/OYB0/OYB/tree/main/Roblox/Executor/KeySystem", 
        videoUrl: "https://youtu.be/nhj-zguVLhI", // تمت إضافة رابط الفيديو
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
        actionType: "link", 
        videoUrl: "https://www.youtube.com/watch?v=_YaEtuLHRDg", // تمت إضافة رابط الفيديو
        linkData: {
            url: "https://create.roblox.com/store/asset/71640449795118",
            btnText: "View on Roblox Studio",
            iconImage: "https://github.com/OYB0/oyb0.github.io/blob/main/RobloxStudio.webp?raw=true" 
        },
        imageUrl: "https://raw.githubusercontent.com/OYB0/OYB/main/Roblox/RobloxStudio/EventsPanel/cover.webp",
        mainCategory: "Roblox",
        badge: "Roblox Studio Model"
    },
    {
        name: "Multi-Game Script Loader",
        actionType: "view", 
        repoUrl: "https://github.com/OYB0/OYB0/tree/main/Roblox/Executor/Multi-GameScriptLoader",
        videoUrl: "https://youtu.be/klf9EnL23So", // تمت إضافة رابط الفيديو
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
