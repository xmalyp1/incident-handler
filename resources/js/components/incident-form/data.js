import parts from "./parts";
import {retrieveData} from "../../common/localStorageUtils";

const now = new Date();

const getDefaultValue = (type) => {
    switch (type) {
        case 'date':
        case 'time':
            return now;
        case 'number':
            return 0
        default:
            return '';
    }
}

const initState = parts.reduce((data, part) => ({
    ...data,
    [part.name]: part.fields.reduce((state, field) => ({
        ...state,
        [field.value ?? field.name]: getDefaultValue(field.type)
    }), {})
}), {});

export const getInitData = () => retrieveData() ?? initState;
