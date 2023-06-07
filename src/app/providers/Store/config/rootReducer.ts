import { organizationSlice } from "features/ChangeOrganization";
import { filteringCallsSlice } from "features/FilteringCalls";
import { uiSlice } from "shared/ui/Ui";
import { rtkApi } from "shared/api/rtkApi";

export const rootReducer = {
    [rtkApi.reducerPath]: rtkApi.reducer,
    [organizationSlice.name]: organizationSlice.reducer,
    [uiSlice.name]: uiSlice.reducer,
    [filteringCallsSlice.name]: filteringCallsSlice.reducer,
};
