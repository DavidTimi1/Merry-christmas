import { forwardRef } from "react"



export const Img = forwardRef(( {className, style, fit, children}, ref) => (

    <div className={className} style={style}>
        <img ref={ref} className="fw" src={santaGIF} alt={children} style={{objectFit: fit ?? "contain"}} />
    </div>
))

export function daysSinceLastChristmas() {
    // Get the current date
    const today = new Date();

    // Get the current year
    const currentYear = today.getFullYear();

    // Create a Date object for the last Christmas
    const lastChristmas = new Date(currentYear, 11, 25); // Month is 0-indexed, so 11 is December

    // If today is before or on Christmas this year, use last year's Christmas
    if (today <= lastChristmas) {
        lastChristmas.setFullYear(currentYear - 1);
    }

    // Calculate the time difference in milliseconds
    const timeDifference = today - lastChristmas;

    // Convert the time difference from milliseconds to days
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
}
