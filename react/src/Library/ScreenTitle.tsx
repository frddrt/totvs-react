/**
 * @author Frederico Ferracini Duarte
 * @since 2023-08-01 09:45:38
 */

import { Col, Row } from "react-bootstrap"

type ScreenTitleProps = {
	title: string
}

export const ScreenTitle: (props: ScreenTitleProps) => JSX.Element =
({title}: ScreenTitleProps) => (
	<Row className='mt-3 mb-2 border-bottom'>
		<Col>
			<span className='fs-4'>{title}</span>
		</Col>
	</Row>
)
