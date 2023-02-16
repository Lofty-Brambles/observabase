import type { Base, MetaData, Observer, Options, Path } from "@/types";

/* Helper data */
const defs: Options = {
	observers: new Map(),
};

/* Helper functions */
const isObject = (data: unknown) => typeof data === "object" && data !== null;

const isProxy = (data: object) => true;

// @todo make any data-type reactive
export const reactify = <T extends Base>(raw: T, options: Options = defs) => {
	if (!isObject(raw)) return raw;

	/**
	 * Finds the kind of object that is provided.
	 * Anything that isn't reconginised is treated as a primitive.
	 */
	const type = ["Array", "Object", "Map", "Set"]
		.map((type) => `[object ${type}]`)
		.indexOf(Object.prototype.toString.call(raw));
	if (type < 0) return raw;

	const entries = type > 1 ? [...raw.entries()] : Object.entries(raw);

	/**
	 * Iterates over the entries, proxifies the necessaries.
	 */
	entries.forEach(([k, v]: [keyof T, any]) => {
		if (!isObject(v)) return;
		if (type > 1) raw[k] = isProxy(v) ? v : reactify(v);
		else raw.set(k, isProxy(v) ? v : reactify(v));
	});

	/**
	 * This returns a function to handle observers map.
	 * @param action the type of observer map manipulation
	 * @returns a function to manipulate the observer map
	 */
	const act = (action: "add" | "delete") => (path: Path<T>, cb: Observer) => {
		const set = options.observers.get(path.toString()) ?? new Set();
		set[action](cb);
		options.observers.set(path.toString(), set);
	};

	const meta: MetaData<T> = {
		_o: options.observers,
		_p: undefined,
		_on: act("add"),
		_off: act("delete"),
	};

	const get: ProxyHandler<T>["get"] = (target, p, receiver) => {};

	const proxy = new Proxy(raw, { get });

	return raw;
};
