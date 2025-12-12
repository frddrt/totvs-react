/**
 * @author Frederico Ferracini Duarte
 * @since 2023-11-30 09:13:48
 */

import { atom } from "jotai"

export const AppState = atom<any>({
	menu: 1
})

export const PageState = atom<any>({
	current: 1,
	pagesize: 8,
	total: 0,
})

export const Wait = atom<boolean>(false)
