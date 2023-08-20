function TableItem({data}){
    console.log(data)
    return( 
    <tr>
        <td>{data.id}</td>
        <td>{data.date}</td>
        <td>{data.description}</td>
        <td>{data.category}</td>
        <td>{data.amount}</td>
    </tr>
    )
}

export default TableItem;