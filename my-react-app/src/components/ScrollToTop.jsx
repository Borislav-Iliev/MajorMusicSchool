import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router keeps the previous scroll position on navigation — reset it so every page opens at the top
function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default ScrollToTop
