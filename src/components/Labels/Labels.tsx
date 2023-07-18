import React from "react";

type LabelsProps = {
    labels: string[];
};

const Labels: React.FC<LabelsProps> = ({ labels }) => {
    return <div>{labels.join(", ")}</div>;
};
export default Labels;
