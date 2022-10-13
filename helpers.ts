export function loopedArray<Type>(originalArray: readonly Type[], startingValue: Type): Type[] | -1 {
	const shiftIndex: number = originalArray.indexOf(startingValue)
	if (shiftIndex !== -1) {
		const shiftedArray: Type[] = []
		originalArray.forEach((value: Type, index: number) => {
			shiftedArray.push(originalArray[(index + shiftIndex) % originalArray.length])
		})
		return shiftedArray
	}
	return -1
}
