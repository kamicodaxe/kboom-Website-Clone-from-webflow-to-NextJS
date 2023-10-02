import 'server-only';

import en from './(dictionaries)/en.json';
import es from './(dictionaries)/es.json';
import nl from './(dictionaries)/nl.json';
import fr from './(dictionaries)/fr.json';

export type Translations = typeof en;

const dictionaries: Record<string, Translations> = {
	en,
	es,
	nl,
	fr
};

export const getDictionary = async (locale: string): Promise<Translations> => dictionaries[locale];
