function doGet() {
	const doc = SpreadsheetApp.getActiveSpreadsheet();
	const sheet = doc.getSheetByName("Responses");
	const lastRow = sheet.getLastRow();
	const values = sheet.getRange(2, 2, lastRow - 1, 3).getDisplayValues();
	const result = values.map((r) => ({
		cat: r[0],
		date: r[1],
	}));
	return ContentService.createTextOutput(JSON.stringify({ data: result })).setMimeType(
		ContentService.MimeType.JSON
	);
}

// Try this next to get a count of each cat

function doGet() {
	const doc = SpreadsheetApp.getActiveSpreadsheet();
	const sheet = doc.getSheetByName("Responses");

	const lastRow = sheet.getLastRow();
	const values = sheet.getRange(2, 2, lastRow - 1, 3).getDisplayValues();

	const groups = {};

	values.forEach((row) => {
		if (!groups[row[0]]) {
			groups[row[0]] = 0;
		}
		groups[row[0]]++;
	});

	const result = values.map((row) => ({
		cat: row[0],
		date: row[1],
		count: groups[row[0]],
	}));

	return ContentService.createTextOutput(
		JSON.stringify({
			data: result,
		})
	).setMimeType(ContentService.MimeType.JSON);
}
