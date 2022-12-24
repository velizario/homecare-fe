import bookCleaningStore from "../../../store/bookCleaningStore"
import userStore from "../../../store/userStore";

const WatchState:React.FC = () => {
    const store = userStore()
    return (
        // <pre style={{position: "sticky", top: "0", right: "0", width:"min-content", zIndex:"100"}}>
        <pre>
            <>
                {JSON.stringify(store, null, 2)}
                {console.log(store)}
            </>
        </pre>
    )
}

export default WatchState;