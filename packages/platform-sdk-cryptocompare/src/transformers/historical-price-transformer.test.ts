import { HistoricalPriceTransformer } from "./historical-price-transformer";

const stubResponse = require("../../test/fixtures/historical.json");
const stubOptions = { type: "day", dateFormat: "DD.MM" };

describe("CryptoCompare", function () {
	describe("HistoricalPriceTransformer", function () {
		it("should transform the given data", async () => {
			const subject = new HistoricalPriceTransformer(stubResponse.Data);

			expect(subject.transform(stubOptions)).toMatchSnapshot();
		});
	});
});
