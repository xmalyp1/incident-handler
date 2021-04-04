export type FieldType = 'date' | 'time' | 'dropdown' | 'number';
type ValueType = Date | number | string;

const now = new Date();

export const getDefaultValue = (type: FieldType): ValueType => {
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
