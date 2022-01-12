function stringBreakers(n, string){
    let regExpForN = new RegExp(`(.{${n}}|.+$)`, 'g'),
        noSpaceStr = string.replace(/\s+/g, '').match(regExpForN);
    return noSpaceStr.join('\n');
  }