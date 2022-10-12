/* eslint-disable */ // It's OK because root is never null.
import {createRoot} from "react-dom/client"
import React from "react"


export default function Start(): JSX.Element {
	return (
		<div className="bg-blue-700">Hello!</div>
	)
}

const root = createRoot(document.getElementById("root")!)
root.render(<Start></Start>)