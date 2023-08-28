import { useContext } from "react";
import { NumberContext } from "./App";

function Calculate() {
    const numberContext = useContext(NumberContext);

    return (
        <>
            <div>Sayı = {numberContext.count} </div>
            <button onClick={() => numberContext.dispatch('decrement')}>Azalt</button>
            <button onClick={() => numberContext.dispatch('reset')}>Reset</button>
            <button onClick={() => numberContext.dispatch('increment')}>Artır</button>
        </>
    );
}

export default Calculate;