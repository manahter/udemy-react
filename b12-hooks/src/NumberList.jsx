import { useEffect, useState } from "react";

function NumberList({ getItems, style }) {
    useEffect(() => {
        setItems(getItems(2));
        console.log('updating items');
    }, [getItems])

    const [items, setItems] = useState([])
    return (
        <div style={style}>
            ~~~ useCallback Örneği ~~~
            {items.map((item) => <div key={item}>{item}</div>)}
        </div>
    );
}

export default NumberList;