/**
 * @author Frederico Ferracini Duarte
 * @since 2023-11-30 09:13:48
 */

import { atom } from "recoil"

export const AppState = atom({
	key: "AppState",
	default: {
		menu: 1
	}
})

export const PageState = atom({
	key: "PageState",
	default: {
		current: 1,
		pagesize: 8,
		total: 0,
	}
})

export const Wait = atom({
	key: "Wait",
	default: false,
})
