import { observer } from "mobx-react-lite";
import { asPage } from "../shared/hoc/asPage";
import React from "react";
import { Form } from "@components/Form";
import { FormItem } from "@components/FormItem";

const Login = observer(() => {
    return (
        <div>
            <Form>
                <FormItem
                    placeholder={"Your e-mail address"}
                    label={"E-mail"}
                    type={"email"}
                    value={""}
                />
                <FormItem
                    placeholder={"A secure password"}
                    label={"Password"}
                    type={"password"}
                    value={""}
                />
            </Form>
        </div>
    );
});

export default asPage(Login, {
    title: "Login to Yetric Next.js"
});
