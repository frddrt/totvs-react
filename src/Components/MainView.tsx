/**
 * @author Frederico Ferracini Duarte
 * @since 2023-06-05 15:09:06
 */

import { Container } from "react-bootstrap"
import { useRecoilValue } from "recoil"
import { If } from "../Library/If"
import { AppState } from "../Store/atom"

const MainView = () => {
	const appState = useRecoilValue(AppState)

	return (
		<Container className='p-2'>
			<If condition={appState.menu === 1}>
				Menu 1...
			</If>
		</Container>
	)
}

export default MainView
