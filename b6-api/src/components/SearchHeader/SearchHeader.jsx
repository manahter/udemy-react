
import { useState } from 'react';
import './SearchHeader.css'

function SearchHeader({ search }) {
    const [value, setValue] = useState('')

    const handleFormSubmit = (event) => {
        // Sayfa ilk yüklendiğinde otomatik çalışmasını engeller
        event.preventDefault();
        debugger;
        search(value);
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <form id="SearchHeader" onSubmit={handleFormSubmit}>
            <label htmlFor="">Ne Arıyorsun?</label>
            <input type="text" value={value} onChange={handleChange} />
        </form>);
}

export default SearchHeader;