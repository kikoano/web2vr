export default class Helper {
    static isUrl(string) {
        const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        return regexp.test(string);
    }

    static clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }
}