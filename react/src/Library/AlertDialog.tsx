/**
 * @author Frederico Ferracini Duarte
 * @since 2024-02-14 12:16:46
 */

import { Button, Modal, type ModalProps } from "react-bootstrap"
import { If } from "./If"

export interface AlertDialogState {
	show: boolean
	message: string
	type: 'info' | 'alert' | 'stop' | 'question'
	title?: string
	buttons?: Array<AlertDialogButtonsType>
}

interface AlertDialogButtonsType {
	variant: string
	title: string
	callback?: () => void
}

interface AlertDialogProps extends ModalProps {
	show: boolean
	onHide: () => void
	title?: string
	type: 'info' | 'alert' | 'stop' | 'question'
	message: string
	buttons?: Array<AlertDialogButtonsType>
}

export const AlertDialog = (props: AlertDialogProps) => {
	const butons = props.buttons || [{
		variant: "danger",
		title: "Fechar"
	}]

	return (
		<Modal
			{...props}
			centered>
			<Modal.Header>
				<span className="fw-bold fs-4">
					<If condition={props.type === "info"}>
						<IconInfo />
					</If>
					<If condition={props.type === "alert"}>
						<IconAlert />
					</If>
					<If condition={props.type === "stop"}>
						<IconError />
					</If>
					<If condition={props.type === "question"}>
						<IconQuestion />
					</If>
					&nbsp;{props.title || "Atenção"}
				</span>
			</Modal.Header>
			<Modal.Body>
				{props.message}
			</Modal.Body>
			<Modal.Footer>
				{butons.map((b, i) => (
					<Button
						key={i}
						variant={b.variant}
						onClick={() => {
							if (b.callback !== undefined) b.callback()
							props.onHide()
						}}
					>{b.title}</Button>
				))}
			</Modal.Footer>
		</Modal>
	)
}

const IconInfo = () => (
	<i className="bi bi-exclamation-circle-fill text-primary fs-3"></i>
)

const IconAlert = () => (
	<i className="bi bi-exclamation-triangle-fill text-warning fs-3"></i>
)

const IconError = () => (
	<i className="bi bi-x-circle-fill text-danger fs-3"></i>
)

const IconQuestion = () => (
	<i className="bi bi-question-octagon-fill text-info-emphasis fs-3"></i>
)