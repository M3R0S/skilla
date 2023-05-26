import { FC, memo } from "react";

import cl from "./CallsPage.module.scss";

import { BillingCalls, useGetCallsListQuery } from "widgets/BillingCalls";
import { Navbar } from "widgets/Navbar";
import { ControlCalls } from "widgets/ControlCalls";
import {
    getFilteringCalls,
    getFilteringCallsLimit,
    filteringCallsActions,
} from "features/FilteringCalls";
import { useAppDispatch, useAppSelector } from "shared/lib/hooks/useStore";
import { Page } from "shared/ui/Page";

const CallsPage: FC = memo(() => {
    const dispatch = useAppDispatch();
    const filteringCallsLimit = useAppSelector(getFilteringCallsLimit);
    const filteringCalls = useAppSelector(getFilteringCalls);
    const { data } = useGetCallsListQuery(filteringCalls);

    const callback = () => {
        if (data && data.results.length < Number(data.total_rows)) {
            dispatch(filteringCallsActions.setLimit(String(Number(filteringCallsLimit) + 100)));
        }
    };

    return (
        <Page
            onScrollEnd={callback}
            className={cl.calls_page}
        >
            <Navbar page="calls" />
            <ControlCalls />
            <BillingCalls />
        </Page>
    );
});

export default CallsPage;
