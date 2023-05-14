import React, { useEffect } from 'react'
import ListItem from './ListItem'
import { useSelector } from 'react-redux'

const List = () => {
    let data = useSelector((state)=>state.userStore.value)
    console.log(data)
useEffect(()=>{},[data])
  return (
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Birthday</th>
                <th>Registered</th>
                <th>Interests</th>
            </tr>
        </thead>
        <tbody>
            {data.map((row, index)=>{return <ListItem key={index} rowData={row}/>})}
            {/* {JSON.stringify(data)} */}

        </tbody>
    </table>
  )
}

export default List