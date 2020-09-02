import { Button } from "@components/Button";
import Link from "next/link";
import { useStores } from "../shared/hooks/use-stores";
import React from "react";
import { observer } from "mobx-react-lite";
import { asPage } from "../shared/hoc/asPage";
import { Container } from "@components/Container";
import { Table } from "@components/Table";
import { Spinner } from "@components/Spinner";
import "../core/icons";
import { Card } from "@components/Card";
import { Icon } from "@components/Icon";

const Home = observer(() => {
    const { appStore } = useStores();
    return (
        <div>
            <p>Next JS opinonated setup</p>

            <Container>
                <h2>A Container with Text</h2>
                <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, illum,
                    magni. Accusamus alias doloremque enim et eveniet facilis hic minima mollitia
                    neque officia quis rerum sunt, ut vel, vitae voluptate.
                </p>
                <p>
                    string Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad
                    at ea est ex facere in incidunt inventore ipsa molestias, natus officiis optio
                    porro quaerat quod, reiciendis reprehenderit sint voluptatum.
                </p>

                <ul>
                    <li>Lorem ipsum dolor sit amet consectetuer.</li>
                    <li>Aenean commodo ligula eget dolor.</li>
                    <li>Aenean massa cum sociis natoque penatibus.</li>
                </ul>

                <Card>
                    <h4>Card header</h4>
                    <p>
                        Lorem ipsums dsdsdolor sit amet, consectetur adipisicing elit. Dicta dolores
                        fuga iste magni minima necessitatibus nobis tenetur vel. Aliquid animi eos
                        ex iusto magni maiores nemo quasi quisquam, quod sapiente?
                    </p>
                </Card>

                <Spinner />

                <div>
                    <Icon name={"check-square"} size={"lg"} />
                    <Icon name={"apple"} type={"fab"} size={"8x"} />
                    <Icon name={"address-book"} />
                </div>
                <blockquote>
                    Gregor then turned to look out the window at the dull weather. Drops of rain
                    could be heard hitting the pane, which made him feel quite sad. "How about if I
                    sleep a little bit longer and forget all this nonsense", he thought, but that
                    was something he was unable to do because he was used to sleeping on his right,
                    and in his present state couldn't get into that position. However hard he threw
                    himself onto his right, he always rolled back to where he was.
                </blockquote>

                <Table
                    tight={true}
                    headers={["A", "B Header", "Another", "Zissly"]}
                    data={[
                        ["A", "B", "C", "D"],
                        ["E", "F", "G", "H"]
                    ]}
                />

                <p>
                    <Link href={"/login"}>
                        <a>Login</a>
                    </Link>
                </p>

                <Button type={"success"}>Success</Button>
            </Container>

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
