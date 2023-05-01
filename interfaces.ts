export interface BaseInterface {
    foo: string,
    bar: number
}

export interface GenericInterface<V> extends BaseInterface {
    value: V
}