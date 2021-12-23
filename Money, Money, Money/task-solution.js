const calculateYears = (principal, interest, tax, desired, years = 0) => principal >= desired ?
    years :
    calculateYears(principal + ((principal * interest) * (1 - tax)),  interest, tax, desired, years + 1);