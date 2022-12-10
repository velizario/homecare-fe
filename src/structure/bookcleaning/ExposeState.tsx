import searchStore from "../../store/searchStore"

const ExposeState:React.FC = () => {

    const store = searchStore()
    console.log("I rerender (ExposeState)")

    return (
        <pre>
            {JSON.stringify(store, null, 2)}
        </pre>
    )
}

export default ExposeState;