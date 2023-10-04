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
import { usePathname, useRouter } from "next/navigation"


export interface SelectLanguageProps {
	translations: Translations
	lang: string
}

const SelectLanguage: React.FC<SelectLanguageProps> = ({ translations, lang }) => {

	const router = useRouter();
	const pathname = usePathname();
	const handleLanguageChange = (value: string) => {
		// Push the new route, along with the new locale
		router.push(pathname.replace(lang, value));
	};

	return (
		<section className=" text-black dark:text-white flex justify-center">

			<Select defaultValue={lang} onValueChange={handleLanguageChange}>
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
