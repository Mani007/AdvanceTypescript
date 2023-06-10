interface TakePhoto {
    camera: string,
    filter: string,
    brust: number
}

interface Story {
    shot(): void
}
class Instagram implements TakePhoto, Story {
    constructor(
        public camera: string,
        public filter: string,
        public brust: number
    ){
                // some constructor functions
    }

    shot(): void {
        console.log('shot of story')
    }
}