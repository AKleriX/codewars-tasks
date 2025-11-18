from preloaded import Input, Tile, Direction

class PlayerMovement:
    ORDER = (Direction.Right, Direction.Left, Direction.Down, Direction.Up)
    MOVES = {
        Direction.Up: (0, 1),
        Direction.Down: (0, -1),
        Direction.Left: (-1, 0),
        Direction.Right: (1, 0)
    }

    def __init__(self, x, y):
        self.position = Tile(x, y)
        self.direction = Direction.Up
        self._pressed = set()
        self._stack = []
        self._current = None

    def update(self):
        directions = [Direction.Up, Direction.Down, Direction.Left, Direction.Right]
        now_pressed = [d for d in directions if Input.get_state(d)]
        new_keys = [d for d in now_pressed if d not in self._pressed]
        released = [d for d in self._pressed if d not in now_pressed]

        for d in released:
            if d in self._stack:
                self._stack.remove(d)

        for d in sorted(new_keys, key=self.ORDER.index):
            if d in self._stack:
                self._stack.remove(d)
            self._stack.append(d)

        self._pressed = set(now_pressed)
        old_current = self._current
        new_current = self._stack[-1] if self._stack else None
        changed_current = new_current != old_current

        if new_current is not None and changed_current:
            self.direction = new_current

        self._current = new_current

        if new_current is not None and not changed_current and not new_keys:
            dx, dy = self.MOVES[self.direction]
            self.position = Tile(self.position.x + dx, self.position.y + dy)