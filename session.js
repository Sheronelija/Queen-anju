//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0VJdXJ4REdGMzlVVEQ3VnhMQmtqMDNOWUtpOFdjYmNFZVVjRzIyV3FIQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaHNZMUNpSmYxNnVRQUt1TmkxU2pHZ2dHYjRBeitVaFZIcGlMV0djS1FFcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RkFUaVlzeFhqeHZWNkZQQUNneWE0eFFEc0pPNjJQV1VMemF1bVVQZUZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtMFFqd1pTUFk2STN5MGhkOFkxTE56Y3Jqb2ZNVU9vS3pPOCtWc2hZVkQ0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFbHFpRVFZODRuTU1xMnVoanl3R25uMHFicHYzOFJ3MDdWUVhKQjJSblE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklBVWlwY2JGaVJUNVBhWG5BMkQwRWtMemx3TDcrdHUwQTdYeTFobXptMG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU9PQnpUMHFoNkhZUFlNREJUbkNJQ28wWGk0WkVhdW4xZUk5UnA2VUlXMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFdTSGc2QkdLd2UwUWw1M3VLdmZVNkZaN3ZRVzhmbUN0eWI2SEpnTm9XOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBleC9TMDNaVStQNGFRVUdmMnZmaHoraVZiaEp1eCsyYzNpcjlrVzRZS3gwVUFXUjVMdmYzaHd5d3lJR1pYRzBhRmNXN1FxZUlHYVNGRWlBdWlPRmdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDMsImFkdlNlY3JldEtleSI6IithWjZIV2loakQ0YWRJOGR4QTJWelZ1WlBmSXd3TlpKeDg0alV6U1BobTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikw1UW5WOVBoUmxtaUFFVmc3Q2Nic2ciLCJwaG9uZUlkIjoiZWZhN2U2MTQtZTU2YS00ZjIxLTg0ZmItN2UyMGMwMmNjNzNkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpVdFBwY2k2U3NuWjdOcDE1MDFGRlBNZ1h5TT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrZERlRjJiMnFXbGFoWVZDeXlVaW5NOENkUE09In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTEZON01FQ1EiLCJtZSI6eyJpZCI6Ijk0NzU3OTUwODAxOjQyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiNDMyMTY2MTUzMDUzNzc6NDJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKbVFnT1VGRVB2MjJzSUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyVGxWRlFDMy9kR3ZZNG9yY3F6a1NUazliMURobXhaUERPbUh4ZnZBQWgwPSIsImFjY291bnRTaWduYXR1cmUiOiJ0NE1lZWcyT0ZlYXNXM1Q4c1V3ckFqV1JuYnZGQ2VuZ3gyYnhBS09rbFBackl1L0NKWURiVUJhMWwyTEF3aHBMWXdWZnRoZ0NRRWhlbUpSZkFjWUlDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRG44bGtvMlZxVk1Eb0dYNU5EelpMblJMLzljdTVqN3BQcDZVQ1FreHFVSjFGQmRpQ1ppUjFiamE1OFQzRkNxbHBGMG1Ydm10S3NqTlRGSzNScFhlaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1Nzk1MDgwMTo0MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhMDVWUlVBdC8zUnIyT0tLM0tzNUVrNVBXOVE0WnNXVHd6cGg4WDd3QUlkIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQU1JRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA1MTQ1NjgsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFCc0FBTjl6In0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "2009",
  PASSWORD: 
    process.env.PASSWORD || "sew123",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94770349867", "94757950801"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
