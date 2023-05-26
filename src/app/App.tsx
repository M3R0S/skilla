import { AppRouter } from "./providers/Router/ui/AppRouter";

import { Sidebar } from "widgets/Sidebar";
import { HStack } from "shared/ui/Stack";

export const App = () => {
    return (
        <HStack>
            <Sidebar />
            <AppRouter />
        </HStack>
    );
};

