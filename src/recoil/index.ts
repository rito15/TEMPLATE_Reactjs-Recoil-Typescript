import { atom, selector } from "recoil";

// State
const countTestState = atom<number>({
    key: "countTest",
    default: 0
});

// State Getter/Setter
export const countGetSetState = selector<number>({
    key: "countGetSetTest",
    get: ({ get }) => {
        return get(countTestState);
    },
    set: ({ set }, nextValue) => {
        set(countTestState, nextValue);
    }
});
