/**
 * @author Frederico Ferracini Duarte
 * @since 2023-03-29 14:03:54
 */

import { FloatingLabel, Form } from "react-bootstrap"

interface FieldProps {
	title: string
	value: any
	className?: string
}

const Field = ({title, value, className}: FieldProps) => (
	<>
		<FloatingLabel label={title}>
			<Form.Control
				type='text'
				disabled
				className={className}
				value={value} />
		</FloatingLabel>
	</>
)

export default Field
