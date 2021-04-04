import {Field} from './field';

export interface Part {
    readonly name: string,
    readonly label: string,
    readonly optional?: boolean,
    readonly fields: ReadonlyArray<Field>,
}
