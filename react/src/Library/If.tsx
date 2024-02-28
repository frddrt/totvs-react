/**
 * @author Frederico Ferracini Duarte
 * @since 2023-03-29 13:39:52
 */

import React from 'react'

type IfProps = {
	condition: boolean,
	children: React.ReactNode
}

export const If = ({condition, children}: IfProps) => (
	<>
		{condition ? children : false}
	</>
)
