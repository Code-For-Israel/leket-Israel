import React, {createContext, useState} from 'react';
import {getDefaultDateFrom, getDefaultDateTo} from "../Utils/general";
// import sortOptions from "../constants/sortSelection";
const ContextApi = createContext({});

export default ContextApi;

export const ContextProvider = ({ children }) => {
	const [searchText, setSearchText] = useState("");
	const [debouncedSearchText, setDebouncedSearchText] = useState("");
	const [mode, setMode] = useState("grid");
	const [sortMethod, setSortMethod] = useState([{ "key": "attr-asc", "label": "אטרקטביות", "field": "name", "dir": "asc" }]);
	const [product_name, setProductName] = useState([]);
	const [additionalProductNames, setAdditionalProductNames] = useState([]);
	const [optionRegion, setOptionRegion] = useState(["ALL"]);
	const [optionCareStatus, setOptionCareStatus] = useState(["ALL"]);
	const [optionMoreFilters, setOptionMoreFilters] = useState({attractionFrom: 0, attractionTo: 1, ndviFrom: 0, ndviTo: 1, dateFrom: getDefaultDateFrom(), dateTo: getDefaultDateTo()});
	const [page, setPage] = useState(0);
	const [pageSize, setPageSize] = useState(5);

	return (
		<>
			<ContextApi.Provider
				value={{
					searchText,
					setSearchText,
					debouncedSearchText,
					setDebouncedSearchText,
					mode,
					setMode,
					sortMethod,
					setSortMethod,
					product_name,
					setProductName,
					additionalProductNames,
					setAdditionalProductNames,
					optionRegion,
					setOptionRegion,
					optionCareStatus,
					setOptionCareStatus,
					optionMoreFilters,
					setOptionMoreFilters,
					page,
					setPage,
					pageSize,
					setPageSize
				}}
			>
				{children}
			</ContextApi.Provider>
		</>
	);
};
