
export class WeekDayValueConverter {

    toView(value){
        let weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        return weekdays[value % weekdays.length];
    }
}

export class ImagePathValueConverter {

    toView(value){
        return value && '/content/images/food/' + value + '.jpg';
    }
}


