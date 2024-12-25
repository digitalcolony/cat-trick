import { defineCollection, z } from "astro:content";

interface CatData {
	cat: string;
	date: string;
}

const rows = defineCollection({
	loader: async () => {
		try {
			const url = import.meta.env.PUBLIC_GOOGLE_SHEET_URL;
			const response = await fetch(url);
			if (!response.ok) {
				console.error("Failed to cat data:", response.statusText);
				return [];
			}
			const { data } = await response.json();
			console.log(`Fetched ${data.length} rows of cat data`);
			return data
				.map((row: CatData, index: number) => ({
					id: index.toString(),
					date: new Date(row.date).toLocaleDateString(), // Convert to short date
					cat: row.cat,
				}))
				.filter((row) => row.date.includes("2024"));
		} catch (error) {
			console.error("Error fetching data:", error);
			return [];
		}
	},
	schema: z.object({
		id: z.string(),
		date: z.string(),
		cat: z.string(),
	}),
});

export const collections = { rows };
