// class the function - Avatar
export default function AvatarFunc(x, y, c) {
    let _x = x;
    let _y = y;
    let _coin = c;

    function forward() {
        _y++;
    }

    function back() {
        if (_y > 0) {
            _y--;
        }
    }

    function right() {
        _x++;
    }

    function left() {
        if (_x > 0) {
            _x--;
        }
    }

    function setMoeda() {
        _coin++;
    }

    function getAtributes() {
        return [_x, _y, _coin];
    }

    return { forward, back, right, left, setMoeda, getAtributes };
}