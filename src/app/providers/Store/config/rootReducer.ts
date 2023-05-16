import { organizationSlice, organizationReducer } from "features/ChangeOrganization";

export const rootReducer = {
    [organizationSlice.name]: organizationReducer,
};

