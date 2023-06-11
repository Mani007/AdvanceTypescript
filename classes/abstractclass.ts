// astract class
abstract class  TakePhoto {
    constructor(
        public camera: string,
        public filter: string
    ) {}
    abstract getSep(): void
}

class Instagram extends TakePhoto{
    constructor(
        public camera: string,
        public filter: string,
        num: number
    ) {
        super(camera,filter)
    }

    getSep(): void {
        console.log('abc')
    }
}

const pic = new Instagram('abc', 'abc', 5)