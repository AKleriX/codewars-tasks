function highlight(code) {
    return code.replace(/(F+|\d+|L+|R+)/g, (_, p1) => {
        let color = 'orange';
        if (/F+/.test(p1)) color = 'pink';
        else if (/L+/.test(p1)) color = 'red';
        else if (/R+/.test(p1)) color = 'green';
        return `<span style=\"color: ${color}\">${p1}</span>`;
    });
}