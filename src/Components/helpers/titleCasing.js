function titleCasing(item) {
    let lowercase = item.toLowerCase();
    lowercase = lowercase.split(' ');

    for (var i = 0; i < lowercase.length; i++) {
        lowercase[i] = lowercase[i].charAt(0).toUpperCase() + lowercase[i].slice(1); 
    }

    return lowercase.join(' ');
}

export default titleCasing;