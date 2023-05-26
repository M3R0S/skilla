import { FC } from "react";

import { HStackProps } from "./HStack.types";
import { Flex } from "../Flex/Flex";

export const HStack: FC<HStackProps> = (props) => {
    return (
        <Flex
            alignItems="center"
            direction="row"
            {...props}
        />
    );
};

