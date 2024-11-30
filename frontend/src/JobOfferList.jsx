import React, {useState, useEffect} from "react"
import flaskHost from "./App"

/**
 * JobOfferList is a React component that renders a list of job offers in a tabular format.
 * Each job offer can be updated or deleted through the provided buttons.
 *
 * @component
 *
 * @param {Object} props - The properties object.
 * @param {Object[]} props.job_offers - The list of job offer objects to be displayed.
 * @param {Function} props.updateJobOffer - Callback function to be called when an update is made to a job offer.
 * @param {Function} props.updateCallback - Callback function to refresh the list after a job offer is deleted.
 *
 * @returns {JSX.Element} A JSX element rendering a table of job offers with action buttons for update and delete.
 */
const JobOfferList = ({job_offers, updateJobOffer, updateCallback}) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: 'DELETE'
            }
            const response = await fetch(`${flaskHost}/delete-job-offer/${id}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete job offer")
            }
        } catch (error) {
            alert(error)
        }
    }

    return <div>
        <table>
            <thead>
            <tr>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Title</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Company</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Location</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Salary</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Description</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}>Hiring Manager</th>
                <th style={{padding: '10px', borderBottom: '2px solid #ddd'}}></th>
            </tr>
            </thead>
            <tbody>
            {job_offers.map((offer) => (
                <tr key={offer.id}>
                    <td style={{fontWeight: 'bold'}}>{offer.title}</td>
                    <td>{offer.company}</td>
                    <td>{offer.location}</td>
                    <td>{offer.salary}</td>
                    <td>{offer.description}</td>
                    <td>{offer.hiringManager}</td>
                    <td>
                        <button onClick={() => updateJobOffer(offer)}>Update</button>
                        <button onClick={() => onDelete(offer.id)}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}

export default JobOfferList;