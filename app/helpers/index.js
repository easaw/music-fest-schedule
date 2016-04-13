import moment from 'moment';

export const timeToPixels = (totalLength, pixelHeight) => {
    return (millis) => millis * (pixelHeight / totalLength);
};

export const timeDifference = (start, end) => {
    return moment(new Date(end)).diff(moment(new Date(start)));
}
