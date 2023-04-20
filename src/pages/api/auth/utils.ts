import { JWT } from "next-auth/jwt";

export const getUserGuild = async (token: JWT) => {
    const res = await fetch(`https://discord.com/api/users/@me/guilds/${process.env.DISCORD_SERVER_ID}/member`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token.accessToken}`,
        },
    });

    const json = res.json();
    return json;
};

export const getGuildRoles = async () => {
    const res = await fetch(`https://discord.com/api/guilds/${process.env.DISCORD_SERVER_ID}/roles`, {
        method: "GET",
        headers: {
            Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
    });
    const json = res.json();
    return json;
};

export const revokeToken = (token: JWT) => {
    fetch("https://discord.com/api/oauth2/token/revoke", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `client_id=${process.env.DISCORD_CLIENT_ID}&client_secret=${process.env.DISCORD_CLIENT_SECRET}&token=${token.accessToken}`,
    });
};
