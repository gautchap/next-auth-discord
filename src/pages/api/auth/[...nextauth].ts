import NextAuth, { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { getUserGuild, getGuildRoles, revokeToken } from "./utils";
import type { GuildObj, Roles } from "utils-types";

const scopes: string = ["identify", "email", "guilds.members.read"].join(" ");

export const authOptions: NextAuthOptions = {
    events: {
        async signOut({ token }) {
            revokeToken(token);
        },
    },

    providers: [
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            authorization: { params: { scope: scopes } },
        }),
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.id;
            // session.accessToken = token.accessToken;

            const guild: GuildObj = await getUserGuild(token);

            const roles: Roles = await getGuildRoles();

            const userRoles = roles
                ?.filter((role) => guild?.roles?.includes(role.id))
                .map((role) => ({ id: role.id, name: role.name }));

            session.user.roles = userRoles;

            return session;
        },
        async jwt({ token, user, account }) {
            if (user) {
                token.id = user.id;
            }
            if (account) {
                token.accessToken = account.access_token;
            }
            return token;
        },
    },
};
export default NextAuth(authOptions);
