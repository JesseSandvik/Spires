
export function messageByTimeOfDay() {
    const time = new Date().getHours();
    let timeOfDayMessage = ""

        if (time >= 5 && time < 12) {
            timeOfDayMessage = "Good morning,"
        } else if (time >= 12 && time < 20) {
            timeOfDayMessage = "Good afternoon,"
        } else if (time >= 20 || time < 5) {
            timeOfDayMessage = "Good evening,"
        }
        return timeOfDayMessage;
    }