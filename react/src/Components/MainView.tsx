/**
 * @author Frederico Ferracini Duarte
 * @since 2023-06-05 15:09:06
 */

import { useEffect } from "react"
import { Container } from "react-bootstrap"
import { useRecoilValue } from "recoil"
import { If } from "../Library/If"
import { AppState } from "../Store/atom"

declare global {
	interface Window {
		observeProtheus: any
	}
}

window.observeProtheus = window.observeProtheus || {}

const MainView = () => {
	const appState = useRecoilValue(AppState)

	useEffect(() => {
		window.observeProtheus = (key: string, value: any) => {
			if (key === "<YOUR_KEY>") {
			}
		}
	}, [])

	return (
		<Container className='p-2'>
			<If condition={appState.menu === 1}>
				Menu 1...
			</If>
		</Container>
	)
}

export default MainView
