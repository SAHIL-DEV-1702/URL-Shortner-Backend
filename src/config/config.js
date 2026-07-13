
const isProduction = process.env.NODE_ENV === 'production';

export const cookiesOption = {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? 'none' : 'lax',
    maxAge: 1000 * 60 * 30,
}
