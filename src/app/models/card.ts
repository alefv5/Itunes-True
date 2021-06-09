export class Card {
    artworkUrl100: string;
    artistName: string;
    collectionName: string;
    collectionPrice: string;

    constructor(artworkUrl100: string, artistName: string, collectionName: string, collectionPrice: string){
        this.artworkUrl100 = artworkUrl100;
        this.artistName = artistName;
        this.collectionName = collectionName;
        this.collectionPrice = collectionPrice;
    }
}