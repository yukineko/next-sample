'use client'
import { ReactNode, use } from "react";
import { FormProvider, useForm } from "react-hook-form";
type LayoutProps = {
  children: ReactNode;
};
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
export type FormValues = z.infer<typeof schema>;

export default function Layout({ children }: LayoutProps)  {
    const methods = useForm<FormValues>({
        resolver: zodResolver(schema),
    });

  return <FormProvider {...methods}>{children}</FormProvider>;
}