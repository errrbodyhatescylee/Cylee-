//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VatxrTiK5cDN43SzVq3b";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/in01gn.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27849730363";
global.owner = process.env.OWNER_NUMBER || "27615045572";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVAzSXhWWDVoOVJmdjFLKzRacitta1RaTWVtQkluL3pzSDl3UWNMWkxWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicjhtSEZIQzF0VDJhc0NkbHJacVJGekhibFEzdCswcitiVUVvNk9oRGdBST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUHRwMHFYaW5URzNMbHdGR1lRWWs2d3pmTjdBeHpZQmdFWnRWNTVKY1VJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUSnN1L0FHVWkyM2dBWUVBRkEyeFdlSDZEVnhONGlORktNVm5sU1ZwY2tNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNLZjBPYk1kZXdKUG10dWpIM3liR3dRc3R5Skx4ckJkRFU4Q2VZaUJlRUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNZQlBCa0t0YVlSYUxadWVUa1ZaRExRRS91MVJrd3U1cG9EaC8yRVBzQXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERtMU1LcUtrSDAyVFp1bjR1RUN4MXNGTlJjV096aXcrOW9KRFgyckdrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRy9xUTlXWThWdVFHRXprYTFZNWtram9KVG1qVHM3amZBbUJ5eVE1dXZSWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZsSU5BQTd2bzlFU3ZGSU1ISFVtZEh1anJHWXd0aTJTMDk0cncwWkh2aVkvbDNkd1ZQcUNmdnkrUWdXcUJtYy9maEEraCtPeGd4bzczREZGTExPd0RBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI4LCJhZHZTZWNyZXRLZXkiOiJMaWg1VEdhYjhQZW9FWFZiYkRQUTdPUXNZS0lka3VPbjBlaStrNzNVQVkwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJkNG9TTUJQR1FxeVp6RnhZVklHQU9RIiwicGhvbmVJZCI6IjQ4YWRlZmE5LWNmNTctNGU4My1hNmU3LTgwYzFhMDgxZTY5MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2TSt2WWJ4NS9zL0FyVkVWK1JOcW9GazhraVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSjNpRVN0Y2g4S2JxdFNGTWF1TGxXMHhIS0NFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjQxRjJORVE1IiwibWUiOnsiaWQiOiIyNzYxNTA0NTU3Mjo2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuWwiuaVrOOBqOOBqOOCguOBq+OCr+OCveOCkuWQm+OBq+iogOOBhiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSyt2d29ZRkVOYjZtN2tHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibkZyQWtQQll1WUVlV29vTDg5TEkwSHdZL2dmbjZabERYOTFEN3lPNkFXcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVitCMkNEeCtJMHEyYjd3UkM5dm9BU1FHdkxFSjFJT2NsVWgvWnFCY1drVTFxZXVvSmtJWUo1NVVyL2hadFFwSjhaeVNVYTBoM1BJWjUvV3pFQXlFRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IklJZmJxUzdFQlArUStCZjJGQmFhcnpMQ1RVYzlYWXNPTmIrUUQ5VGZrUCtoSHA2VmJwV1FmcDZDdVZ5ZzFyanVZVFZEa200ODZlNTV2WWpUY1QyQUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2MTUwNDU1NzI6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaeGF3SkR3V0xtQkhscUtDL1BTeU5COEdQNEg1K21aUTEvZFErOGp1Z0ZyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMwNjA4NDgzLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBwYyJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`powered by theCyleeBot™`",
  author: process.env.PACK_AUTHER || "Sir Cylee ❤️🧸",
  packname: process.env.PACK_NAME || "c y l e e",
  botname: process.env.BOT_NAME || "Sir Cylee ❤️🧸",
  ownername: process.env.OWNER_NAME || "Cadillac Cylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
