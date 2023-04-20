import { useSession, signIn, signOut } from "next-auth/react";

const LoginBtn = () => {
    const { data: session, status } = useSession();

    if (status === "loading") return <p>Chargement</p>;

    if (session)
        return (
            <>
                {console.log(session)}
                {session?.user ? (
                    <div>
                        Connecté en tant que {session.user.name} <br />
                        <div>
                            <span
                                style={{
                                    backgroundImage: `url('${session.user.image}')`,
                                    display: "block",
                                    width: 128,
                                    height: 128,
                                }}
                            />
                        </div>
                        <button onClick={() => signOut()}>Se déconnecter</button>
                    </div>
                ) : (
                    false
                )}
            </>
        );

    return (
        <div>
            Vous n&apos;êtes pas connecter <br />
            <button onClick={() => signIn()}>Se connecter</button>
        </div>
    );
};

export default LoginBtn;
