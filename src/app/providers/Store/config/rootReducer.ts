import { callsApi } from "widgets/BillingCalls";
import { organizationSlice } from "features/ChangeOrganization";
import { filteringCallsSlice } from "features/FilteringCalls";
import { uiSlice } from "shared/ui/Ui";

export const rootReducer = {
    [organizationSlice.name]: organizationSlice.reducer,
    [callsApi.reducerPath]: callsApi.reducer,
    [uiSlice.name]: uiSlice.reducer,
    [filteringCallsSlice.name]: filteringCallsSlice.reducer,
};

