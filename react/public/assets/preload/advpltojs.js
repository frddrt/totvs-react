function(key, value) {
	if (typeof window.observeProtheus === 'function') {
		window.observeProtheus(key, value)
	} else {
		window.localStorage.setItem(key, value)
		const pre = JSON.parse(window.localStorage.getItem('pre') || "[]")
		pre.push(key)
		window.localStorage.setItem('pre', JSON.stringify(pre))
	}
}
