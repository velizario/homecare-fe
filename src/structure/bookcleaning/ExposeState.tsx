import bookCleaningStore from "../../store/bookCleaningStore"

const ExposeState:React.FC = () => {
    const store = bookCleaningStore()
    return (
        // <pre style={{position: "sticky", top: "0", right: "0", width:"min-content", zIndex:"100"}}>
        <pre>
            {JSON.stringify(store, null, 2)}
        </pre>
    )
}

export default ExposeState;