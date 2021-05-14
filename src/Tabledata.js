import axios from 'axios'
import React from 'react'
import {useQuery} from "react-query"


const TableHeader = (props) => {
    console.log(props.data)
    return Object.keys(props.data[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
}

const TableRows = (props) => {
    return props.data_row.map(user => {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                {`${user.address.street},${user.address.city}`}
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>
                {`${user.company.name},${user.company.catchPhrase}`}
                </td>
            </tr>
        )
    })
}


function Tabledata() {
    const { isLoading, error, data, isSuccess } = useQuery("users", async () => {
        try {
            return await axios.get('https://jsonplaceholder.typicode.com/users')
        }
        catch (error) {
            console.error(error)
        }
    })

    return (
        <div>
            {isSuccess && (
                <table>
                    <thead>
                        <tr>
                            <TableHeader data = {data.data}/>
                        </tr>
                    </thead>
                    <tbody>
                        <TableRows data_row = {data.data}/>
                    </tbody>
                </table>
            )}
            {isLoading && (<h6>Fetching User Data ...</h6>)}
            {error && (<h6>Error fetching User Data ...</h6>)}
        </div>
    )
}

export default Tabledata
