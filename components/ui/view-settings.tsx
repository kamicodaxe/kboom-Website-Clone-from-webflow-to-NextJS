"use client"
/**
 * ViewSettings component
 */
import * as React from "react"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { SelectLanguage } from "./selectLanguage";


export interface ViewSettingsProps {
}

const ViewSettings: React.FC<ViewSettingsProps> = ({ }) => {
	// Create a state for the dark mode
	const [darkMode, setDarkMode] = React.useState(true);

	// if (typeof window !== 'undefined') {
	// 	const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
	// 	setDarkMode(prefersDarkMode.matches);
	// }

	React.useEffect(() => {
		(async () => {
			try {
				let isDarkModeActive = window.localStorage.getItem('darkMode')
				setDarkMode(isDarkModeActive == "true" ? true : false)
			} catch (error) {
				// Darkmode by default in case there is an error
				setDarkMode(true)
			}
		})
	}, []);

	// Use an effect to add or remove the 'dark' class from the root element
	React.useEffect(() => {
		const root = document.documentElement;
		if (darkMode) {
			root.classList.add('dark');
			window.localStorage.setItem('darkMode', 'true')
		} else {
			root.classList.remove('dark');
			window.localStorage.setItem('darkMode', 'false')
		}
	}, [darkMode]);


	return (
		<section className=" text-black dark:text-white flex justify-center">
			<Select defaultValue={darkMode ? "dark" : "light"} onValueChange={v => {
				setDarkMode(v == "dark" ? true : false)
			}}>
				<SelectTrigger className="w-[180px]">
					Mode
					<SelectValue placeholder="English" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="dark">Dark</SelectItem>
					<SelectItem value="light">Light</SelectItem>
				</SelectContent>
			</Select>
		</section>
	);
};



ViewSettings.displayName = "ViewSettings"

export { ViewSettings }
