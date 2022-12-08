import userStore from "../../store/userStore"

const ExposeState:React.FC = () => {

    const store = userStore()
    console.log("I rerender (ExposeState)")

    return (
        <>
            {JSON.stringify(store.client)}
        </>
    )
}

export default ExposeState;