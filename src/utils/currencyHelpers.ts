export const usdt = Intl.NumberFormat('en-US', {
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2,
});

export const currencyFormatter = (currency:string, amount: number) => {

	let formatter

	if (currency) {
		
		formatter = Intl.NumberFormat('en-US', {
			style: 'currency',
			currency,
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
		
	} else {
		
		formatter = Intl.NumberFormat('en-US', {
			currency,
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});
	}
	
		let result = formatter.format(amount)

		if (formatter.format(amount).slice(0,3) === currency) {
			result = result.substring(3)
		}

		return result
	
}