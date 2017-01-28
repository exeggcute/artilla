import {Artist, ArtRecord} from '../models';

export default class Art {
    constructor(art) {
        /**
         * @type {String}
         */
        this.id = art.permanent_id;

        /**
         * @type {String}
         */
        this.name = art.name;

        /**
         * @type {String}
         */
        this.medium = art.medium;

        /**
         * @type {String}
         */
        this.creationTime = art.creation.string;

        /**
         * @type {Object}
         */
        this.dimensions = art.dimensions;

        /**
         * @type {String}
         */
        this.signature = art.signature;

        /**
         * @type {String}
         */
        this.image = art.image_pyramid_urls.orig.img;

        /**
         * @type {Artist}
         */
        this.artist = new Artist(art.artist);


        /**
         * @type {Array<ArtRecord>}
         */
        this.records = art.record_set.map(r => new ArtRecord(r));
    }


    /**
     * @param  {String} type
     * @return {Array}
     */
    getRecordsByType(type) {
        return this.records.filter(r => r.type.toLowerCase() === type.toLowerCase());
    }


    /**
     * @return {String}
     */
    getDimensionsString() {
        return `${this.dimensions.width}in x ${this.dimensions.height}in`;
    }
}
