const { Client, IntentsBitField, ActivityType } = require("discord.js")
require("dotenv").config();

const client = new Client({
    intents: [
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.Guilds
    ]
});

client.on("ready", (ready) => {
    client.user.setActivity("DEV")
    console.log(`✅ Logged in as ${client.user.displayName}`)
    console.log(`ℹ️ Use this Link to invite your Bot: https://discord.com/oauth2/authorize?client_id=${client.user.id}`)
    console.log(`Status: ${client.user.presence.status}`)
    console.log(`Activity: ${client.user.presence.activities}`)
})

client.login(process.env.TOKEN);