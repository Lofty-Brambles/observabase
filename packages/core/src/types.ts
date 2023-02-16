// export type Primitives =
// 	| "string"
// 	| "number"
// 	| "bigint"
// 	| "boolean"
// 	| "symbol"
// 	| "undefined";

export type Base = Record<PropertyKey, any>;

export type Observer = (newValue?: any, oldValue?: any) => void;

export type Options = {
	observers: Map<string, Set<Observer>>;
};

export type MetaData<T> = {
	_o: Map<string, Set<Observer>>;
	_p: Reactive<T> | undefined;
	_on: (path: Path<T>, cb: Observer) => void;
	_off: (path: Path<T>, cb: Observer) => void;
};

export type Reactive<T> = {
	[K in keyof T]: T[K] extends Base ? Reactive<T[K]> : T[K];
} & MetaData<T>;

type SEP = ".";

/**
 * This checks iff string is valid, checks if its an object's key, else, it
 * recurses with a seperator if it's an object, removes the excess for arraylikes
 */
type PathBits<T, K extends keyof T> = K extends string
	? T[K] extends Record<string, any>
		? T[K] extends ArrayLike<any>
			? K | `${K}${SEP}${PathBits<T[K], Exclude<keyof T[K], keyof any[]>>}`
			: K | `${K}${SEP}${PathBits<T[K], keyof T[K]>}`
		: K
	: never;

/**
 * pathBits along with the keys of objects as a default
 */
export type Path<T> = keyof T | PathBits<T, keyof T>;
