import './ExpenseItem.css'
function ExpenseItem(){
    const locationOfexpenditure = "Delhi";

    return (
        
        <div className="expense-item"> 
            <h3 className="expense-item">Expense Item!</h3>
            <h3>Food Rs 10</h3>
            <h3>Petro Rs 100</h3>
            <h3>Movies Rs 200</h3>
            <h3>{locationOfexpenditure}</h3>

        </div>
    

    )
}

export default ExpenseItem;