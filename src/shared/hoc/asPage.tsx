import React from "react";
import { withTitle } from "./withTitle";
import { withLayout } from "./withLayout";

interface PageProps {
    title?: string;
}

export const asPage = (Component: React.ComponentType, settings: PageProps = {}) => {
    return withLayout(withTitle(Component, settings.title));
};
