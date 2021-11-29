function getTimeFromTimeDateString(string) {
    const timeDateArray = [...string];
    const timeHour = [];
    const timeMinute = [];

    let left = 11;
    let right = 15;

    while (left <= right) {
        if (left <= 12) {
            timeHour.push(timeDateArray[left]);
        } else if (left > 13 && left <= 15) {
            timeMinute.push(timeDateArray[left]);
        }
        left++;
    }
    return `${timeHour.join('')}:${timeMinute.join('')}`;
}

function removeFirstIndexIfBeforeTwelve(time) {
    const timeArray = [...time];

    if (timeArray[0] === "0") {
        return `${timeArray[1]}${timeArray[2]}${timeArray[3]}${timeArray[4]}AM`;
    } else {
        return `${time}PM`;
    }
}

export function formatTime(time) {
    const timeOfUpdatedComment = getTimeFromTimeDateString(time);
    const formattedTimeByTime = removeFirstIndexIfBeforeTwelve(timeOfUpdatedComment);
    return formattedTimeByTime;
}