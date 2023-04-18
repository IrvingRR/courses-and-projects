import { getSchoolClassServie } from "../../services";

export const startReadSchoolClassThunk = (id) => {

    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const result = await getSchoolClassServie(uid, id);

    };

};