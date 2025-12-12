/**
 * @author Frederico Ferracini Duarte
 * @since 2023-04-10 08:40:49
 */

import { Pagination } from "react-bootstrap"
import { useAtom } from "jotai"
import type { JSX } from "react"
import { PageState } from "../Store/atom"

export const MyPagination = () => {
	const [pageState, setPageState] = useAtom(PageState)
	const { First, Prev, Ellipsis, Item, Next, Last } = Pagination
	const { current, total } = pageState
	const {ini, end} = getIniAndEndValues()

	function setCurrent(current: number) {
		const { total } = pageState
		const value = (current < 1 ? 1 : (current > total ? total : current))

		setPageState({...pageState, current: value})
	}

	function getIniAndEndValues() {
		const { current, total } = pageState

		const iniValue = (current - 1) +
			((current - 1) < 1 ? 1 : ((current + 1) > total ? -1 : 0))
		const endValue = (current + 1) +
			((current - 1) < 1 ? 1 : ((current + 1) > total ? -1 : 0))

		return {
			ini: iniValue < 1 ? 1 : iniValue,
			end: endValue > total ? total : endValue,
		}
	}

	function LocalPagination(): JSX.Element {
		const items = []

		for (let i = ini; i <= end; i++) {
			items.push(
				<Item
					key={i}
					active={current===i}
					onClick={() => setCurrent(i)}>
					{i}
				</Item>
			)
		}

		return (
			<>
				{items}
			</>
		)
	}

	return (
		<Pagination className="ms-1">
			<First
				onClick={() => setCurrent(1)}
				disabled={ current === 1 } />
			<Prev
				onClick={() => setCurrent(current - 1)}
				disabled={ current === 1 } />
			<Ellipsis
				disabled={ini === 1}
				onClick={() => setCurrent(current - 3)} />
			<LocalPagination />
			<Ellipsis
				key={"e2"}
				disabled={end === total}
				onClick={() => setCurrent(current + 3)} />
			<Next
				key={"n"}
				onClick={() => setCurrent(current + 1)}
				disabled={ current === total} />
			<Last
				key={"l"}
				onClick={() => setCurrent(total)}
				disabled={ current === total } />
		</Pagination>
	)
}
