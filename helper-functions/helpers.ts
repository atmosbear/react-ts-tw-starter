
export function loopArray<Type>(originalArray: Type[], startingValue: Type): Type[] | -1 {
	if (originalArray !== undefined) {
		const startAt = originalArray.indexOf(startingValue)
		if (startAt !== -1) {
			const loopedArray = [] as Type[]
			for (const i in originalArray) {
				loopedArray.push(originalArray[(Number(i) + Number(startAt)) % originalArray.length])
			}
			return loopedArray
		} else {
			return -1
		}
	} else {
		return -1
	}
}