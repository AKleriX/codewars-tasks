const uncollapse = (digits) => digits.replace(/((zero)|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine))/g, '$1 ').trim();