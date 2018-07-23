import {createSelector} from 'reselect'
import {sumThreeUsersAges, sortByDate} from '../utils'

export const getData = (state) => state.data;

const CITY = ['Kiev', 'kiev'];

export const getNumberOfUsersByCity = createSelector(
    getData,
    data => {
        let counter = 0;

        data.forEach(item => {
            if (CITY.includes(item.location)) counter++
        });

        return counter;
    }
);

export const getSumOfOldestAges = createSelector(
    getData,
    data => {
        if (!data.length) return 0;
        let arraySorted = data.slice().sort(sortByDate);

        return sumThreeUsersAges(arraySorted);
    }
);

export const getLongestFullName = createSelector(
    getData,
    data => {
        let longestFullname = '';

        data.forEach( item => {
            if (longestFullname.length < (item.first_name + item.last_name).length)
                longestFullname = item.first_name + ' ' + item.last_name;
        });

        return longestFullname;
    }
);