import parts from "./parts";
import {retrieveData} from "../../common/localStorageUtils";
import {FieldType} from "./field";

const now = new Date();

const getDefaultValue = (type: FieldType): Date | number | string => {
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

export const addDropdownItems = (field: string, props): void => {
    parts[0].fields.find(e => e.name === field).items = JSON.parse(props[field]);
}

export const getInitData = (): {} => retrieveData() ?? initState;
