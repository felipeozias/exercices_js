// class the function - Avatar
export default class Avatar {
    #x;
    #y;
    coin;
    constructor(atb_x, atb_y, atb_m) {
        this.#x = atb_x;
        this.#y = atb_y;
        this.coin = atb_m;
    }

    set forward(value) {
        if (value > 0) {
            this.#y += value;
        } else {
            this.#y += 1;
        }
    }

    set back(value) {

        if (value > 0 && (this.#y - value) >= 0 && this.#y > 0) {
            this.#y -= value;

        } else if (this.#y > 0) {
            this.#y--;
        }
    }

    set right(value) {

        if (value > 0) {
            this.#x += value;
        } else {
            this.#x++;
        }
    }

    set left(value) {

        if (value > 0 && (this.#x - value) >= 0 && this.#x > 0) {
            this.#x -= value;

        } else if (this.#x > 0) {
            this.#x--;
        }
    }

    get atributes() {
        return { x, y, coin };
    }

    set x(value) {
        if (value == 1) {
            this._x++;
        } else {
            console.log('Um paço de cada vez!');
        }
    }

    set y(value) {
        if (value == 1) {
            this.#y++;
        } else {
            console.log('Um paço de cada vez!');
        }
    }
}