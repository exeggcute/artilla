export default class ArtRecord {
    constructor(record) {
        /**
         * @type {String}
         */
        this.type = record.type;

        /**
         * @type {String}
         */
        this.displayText = record.display_text || record.full_text;
    }
}
