import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, Navigate } from "react-router";
import TestPageA from "./TestPageA";
import TestPageB from "./TestPageB";

export default function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/testA" />} />
                <Route path="/testA" element={<TestPageA />} />
                <Route path="/testB" element={<TestPageB text="123" />} />
            </Routes>
        </BrowserRouter>
    );
}
