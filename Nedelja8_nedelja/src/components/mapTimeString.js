export const mapTimeString = timestamp => {
    const seconds = Math.floor((new Date() - timestamp * 1000) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) {
        return `${interval} year`;
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return `${interval} month`;
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return `${interval} day/s`;
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return `${interval} hour/s`;
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return `${interval} min`;
    }
    return `${Math.floor(seconds)} sec`;
};