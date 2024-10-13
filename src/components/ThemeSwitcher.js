import React, { useEffect, useState } from "react";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState("light");

    const handleThemeChange = (e) => {
        const newTheme = e.target.value;
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "light");
    }, []);

    return (
        <div className="flex items-center space-x-4">
            <select
                value={theme}
                onChange={handleThemeChange}
                className="select select-bordered"
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
}
