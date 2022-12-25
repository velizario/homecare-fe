import { UseBoundStore, StoreApi } from "zustand";


type WatchStateType<T> = {
    mode?: number, store: UseBoundStore<StoreApi<T>>
}

const WatchState = <K,>({ mode, store }: WatchStateType<K>)  => {
    return (
        // <pre style={{position: "sticky", top: "0", right: "0", width:"min-content", zIndex:"100"}}>
        <pre>
            <>
                {mode === 1 || !mode && console.log(store)}
                {mode === 2 || !mode && JSON.stringify(store, null, 2)}
            </>
        </pre>
    )
}

export default WatchState;