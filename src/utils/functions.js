export function formatDateTime(date_str) {
    // console.log(typeof(str))
    const date = new Date(date_str);

    // Get the hours and minutes
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    // Format minutes to always be 2 digits
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 24-hour format for the time part
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Get the day, month, and year
    const day = date.getDate();
    const month = date.getMonth() + 1; // months are zero-based
    const year = date.getFullYear();

    // Format the date and time string
    const timeString = `${hours}:${minutes}${ampm}`;
    const dateString = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

    return `${timeString} ${dateString}`;
}

export function formatHour(date_str) {
    // console.log(typeof(str))
    const date = new Date(date_str);

    // Get the hours and minutes
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    // Format minutes to always be 2 digits
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Determine AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 24-hour format for the time part
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Get the day, month, and year
    const day = date.getDate();
    const month = date.getMonth() + 1; // months are zero-based
    const year = date.getFullYear();

    // Format the date and time string
    const timeString = `${hours}:${minutes}${ampm}`;
    const dateString = `${day < 10 ? '0' + day : day}/${month < 10 ? '0' + month : month}/${year}`;

    return `${timeString} ${dateString}`;
}
