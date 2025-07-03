'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
const schema = z.object({
    name: z.string().min(1, "名前は必須です"),
    email: z.string().min(1, "Emailは必須です").email("Invalid email "),
    address: z.string().min(1, "住所は必須です"),
    gender: z.enum(["male", "female"], {
        errorMap: () => ({ message: "性別は必須です" }),
    }),
    agree: z.boolean().refine((val) => val === true, {
        message: "利用規約に同意する必要があります"
    })
});
type FormValues = z.infer<typeof schema>;
export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
    });
    const onSubmit = (data: any) => {
        console.log(data);
    };
    return (
        <div className={styles.page}>
        <main className={styles.main}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.field}>
                <input type="text"  placeholder="名前" {...register('name')}/>
                {errors.name && <p className={styles.error}>{errors.name.message}</p>}
                </div>
                <div className={styles.field}>
                    <input type="email" placeholder="Email" {...register('email')}/>
                    {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                </div>
                <div className={styles.field}>
                    <input type="text" placeholder="住所" {...register('address')}/>
                    {errors.address && <p className={styles.error}>{errors.address.message}</p>}
                </div>
                <div className={`${styles.field} ${styles.radio_group}`}>
                    <div>
                        <p>性別</p>
                    </div>
                    <div>
                        <input type="radio" value="female" id="lady" {...register('gender')}/>
                        <label htmlFor="#lady" >女性</label>
                    </div>
                    <div>
                        <input type="radio" value="male" id="gentleman" {...register('gender')}/>
                        <label  htmlFor="#gentleman">男性</label>
                    </div>
                    {errors.gender && <p className={styles.error}>{errors.gender.message}</p>}
                </div>
                <div className={`${styles.field} ${styles.checkbox} ${styles.flex_center}`}>
                    <div>
                        <input type="checkbox" id="agree"  {...register('agree')}/>
                        <label htmlFor="agree">利用規約に同意する</label>
                    </div>                
                </div>
                {errors.agree && <p className={styles.error}>{errors.agree.message}</p>}
                <div className={styles.field}>
                    <button type="submit">送信</button>
                </div>
            </form>
        </main>
        <footer className={styles.footer}>
            <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/file.svg"
                alt="File icon"
                width={16}
                height={16}
            />
            Learn
            </a>
            <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/window.svg"
                alt="Window icon"
                width={16}
                height={16}
            />
            Examples
            </a>
            <a
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            >
            <Image
                aria-hidden
                src="/globe.svg"
                alt="Globe icon"
                width={16}
                height={16}
            />
            Go to nextjs.org →
            </a>
        </footer>
        </div>
    );
}
