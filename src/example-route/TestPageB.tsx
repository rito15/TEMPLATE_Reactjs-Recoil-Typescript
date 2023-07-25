import React from "react";

type Props = {
    text: string;
};

const TestPageB: React.FC<Props> = ({ text }) => {
    return (<div>
        Test B: {text}
    </div>);
};
export default TestPageB;
