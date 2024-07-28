const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "233549698679";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_06_07_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDk4LFxuICAgICAgICA5MSxcbiAgICAgICAgODksXG4gICAgICAgIDkzLFxuICAgICAgICAyMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE3LFxuICAgICAgICA0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MCxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTksXG4gICAgICAgIDk3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDY0LFxuICAgICAgICAxOCxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgODYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4NyxcbiAgICAgICAgMTMzLFxuICAgICAgICA3NixcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDc0LFxuICAgICAgICA3MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDg2LFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzksXG4gICAgICAgIDExNixcbiAgICAgICAgNTIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjksXG4gICAgICAgIDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNSxcbiAgICAgICAgMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxODMsXG4gICAgICAgIDc2LFxuICAgICAgICA3MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDkyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYjBrcytJdlNYbmgyMGJLSGtrQVhKNXVtK2lQYU1Pb2hPTHVxdXo4K1N4Yz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWjNmZGhpZmhSQnVOeTZuRnV1TXR0QVwiLFxuICBcInBob25lSWRcIjogXCJiNjA4NmQwZi0xYTI3LTRjZGMtYjYxMy00OWJiZjZhNjBhYThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMxLFxuICAgICAgMjQ1LFxuICAgICAgMTA1LFxuICAgICAgMTQ0LFxuICAgICAgNjYsXG4gICAgICAxOTksXG4gICAgICAyNTAsXG4gICAgICAxNDksXG4gICAgICAzMyxcbiAgICAgIDUxLFxuICAgICAgMTY2LFxuICAgICAgMjAyLFxuICAgICAgNDQsXG4gICAgICA0MCxcbiAgICAgIDE1NSxcbiAgICAgIDE5NSxcbiAgICAgIDE5OSxcbiAgICAgIDIxNixcbiAgICAgIDQ1LFxuICAgICAgNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAxNDgsXG4gICAgICAxNTIsXG4gICAgICAxNTYsXG4gICAgICAyMzIsXG4gICAgICAyMzQsXG4gICAgICA4MyxcbiAgICAgIDE0NSxcbiAgICAgIDE2OSxcbiAgICAgIDI0NixcbiAgICAgIDE1MyxcbiAgICAgIDk5LFxuICAgICAgOTAsXG4gICAgICAxMzcsXG4gICAgICAyMTgsXG4gICAgICA5NixcbiAgICAgIDg1LFxuICAgICAgMTksXG4gICAgICAyMjMsXG4gICAgICAxNDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVlQ1NFFITEhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzU0OTY5ODY3OTozQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSW1wYXJ0IEFjYWRlbXlcIixcbiAgICBcImxpZFwiOiBcIjE3MjYyMzM0MjM4NzI5NDozQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xIMXFIUVF6WWVYdFFZWUF5QUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaWFIZE5tdElxbVhIVy9XK3E5VE5WSHlBZzYzb29xRkZIV1FEMVl2NnFnTT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ3OUQ3ZS93RTA3Y1NUVnNBVWN2SWNVNURlTlZGQ2gzQWxqZnM4N2JMQU5qVGhiQjVsVU5EM3FOdllHM0I0TjlkeFlSNk5kN1I5QStPUDRTRnh1NU9BUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIybWw5VTdKNlVuSm96UDNnMktGZ3JROUFVQTFOTlZSRTVNU0cxbE0vSmZQUnp3Sm5GUk1zR1YwU3lVakVaSDFodnVSbjZiTVYvc29VWjJzNE5UTmpqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1NDk2OTg2Nzk6M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMTM5NjAwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRGdlXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFEZ2UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJLNlhOSzNTUjV0eEtXWVlRdTIrY2ZGZDdNNDRzTlhSV05wSkN0WnovQ2R3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0Mzk0MDAxNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMTM4MjU4MzY2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
