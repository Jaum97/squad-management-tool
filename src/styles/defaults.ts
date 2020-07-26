import { createGlobalStyle } from 'styled-components'

export const ResetDefaultStyles = createGlobalStyle`
html,
body {
	font-size: 16px;
	height: 100%;
	margin: 0px;
	overflow-x: hidden;
	padding: 0px;
	width: 100%;
  	font-family:  'Bahij_SultanNahia', sans-serif;
}
  * {
    outline: 0;
  }
`
