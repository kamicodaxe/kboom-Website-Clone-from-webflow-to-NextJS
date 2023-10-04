"use client"
/**
 * SelectLanguage component
 */
import * as React from "react"
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select"
import { Translations } from "@/app/[lang]/dictionary";
import { useRouter } from "next/router"


export interface SelectLanguageProps {
	translations: Translations
	lang: string
}

const SelectLanguage: React.FC<SelectLanguageProps> = ({ translations, lang }) => {
	return (
		<section className=" text-black flex justify-center">

			<Select defaultValue={lang}>
				<SelectTrigger className="w-[180px]">
					{translations.languageSelection}
					<SelectValue placeholder="English" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="en">English</SelectItem>
					<SelectItem value="fr">Français</SelectItem>
					<SelectItem value="es">Español</SelectItem>
					<SelectItem value="nl">Nederlands</SelectItem>
				</SelectContent>
			</Select>
		</section>
	);
};



SelectLanguage.displayName = "SelectLanguage"

export { SelectLanguage }
