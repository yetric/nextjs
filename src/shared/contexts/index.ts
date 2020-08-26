import React from "react";
import { AppStore } from "../stores/AppStore";

export const storesContext = React.createContext({
    appStore: new AppStore()
});
