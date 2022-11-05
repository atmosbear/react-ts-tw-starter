import {createRoot} from "react-dom/client"
import React from "react"

export default function Start(): JSX.Element {
	return (
		<div className="bg-orange-500 text-white text-3xl">Hello!</div>
	)
}

createRoot(document.getElementById("root")!).render(<Start />)