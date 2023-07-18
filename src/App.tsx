import React from "react";
import logo from "./assets/logo.svg";
import "./App.css";
import { testUtil } from "./utils/test.util";
import Button from "./components/Button/Button";
import Labels from "./components/Labels/Labels";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countGetSetState } from "./recoil";

function App() {
    testUtil();
    console.log(`${123}`);

    const countValue = useRecoilValue(countGetSetState);
    const [, setCountValue] = useRecoilState(countGetSetState);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Labels labels={["Label", countValue.toString()]} />
                <br />
                <Button
                    label="Button"
                    onClick={() => {
                        console.log("BTN");
                        setCountValue(v => v + 1);
                    }}
                />
            </header>
        </div>
    );
}

export default App;
