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
// import { useRouter, useTranslation } from "next/router";

// const changeLanguage = (newLocale: string) => {
// 	const router = useRouter();

// 	i18n.changeLanguage(newLocale);

// 	router.push({
// 		pathname: window.location.pathname,
// 		locale: newLocale
// 	});
// };

// changeLanguage("es")



export interface SelectLanguageProps {
	translations: Translations
}

const SelectLanguage: React.FC<SelectLanguageProps> = () => {
	return (
		<section className="bg-[#262c3a] text-black flex justify-center">

			<Select defaultValue="en">
				<SelectTrigger className="w-[180px]">
					Language:
					<SelectValue placeholder="English" />
				</SelectTrigger>
				<SelectContent>
					<SelectItem value="en">English</SelectItem>
					<SelectItem value="fr">Français</SelectItem>
					<SelectItem value="es">Spanish</SelectItem>
				</SelectContent>
			</Select>
		</section>
	);
};



SelectLanguage.displayName = "SelectLanguage"

export { SelectLanguage }
