import React from 'react'

const ListItem = ({rowData}) => {
    console.log(rowData)
    let interestsString =''
    let birthday = ''
    let registered = ''
    if (rowData.interests){
   let interestsArray = []
    rowData.interests.forEach(interestObj=>interestsArray.push(interestObj.interest))
     interestsString = interestsArray.join(', ')
    }
    if (rowData.birthday) {
     birthday = new Date(Date.parse(rowData.birthday)).toLocaleDateString()
     console.log(birthday)
    }
    if(rowData.createdAt) {
        registered = new Date(Date.parse(rowData.createdAt)).toLocaleDateString()
    }
    

  return (
    <tr>
       <th>{rowData.id}</th> 
       <th>{rowData.username}</th> 
       <th>{rowData.firstname}</th> 

       <th>{rowData.lastname}</th> 
       <th>{rowData.email}</th> 
       <th>{birthday}</th> 
       <th>{registered}</th> 
       <th>{interestsString}</th> 


    </tr>
  )
}

export default ListItem