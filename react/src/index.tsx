/**
 * @author Frederico Ferracini Duarte
 * @since 2023-08-01 16:02:14
 */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './Components/App'
import './index.scss'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
)

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
