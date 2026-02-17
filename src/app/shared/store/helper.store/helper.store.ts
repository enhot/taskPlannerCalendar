export class StoreHelper {
	public static USED_NAMES: Record<string, boolean> = {};

	public static getActionDescription(
		module: string,
	): (action: string) => string {
		return (action) => {
			const name = `[${module}] ${action}`;
			if (this.USED_NAMES[name]) {
				throw `Action name "${name}" is already used`;
			}
			this.USED_NAMES[name] = true;
			return name;
		};
	}
}
