function Allergies(score) {
  if (typeof score !== 'number' || isNaN(score) || score % 1) throw new Error('TypeError');

  this.ALLERGY_SCORES = {
    eggs: 1,
    peanuts: 2,
    shellfish: 4,
    strawberries: 8,
    tomatoes: 16,
    chocolate: 32,
    pollen: 64,
    cats: 128,
  };

  this.isAllergicTo = function (allergen) {
    return (score & this.ALLERGY_SCORES[allergen]) > 0;
  };

  this.allergies = function () {
    let allergs = [];
    for (let allerg in this.ALLERGY_SCORES)
      if (score & this.ALLERGY_SCORES[allerg]) allergs.push(allerg);
    return allergs.sort();
  };
}
