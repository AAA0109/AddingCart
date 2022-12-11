const API_ENDPOINT = "https://prices.azure.com/api/retail/prices";
const SUPPORTED_FILTER_KEYS = [
    "armRegionName",
    "location",
    "meterId",
    "meterName",
    "productId",
    "skuId",
    "productName",
    "skuName",
    "serviceName",
    "serviceId",
    "serviceFamily",
    "priceType",
    "armSkuName",
];
const PRICE_TYPES = [
    "DevTestConsumption",
    "Consumption",
    "Reservation",
];
const DEFAULT_CURRENCY_CODE = "USD";
/**
 * Get retail prices from the Azure Retail Prices API
 * @param filterObject Filter object
 * @param currencyCode Currency code string
 * @return Array of retail price object
 */
async function getRetailPrices(filterObject, currencyCode = DEFAULT_CURRENCY_CODE) {
    let retailPrices = [];
    if (_validateFilterObject(filterObject)) {
        const filterString = _generateFilter(filterObject);
        retailPrices = await _getRetailPrices(filterString, currencyCode);
    }
    return retailPrices;
}
/**
 * Validate filter object
 * @param filterObject Filter object
 * @return Valid or not
 */
function _validateFilterObject(filterObject) {
    for (const key of Object.keys(filterObject)) {
        if (!SUPPORTED_FILTER_KEYS.includes(key)) {
            throw new Error(`Unsupported filter key "${key}". Supported keys are ${SUPPORTED_FILTER_KEYS.toString()}.`);
        }
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        if (key === "priceType" && !PRICE_TYPES.includes(filterObject[key])) {
            throw new Error(`Unsupported filter value "${filterObject[key]}" of "${key}". Supported values are ${PRICE_TYPES.toString()}.`);
        }
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
    }
    return true;
}
/**
 * Generate filter string from filter object
 * @param filterObject Filter object
 * @return Filter string
 */
function _generateFilter(filterObject) {
    let filterString = "";
    for (const key of Object.keys(filterObject)) {
        filterString += `${key} eq '${String(filterObject[key])}' and `;
    }
    return filterString.replace(/ and $/, "");
}
/**
 * Get retail prices from the Azure Retail Prices API with filter
 * @param filterString Filter string
 * @param currencyCode Currency code string
 * @return Array of retail price object
 */
async function _getRetailPrices(filterString, currencyCode) {
    let url = API_ENDPOINT + `?currencyCode='${currencyCode}'`;
    if (filterString !== "")
        url += `&$filter=${filterString}`;
    let retailPrices = [];
    // eslint-disable-next-line no-constant-condition
    while (true) {
        debugger
        console.log(url);
        const res = await fetch('https://cors-anywhere.herokuapp.com/' + url);
        console.log(res)

        if (!res.ok) {
          throw new Error(`${res.status} ${res.statusText}`);
        }

        const response = await res.json();
        console.log(response)

        retailPrices = retailPrices.concat(response.Items);
        if (response.NextPageLink) {
            url = response.NextPageLink;
        }
        else {
            break;
        }
    }
    return retailPrices;
}