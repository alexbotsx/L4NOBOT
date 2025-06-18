let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `@ilino_h4ack ${pesan}`
  let teks = `𝑨𝑪𝑻𝑰𝑽𝑬𝑵𝑺𝑬 𝑽𝑽𝑺
${oi}\n\n ── 𝑬𝑻𝑰𝑸𝑼𝑬𝑻𝑨\n`
  for (let mem of participants) {
  teks += `🙈💞@${mem.id.split('@')[0]}\n`}
  teks += `└𝑳𝟒𝒏𝒐𝑩𝒐𝒕`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten|sia)$/i
  handler.admin = true
  handler.group = true
  export default handler