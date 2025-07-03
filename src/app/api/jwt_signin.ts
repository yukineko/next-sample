export function jwtSignin() {
    return new Response(
        JSON.stringify({
            message: "JWT Signin API is not implemented yet.",
        }),
        {
            status: 501,
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
}