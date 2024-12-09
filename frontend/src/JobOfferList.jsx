import React, {useState, useEffect} from "react";
import DeleteButton from "./DeleteButton.jsx";
import EditButton from "./EditButtton.jsx";
import SortButton from "./SortButton.jsx";

/**
 * JobOfferList is a React functional component that renders a table of job offers.
 *
 * It allows for sorting job offers by various attributes and provides options to edit or delete job offers.
 *
 * Parameters:
 * @param {Object} params - The parameters object.
 * @param {Array} params.job_offers - An array of job offer objects to be displayed in the table.
 * @param {function} params.updateJobOffer - A callback function to update a job offer.
 * @param {function} params.updateCallback - A callback function that is called after an update or deletion of a job offer.
 *
 * Internal State:
 * @state {Array} sortedJobOffers - An array storing the current sorted state of job offers.
 * @state {Object} sortDirection - An object that tracks the sorting direction for each column.
 *
 * Methods:
 * @method quickSort - A utility function to sort an array of job offers based on a specific key and direction.
 * @method handleSort - Manages sorting logic for table columns when called.
 * @method onDelete - Sends a DELETE request to a specified endpoint to remove a job offer.
 */

const JobOfferList = ({job_offers, updateJobOffer, updateCallback}) => {
    const apiUrl = process.env.API_URL;

    const [sortedJobOffers, setSortedJobOffers] = useState(job_offers);
    const [sortDirection, setSortDirection] = useState({});

    useEffect(() => {
        setSortedJobOffers(job_offers);
    }, [job_offers]);

/**
 * Sorts an array of objects using the Quick Sort algorithm based on values of a specified key.
 *
 * @function quickSort
 * @param {Object[]} arr - The array of objects to be sorted. Each object should contain the specified key.
 * @param {string} key - The key in the objects whose values will determine the sorting order.
 * @param {boolean} [asc=true] - Optional. A boolean flag to specify sorting order:
 *                               `true` for ascending and `false` for descending. Defaults to `true`.
 * @returns {Object[]} A new array sorted based on the provided key and order.
 *
 * This Quick Sort implementation features the following steps:
 * 1. Base Case: The function immediately returns the array if its length is less than or equal to 1,
 *    indicating it is already sorted.
 *
 * 2. Pivot Selection: The pivot element is chosen as the middle object of the array,
 *    using the value of the specified key converted to lowercase to ensure a case-insensitive comparison.
 *
 * 3. Partitioning: The function iterates through the array (excluding the pivot), distributing objects into
 *    two new sub-arrays:
 *    - `left`: Contains objects with key values less than the pivot value when `asc` is `true`,
 *      or greater when `asc` is `false`.
 *    - `right`: Contains the remaining objects.
 *
 * 4. Recursive Sort: The `quickSort` function recursively sorts the `left` and `right` sub-arrays.
 *
 * 5. Concatenation: Finally, the sorted array is constructed by concatenating the sorted `left` sub-array,
 *    the pivot element, and the sorted `right` sub-array.
 *
 */

    const quickSort = (arr, key, asc = true) => {
        if (arr.length <= 1) return arr;

        const pivotIndex = Math.floor(arr.length / 2);
        const pivot = arr[pivotIndex][key].toLowerCase();
        const left = [];
        const right = [];

        for (let i = 0; i < arr.length; i++) {
            if (i === pivotIndex) continue;
            const comparison = asc
                ? arr[i][key].toLowerCase() < pivot
                : arr[i][key].toLowerCase() > pivot;
            comparison ? left.push(arr[i]) : right.push(arr[i]);
        }

        return [
            ...quickSort(left, key, asc),
            arr[pivotIndex],
            ...quickSort(right, key, asc),
        ];
    };

/**
 * Sorts the job offers based on a specified key using the Quick Sort algorithm, and updates the state.
 *
 * @function handleSort
 * @param {string} key - The key by which to sort the job offers (e.g., company, salary, hiringManager).
 *
 * Utilizes the current sort direction to determine whether to sort in ascending or descending order.
 * Updates the sorted job offers and the direction state accordingly.
 */

    const handleSort = (key) => {
        const asc = sortDirection[key] !== "asc";
        const sorted = quickSort([...job_offers], key, asc);
        setSortedJobOffers(sorted);
        setSortDirection({...sortDirection, [key]: asc ? "asc" : "desc"});
    };

    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE",
            };
            const response = await fetch(
                `${apiUrl}/delete-job-offer/${id}`,
                options
            );
            if (response.status === 200) {
                updateCallback();
            } else {
                console.error("Failed to delete job offer");
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>
                        <div className='header-sort-container'>
                            <strong>Title</strong> <SortButton handleSort={() => handleSort("title")}/>
                        </div>
                    </th>
                    <th>
                        <div className='header-sort-container'>
                            Company <SortButton handleSort={() => handleSort("company")}/>
                        </div>
                    </th>
                    <th>
                        <div className='header-sort-container'>
                            Location <SortButton handleSort={() => handleSort("location")}/>
                        </div>
                    </th>
                    <th>
                        <div className='header-sort-container'>
                            Salary <SortButton handleSort={() => handleSort("salary")}/>
                        </div>
                    </th>
                    <th>
                        <div className='header-sort-container'>
                            Description
                        </div>
                    </th>
                    <th>
                        <div className='header-sort-container'>
                            Hiring Manager
                        </div>
                    </th>
                    <th>
                        <div className='header-sort-container'>
                            <span></span><SortButton handleSort={() => handleSort("updatedAt")}/>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                {sortedJobOffers.map((offer) => (
                    <tr key={offer.id}>
                        <td style={{fontWeight: "bold"}}>{offer.title}</td>
                        <td>{offer.company}</td>
                        <td>{offer.location}</td>
                        <td>{offer.salary}</td>
                        <td>{offer.description}</td>
                        <td>{offer.hiringManager}</td>
                        <td>
                            <div style={{display: "flex", gap: "4px", justifyContent: "center"}}>
                                <EditButton updateJobOffer={updateJobOffer} offer={offer}/>
                                <DeleteButton onDelete={onDelete} offer={offer}/>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default JobOfferList;