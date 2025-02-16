import React, { useState } from "react";
import './ThemeSwitcher.scss'

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false)

    const toggleTheme = () => {
        setIsDark(!isDark);
        {
            document.body.classList.toggle('dark-theme', !isDark)
        }
        
        return (
            <button onClick={toggleTheme}>
                {isDark ? 'Светлая тема' : 'Темная тема'}
            </button>
        )
    }
}