import { observer } from "mobx-react-lite";
import { asPage } from "../shared/hoc/asPage";
import React from "react";
import { Form } from "@components/Form";
import { FormItem } from "@components/FormItem";
import { Button } from "@components/Button";
import { Checkbox } from "@components/Checkbox";
import { Card } from "@components/Card";

const Login = observer(() => {
    return (
        <div>
            <Form>
                <FormItem placeholder={"Your e-mail address"} label={"E-mail"} type={"email"} />
                <FormItem
                    placeholder={"A secure password"}
                    label={"Password"}
                    type={"password"}
                    help={"At least 8 characters long "}
                />

                <Checkbox
                    onChange={(checked) => {
                        console.log(checked ? "checked" : "not checked");
                    }}
                    label={"I totally agree to everything"}
                    value={1}
                />

                <Button size={"large"}>Login</Button>
                <Card>Holy Smoke</Card>
            </Form>
        </div>
    );
});

export default asPage(Login, {
    title: "Login to Yetric Next.js"
});
