import {useLayoutEffect, useState} from "react";


export const useTheme = () => {

    const [theme, setTheme] = useState(localStorage.getItem('app-theme') ||'light');

    useLayoutEffect(() => {

        document.documentElement.setAttribute('data-theme', theme)

        localStorage.setItem('theme',theme)

    }, [theme])

    return {theme, setTheme}

}