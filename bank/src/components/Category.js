export default function Category(props){
    return (
        <div className={props.val.type + " transaction"}>
            <div className="category">{props.val.category}</div>
            <div></div>
            <div></div>
            <div className="amount">{props.val.sum}</div>
        </div>
    )
}
