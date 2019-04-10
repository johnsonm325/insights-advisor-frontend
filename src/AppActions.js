import * as ActionTypes from './AppConstants';
import API from './Utilities/Api';

const fetchData = async (url, headers, options) => (await API.get(url, headers, options)).data;

export const fetchStatsRules = () => ({
    type: ActionTypes.STATS_RULES_FETCH,
    payload: fetchData(ActionTypes.STATS_RULES_FETCH_URL)
});
export const fetchStatsSystems = () => ({
    type: ActionTypes.STATS_SYSTEMS_FETCH,
    payload: fetchData(ActionTypes.STATS_SYSTEMS_FETCH_URL)
});
export const fetchRules = (options) => ({
    type: ActionTypes.RULES_FETCH,
    payload: fetchData(ActionTypes.RULES_FETCH_URL, {}, options)
});
export const fetchRule = (options) => ({
    type: ActionTypes.RULE_FETCH,
    payload: fetchData(`${ActionTypes.RULES_FETCH_URL}${options.rule_id}/`)
});
export const fetchSystem = (options) => ({
    type: ActionTypes.SYSTEM_FETCH,
    payload: fetchData(`${ActionTypes.RULES_FETCH_URL}${options.rule_id}/systems/`)
});
export const setBreadcrumbs = (breadcrumbObj) => ({
    type: ActionTypes.BREADCRUMBS_SET,
    payload: breadcrumbObj
});
export const setFilters = (filters) => ({
    type: ActionTypes.FILTERS_SET,
    payload: filters
});
