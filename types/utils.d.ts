declare module "utils-types" {
    interface GuildObj {
        user?: {
            id: string;
            username: string;
            discriminator: string;
            avatar: string;
            bot?: boolean;
            system?: boolean;
            mfa_enabled?: boolean;
            banner?: string;
            accent_color?: number;
            locale?: string;
            verified?: boolean;
            email?: string;
            flags?: number;
            premium_type?: number;
            public_flags?: number;
        };
        nick?: string;
        avatar?: string;
        roles: string[];
        joined_at: Date;
        premium_since?: Date;
        deaf: boolean;
        mute: boolean;
        flags: number;
        pending?: boolean;
        permissions?: string;
        communication_disabled_until?: Date;
    }

    interface Roles {
        id: string;
        name: string;
        color: number;
        hoist: boolean;
        icon?: string;
        unicode_emoji?: string;
        position: number;
        permissions: string;
        managed: boolean;
        mentionable: boolean;
        tags?: object;
    }
}
