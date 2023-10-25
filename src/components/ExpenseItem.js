import './ExpenseItem.css'
function ExpenseItem(props){
    const locationOfexpenditure = "Delhi";
    const month = props.date.toLocalString('en-US',{month:'long'});
    const year = props.date.toFullYear();
    const day = props.date.toLocalString('en-US',{day:'2-digit'});

    return (
        
        <div className="expense-item"> 
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <h3 className="expense-item">Expense Item!</h3>
            <h3>Food Rs 10</h3>
            <h3>Petro Rs 100</h3>
            <h3>Movies Rs 200</h3>
            <h3>{locationOfexpenditure}</h3>

        </div>
    

    )
}

export default ExpenseItem;