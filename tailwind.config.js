/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontSize: {
                clamp: "clamp(1rem, 5vw, 3rem)",
                clampXS: "clamp(0.5rem, 2vw, 1rem)",
                clampS: "clamp(1rem, 3vw, 1.5rem)",
                clampL: "clamp(1rem, 8vw, 5rem)",
                clampXXL: "clamp(1.5rem, 15vw, 7rem)",
                clamp3XL: "clamp(1.5rem, 15vw, 8rem)",
            },
        },
        plugins: [],
    },
}
