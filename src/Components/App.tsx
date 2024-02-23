/**
 * @author Frederico Ferracini Duarte
 * @since 2023-08-01 16:02:14
 */

import { Col, Row } from "react-bootstrap"
import { useRecoilValue } from "recoil"
import { If } from "../Library/If"
import { WaitScreen } from "../Library/WaitScreen"
import { Wait } from "../Store/atom"
import MainView from "./MainView"
import { NavSide } from "./NavSide"

export const App: () => JSX.Element = () => {
	const wait = useRecoilValue(Wait)

	return (
		<Row className="app-row">
			<Col className='d-flex'>
				<NavSide />
			</Col>
			<Col className='d-flex col-11 align-self-center'>
				<MainView />
			</Col>
			<If condition={wait}>
				<WaitScreen />
			</If>
		</Row>
	)
}
