/**
 * @author Frederico Ferracini Duarte
 * @since 2026-01-08 15:42:22
 */

import { useSetAtom } from "jotai"
import { useEffect, useRef } from "react"
import { Wait } from "../Store/atom"

type ObserverHandler = (value: string | null) => void

export const useProtheusObserver = () => {
	const initializedRef = useRef(false)

	const setWait = useSetAtom(Wait)

	const safeParse = <T,>(value: string | null): T | null => {
		if (!value) return null

		try {
			return JSON.parse(value)
		} catch {
			return null
		}
	}

	useEffect(() => {
		if (initializedRef.current) return
		initializedRef.current = true

		const handlers: Record<string, ObserverHandler> = {
			preLoadResult: value => {
			},
		}

		window.observeProtheus = (key: string, value: string | null) => {
			const handler = handlers[key]
			if (handler) handler(value)
			setWait(false)
		}

		const preKeys: string[] = safeParse(localStorage.getItem("pre")) || []

		for (const key of preKeys) {
			window.observeProtheus(key, localStorage.getItem(key))
		}

		localStorage.removeItem("pre")
	}, [])
}
