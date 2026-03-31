Given a string, we'd like to know whether the vowels, consonants or both (assessed separately) are the same backwards as they are forwards. See examples at the bottom of this description.

The test should be case-insensitive, and should only assess letters, ignoring spaces, numbers and other non-letter characters ("_" "*" " " "-"). Vowels are AEIOU. The letter Y is a consonant for this exercise.

If the string doesn't have the same sequence of consonants or vowels backwards, we want to return "neither". If only the vowels are palindromic, return "vowel". If only the consonants are palindromic, return "consonant". If the vowels and the consonants in the string are palindromic, return "both".

You can assume that all test cases will contain at least one vowel and one consonant.

Enjoy!

Some examples:

"egg" would return "both", as "e" is the same backwards as it is forwards, as is "gg".

"raCe car" would also return "both" as "rccr" and "aea" are palindromes.

"wizard" would return "neither".

"pea13ce" would return "vowel" as "eae" is palindromic, but "pc" is not.

" *73_ ab" would return "both" as "a" and "b" are palindromic (according to me...)