export type Maybe<T> = T | undefined

export type Nullable<T> = T | null

export declare type ValidPropType = string | number | symbol

export type ArrayElement<
	ArrayType extends readonly unknown[]
> = ArrayType[number]
