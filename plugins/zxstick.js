/* Copyright (C) 2021 TENUX-Neotro.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
NEOTROX - TEENUHX
Wa.me/+94766598862
*/

const Asena = require('../events');
const Config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
let tn = Config.WORKTYPE == 'public' ? false : true
let ad = Config.WORKTYPE == 'public' ? true : true   

if (Config.ADULT_MODE == 'on') {    
Asena.addCommand({pattern: 'feetggif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/feetg?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*👸ꜱᴛᴇꜰᴀɴɪᴇ👸*'})

    }));

Asena.addCommand({pattern: 'pussygif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/pussy?apikey=${Config.NEOA}`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*👸ꜱᴛᴇꜰᴀɴɪᴇ👸*'})

    }));

Asena.addCommand({pattern: 'kunigif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/kuni?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*👸ꜱᴛᴇꜰᴀɴɪᴇ👸*'})

    }));

Asena.addCommand({pattern: 'analgif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/anal?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*👸ꜱᴛᴇꜰᴀɴɪᴇ👸*'})

    }));

Asena.addCommand({pattern: 'spankgif ?(.*)', fromMe: tn, dontAddCommandList: true}, (async (message, match) => {
var respoimage = await axios.get(`https://${Config.NEOS}.${Config.NEOY}/api/anime/nsfw/spank?apikey=aca83a4354ac`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid,Buffer.from(respoimage.data), MessageType.document, {mimetype: Mimetype.gif, caption: '*👸ꜱᴛᴇꜰᴀɴɪᴇ👸*'})

    }));
}
