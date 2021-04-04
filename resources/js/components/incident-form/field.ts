export type FieldType = 'date' | 'time' | 'dropdown' | 'number';

interface _Field {
    readonly name: string,
    readonly value?: string,
    readonly label: string,
    readonly type?: FieldType,
    readonly autoComplete?: string,
    readonly placeholder?: string,
    readonly required?: boolean,
    readonly error?: (value: string | number, state: object) => boolean,
    readonly sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
    readonly marginDivider?: boolean,
    readonly updateValue?: (value) => any,
    items?: string[],
}

interface TextField extends _Field {
    readonly rows?: number
    readonly error?: (value: string, state: object) => boolean,
}

interface DropdownField extends _Field {
    readonly type: 'dropdown',
    readonly itemSelector: string,
    readonly error?: (value: string, state: object) => boolean,
}

interface NumberField extends _Field {
    readonly type: 'number',
    readonly inputProps?: { min?: number, max?: number },
    readonly error?: (value: number, state: object) => boolean,
}

interface DateField extends _Field {
    readonly type: 'date',
    readonly birthInput?: boolean,
    readonly error?: (value: string, state: object) => boolean,
}

interface TimeField extends _Field {
    readonly type: 'time',
    readonly minutesStep?: number,
    readonly error?: (value: string, state: object) => boolean,
}

export type Field = TextField | DropdownField | NumberField | DateField | TimeField;
