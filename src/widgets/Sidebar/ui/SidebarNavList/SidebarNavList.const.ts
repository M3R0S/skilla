import { SidebarNavList } from "./SidebarNavList.types";

import { ReactComponent as TimelineSvg } from "shared/assets/svg/sidebar/chart-timeline-variant.svg";
import { ReactComponent as BriefcaseSvg } from "shared/assets/svg/sidebar/briefcase-outline.svg";
import { ReactComponent as CallsSvg } from "shared/assets/svg/sidebar/calls-24px.svg";
import { ReactComponent as DocumentSvg } from "shared/assets/svg/sidebar/documents-24px.svg";
import { ReactComponent as LibrarySvg } from "shared/assets/svg/sidebar/local_library_black_24dp.svg";
import { ReactComponent as MailSvg } from "shared/assets/svg/sidebar/mail_outline-24px.svg";
import { ReactComponent as OrdersSvg } from "shared/assets/svg/sidebar/orders-24px.svg";
import { ReactComponent as PeopleSvg } from "shared/assets/svg/sidebar/people-24px.svg";
import { ReactComponent as IdentitySvg } from "shared/assets/svg/sidebar/perm_identity_black_24dp.svg";
import { ReactComponent as SettingsSvg } from "shared/assets/svg/sidebar/settings-24px.svg";

export const sidebarNavList: SidebarNavList[] = [
    {
        id: 1,
        Svg: TimelineSvg,
        title: "Итоги",
        to: "/results",
    },
    {
        id: 2,
        Svg: OrdersSvg,
        title: "Заказы",
        to: "/orders",
    },
    {
        id: 3,
        Svg: MailSvg,
        title: "Сообщения",
        to: "/messages",
    },
    {
        id: 4,
        Svg: CallsSvg,
        title: "Звонки",
        to: "/calls",
    },
    {
        id: 5,
        Svg: PeopleSvg,
        title: "Контрагенты",
        to: "/counterparties",
    },
    {
        id: 6,
        Svg: DocumentSvg,
        title: "Документы",
        to: "/documents",
    },
    {
        id: 7,
        Svg: IdentitySvg,
        title: "Исполнители",
        to: "/performers",
    },
    {
        id: 8,
        Svg: BriefcaseSvg,
        title: "Отчеты",
        to: "/reports",
    },
    {
        id: 9,
        Svg: LibrarySvg,
        title: "База знаний",
        to: "/knowledge-base",
    },
    {
        id: 10,
        Svg: SettingsSvg,
        title: "Настройки",
        to: "/settings",
    },
];

