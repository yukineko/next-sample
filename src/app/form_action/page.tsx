"use client";

import { register } from "module";
import { useActionState } from "react";
import { FormState } from "react-hook-form";
interface InputForm {
    exampleInput: string;
}
async function signup(state:any, form:FormData) {
    console.log(state)
    console.log(form)
    const exampleInput = form.get('exampleInput')
    console.log(exampleInput)
}
export default function FormActionPage() {
    const [state, action] = useActionState(signup, null)
    return (
        <div>
        <h1>Form Action Page</h1>
        <p>This page demonstrates the use of form actions in a Next.js application.</p>
        <form action={action} method="POST">
            <input type="text" name="exampleInput" placeholder="Type something..." required />
            <button type="submit">Submit</button>
        </form>
        </div>
    );
}