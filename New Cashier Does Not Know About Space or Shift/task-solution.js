function getOrder(input) {
    const menu = ['Burger', 'Fries', 'Chicken', 'Pizza', 'Sandwich', 'Onionrings', 'Milkshake', 'Coke'];
    let order = [];
    menu.forEach(item => {
        let regexp = new RegExp(item.toLowerCase(),'g'),
            matchOrder = input.match(regexp);
        if (matchOrder) matchOrder.forEach(() => order.push(item));
    });
    return order.join(' ');
}