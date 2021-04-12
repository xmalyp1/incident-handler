export type FieldType = 'date' | 'time' | 'dropdown' | 'number' | 'checkbox';
export type ValueType = Date | number | string | boolean;

const now = new Date();

export const getDefaultValue = (type: FieldType): ValueType => {
    switch (type) {
        case 'date':
        case 'time':
            return now;
        case 'number':
            return 0
        case 'checkbox':
            return false
        default:
            return '';
    }
}

export const getFromStringConverter = (type: FieldType): ((string) => ValueType) => {
    switch (type) {
        case 'date':
        case 'time':
            return value => Date.parse(value);
        case 'number':
            return value => parseInt(value);
        default:
            return value => value;
    }
}
