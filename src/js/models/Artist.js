export default class Artist {
    constructor(artist) {
        /**
         * @type {String}
         */
        this.id = artist.permanent_id;

        /**
         * @type {String}
         */
        this.fname = artist.first_names;

        /**
         * @type {String}
         */
        this.lname = artist.last_name;

        /**
         * @type {String}
         */
        this.lifetime = artist.lifetime;
    }


    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
}
