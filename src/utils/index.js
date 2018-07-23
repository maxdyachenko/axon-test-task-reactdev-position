import moment from 'moment'

export const sumThreeUsersAges = (array) => {
    const arrLength = array.length;
    const currentDate = moment();

    let sum = 0, iterateLoop = 0;

    if (arrLength >= 3) iterateLoop = 3;
    else if (arrLength < 3 && arrLength >= 2) iterateLoop = 2;
    else iterateLoop = 1;

    while(iterateLoop) {
        iterateLoop--;
        sum += currentDate.diff(moment(array[iterateLoop].dob, 'DD.MM.YYYY'), 'years');
    }

    return sum;
};

export const sortByDate = (a, b) => {
    const date1 = moment(a.dob, 'DD.MM.YYYY');
    const date2 = moment(b.dob, 'DD.MM.YYYY');

    return date1.diff(date2, 'minutes') > 0 ? 1 : -1;
};