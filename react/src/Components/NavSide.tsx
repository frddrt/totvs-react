/**
 * @author Frederico Ferracini Duarte
 * @since 2023-06-05 14:48:21
 */

import { Col, Container, Nav, Row } from "react-bootstrap"
import { useAtom } from "jotai"
import { AppState } from "../Store/atom"

type NavItemProps = {
	title: string,
	icon: string,
	selected: boolean,
	onClick: any,
}

const NavItem = ({title, icon, selected, onClick}: NavItemProps) => {
	const classes = selected ? "bg-black text-white selected-border" : ""
	return (
		<Nav.Link
			className={`p-1 text-center text-info fs-xsmall mb-2 ${classes}`}
			onClick={onClick}>
			<Row>
				<Col className="fs-5"><i className={`bi ${icon}`}></i></Col>
			</Row>
			<Row>
				<Col>{title}</Col>
			</Row>
		</Nav.Link>
	)
}

export const NavSide = () => {
	const [appState, setAppState] = useAtom(AppState)

	return (
		<Container fluid className='d-flex bg-dark pt-1 ps-0 pe-0'>
			<Nav className="flex-column w-100">
				<Nav.Item
					className="p-1 text-center text-secondary fs-xsmall mb-2">
					<Row>
						<Col className="fs-4">
							<i className="bi bi-robot"></i>
						</Col>
					</Row>
					<Row>
						<Col>T.I. Barão</Col>
					</Row>
				</Nav.Item>
				<NavItem
					title="Menu 1"
					icon="bi-arrow-left-right"
					onClick={() => setAppState({...appState, menu: 1})}
					selected={appState.menu === 1} />
			</Nav>
		</Container>
	)
}
