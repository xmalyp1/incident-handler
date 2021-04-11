import parts from "./parts";
import {retrieveData} from "../../common/localStorageUtils";
import {getDefaultValue} from "./fieldType";

/*
const initState = parts.reduce((data, part) => ({
    ...data,
    [part.name]: part.fields.reduce((state, field) => ({
        ...state,
        [field.value ?? field.name]: getDefaultValue(field.type)
    }), {})
}), {});
*/


const callbackFn = (data,part) => ({
    ...data,
    [part.name]: part.fields.reduce(getDefaultValueOfField,{})
});

const getDefaultValueOfField = (state,field) => ({
    ...state, // init value (not sure if needed)
    [field.name]:getDefaultValue(field.type)
})

const initState = parts.reduce(callbackFn,{});

export const addDropdownItems = (field: string, props): void => {
    parts[0].fields.find(e => e.name === field).items = JSON.parse(props[field]);
}



export const getInitData = () => {
   let initData = retrieveData() ?? initState;
   return initData;
}
