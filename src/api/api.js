const SID = '10813_0c0a9a2f86eab09196705a274378b64a'

export const getListDeals = (filterValue,sortType,page,limit) => {
    return fetch(`https://nastintesthodl.stocrm.ru/api/external/v1/offers/get_from_filter?SID=${SID}&FILTER=1843&SORT=DESC&PAGE=1&LIMIT=24&REQUIRED_FIELDS[0]=%D0%9F%D0%BE%D0%BB%D0%B5_1`)
        .then(res => res.json())
        .then(rawData => rawData.RESPONSE.DATA)
        .catch(err => console.log(`getData ${err}`));
}