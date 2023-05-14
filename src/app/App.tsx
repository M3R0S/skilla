import { AppRouter } from "./providers/Router/ui/AppRouter";

import { Sidebar } from "widgets/Sidebar";
import { Navbar } from "widgets/Navbar";
import { HStack, VStack } from "shared/ui/Stack";

export const App = () => {
    return (
        <HStack>
            <Sidebar />
            <VStack>
                <Navbar />
                <AppRouter />
            </VStack>
        </HStack>
    );
};

