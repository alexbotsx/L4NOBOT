let handler = async (m, { conn, usedPrefix, isOwner }) => {
    m.react('👤')
    let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:lino_h4ackn;;\nFN:lino_h4ackn\nORG:lino_h4ackn\nTITLE:\nitem1.TEL;waid=51967010446:51967010446\nitem1.X-ABLabel:lino_h4ackn\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:lino_h4ackn\nEND:VCARD`
    await conn.sendMessage(m.chat, { contacts: { displayName: 'lino_h4ackn⁩', contacts: [{ vcard }] } }, { quoted: m })
}
handler.help = ['staff']
handler.tags = ['main']
handler.command = ['owner', 'dueño', 'creador']

export default handler
