def solution(number:int) -> int:
    return sum(i for i in range(number) if i % 3 == 0 or i % 5 == 0) if number > 0 else 0