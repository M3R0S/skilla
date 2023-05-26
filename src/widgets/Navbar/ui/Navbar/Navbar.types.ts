export type NavbarPage = "main" | "calls";

export interface NavbarProps {
    className?: string;
    page: NavbarPage;
}

