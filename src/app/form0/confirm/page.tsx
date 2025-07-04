'use client'
import { useFormContext } from "react-hook-form";

export default function ConfirmPage() {
    const methods = useFormContext();
    const {getValues} = methods;
    const formData = getValues();
    console.log("Form Data:", formData);
    return (
        <div>
            <h1>確認ページ</h1>
            <p>ここでは、入力内容の確認ができます。</p>
            <p>このページは、フォームの送信後に表示されることを想定しています。</p>
            <p>実際のアプリケーションでは、ここで入力内容を表示し、ユーザーに確認を求めることが一般的です。</p>
        </div>
    );
}