import { FC, memo, Fragment } from "react";
import classNames from "classnames";

import cl from "./BillingCalls.module.scss";
import { BillingCallsProps } from "./BillingCalls.types";
import { useGetCallsListQuery } from "../../model/services/callsApi";

import { getFilteringCalls } from "features/FilteringCalls";
import { Call } from "entities/Call";
import { dateNow } from "shared/lib/helpers/dateNow";
import { useAppSelector } from "shared/lib/hooks/useStore";
import { VStack } from "shared/ui/Stack";
import { Loader } from "shared/ui/Loader";

export const BillingCalls: FC<BillingCallsProps> = memo((props) => {
    const { className } = props;

    const filteringCalls = useAppSelector(getFilteringCalls);
    const { data, isFetching } = useGetCallsListQuery(filteringCalls);

    const date = dateNow(new Date());

    return (
        <VStack
            justifyContent="center"
            className={classNames(cl.billing_calls, [className])}
        >
            {data?.results.map((call, index, array) => (
                <Fragment key={call.id}>
                    {index === 0 && <Call.Header />}
                    {call.date_notime !== date &&
                        array[index - 1]?.date_notime !== call.date_notime && (
                            <Call.Header date={call.date_notime} />
                        )}
                    <Call call={call} />
                </Fragment>
            ))}
            {isFetching && (
                <div className={cl.loader}>
                    <Loader />
                </div>
            )}
        </VStack>
    );
});

