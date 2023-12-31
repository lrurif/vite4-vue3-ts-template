import { defineStore, StoreDefinition } from "pinia";

type state = {
    userName: string
    token: string
}
type getters = {
}
type actions = {
}
const useUserStore: StoreDefinition<
"user",
    state,
    getters,
    actions
> = defineStore("user", {
    state: () => {
        return {
            userName: "",
            token: "123"
        };
    },
    persist: true,
});
export default useUserStore;
