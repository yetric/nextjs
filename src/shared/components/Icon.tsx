import React from "react";
import styles from "./styles/Icon.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

interface IconProps {
    name: IconName;
    type?: IconPrefix | null;
    size?: SizeProp;
}

export const Icon = ({ name, type = "far", size = "1x" }: IconProps) => {
    return <FontAwesomeIcon className={styles.base} size={size} icon={[type, name]} />;
};
