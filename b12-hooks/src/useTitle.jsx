import { useEffect } from 'react'

// Custom Hooks
// use ile başlamalı
function useTitle(value) {
    useEffect(() => {
        document.title = `Sayı ${value}`
    })
}

export default useTitle