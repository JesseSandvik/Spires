export function formatDate(date) {
    const dateArray = [...date];
    const dateYear = [];
    const dateMonth = [];
    const dateDay = [];

    let left = 0;
    let right = 9;

    while (left <= right) {
        if (left <= 3) {
            dateYear.push(dateArray[left]);
        } else if (left === 5 || left === 6) {
            dateMonth.push(dateArray[left]);
        } else if (left === 8 || left === 9) {
            dateDay.push(dateArray[left]);
        }
        left++;
    }
    return `${dateMonth.join('')}/${dateDay.join('')}/${dateYear.join('')}`;
}