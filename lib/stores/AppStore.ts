import {action, computed, observable} from "mobx";

export class AppStore {
    @observable title: string = "some example string";

    @action
    setTitle(title: string) {
        this.title = title;
    }

    @computed
    get titleReversed(): string {
        return this.title.split("").reverse().join("");
    }
}
