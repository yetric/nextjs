import { Button } from "@components/Button";
import Link from "next/link";
import { useStores } from "../shared/hooks/use-stores";
import React from "react";
import { observer } from "mobx-react-lite";
import { withTitle } from "../shared/hoc/withTitle";
import { withLayout } from "../shared/hoc/withLayout";
import { asPage } from "../shared/hoc/asPage";

const Home = observer(() => {
    const { appStore } = useStores();
    return (
        <div>
            <p>Next JS opinonated setup</p>

            <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, illum, magni.
                Accusamus alias doloremque enim et eveniet facilis hic minima mollitia neque officia
                quis rerum sunt, ut vel, vitae voluptate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad at ea est
                ex facere in incidunt inventore ipsa molestias, natus officiis optio porro quaerat
                quod, reiciendis reprehenderit sint voluptatum.
            </p>

            <p>
                <Button>Default</Button>
                <Button type={"alert"}>Alert</Button>
                <Button type={"success"}>Success</Button>
                <Button type={"info"}>Info</Button>
                <Button type={"warning"}>Warning</Button>
            </p>

            <p>
                <Button size={"small"}>Default</Button>
                <Button size={"small"} type={"alert"}>
                    Alert
                </Button>
                <Button size={"small"} type={"success"}>
                    Success
                </Button>
                <Button size={"small"} type={"info"}>
                    Info
                </Button>
                <Button size={"small"} type={"warning"}>
                    Warning
                </Button>
            </p>

            <p>
                <Button size={"large"}>Default</Button>
                <Button size={"large"} type={"alert"}>
                    Alert
                </Button>
                <Button size={"large"} type={"success"}>
                    Success
                </Button>
                <Button size={"large"} type={"info"}>
                    Info
                </Button>
                <Button size={"large"} type={"warning"}>
                    Warning
                </Button>
            </p>

            <p>
                <Button size={"tiny"}>Default</Button>
                <Button size={"tiny"} type={"alert"}>
                    Alert
                </Button>
                <Button size={"tiny"} type={"success"}>
                    Success
                </Button>
                <Button size={"tiny"} type={"info"}>
                    Info
                </Button>
                <Button size={"tiny"} type={"warning"}>
                    Warning
                </Button>
            </p>

            <p>
                <Link href={"http://localhost:6006"}>
                    <a target={"_blank"}>Storybook</a>
                </Link>{" "}
                - <code>npm run storybook</code> before
            </p>

            <p>From Mobx:</p>
            {appStore.title}
            <br />
            {appStore.titleReversed}

            <p>
                <a
                    href={"#"}
                    onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                        event.preventDefault();
                        appStore.setTitle("Awesome MobX");
                    }}>
                    Set title to "Awesome Mobx"
                </a>
            </p>
        </div>
    );
});

export default asPage(Home, {
    title: "Yetric Next.js Homepage"
});
