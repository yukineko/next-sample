import  { PrismaClient } from '@prisma/client'
import { ShaTS }  from 'sha-ts';
const prisma = new PrismaClient()

const main = async () => {
    const user = await prisma.user.create({
        data: {
            username: 'hogehoge',
            password: ShaTS.sha256('payopayo'),
            //password: 'payopayo', // 直接保存するとパスワードが
        }
    })
    console.log('User created:', user)
}
main().catch(e => {
    console.error(e)
    process.exit(1)
});