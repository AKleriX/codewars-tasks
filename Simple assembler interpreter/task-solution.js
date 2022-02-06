function simple_assembler(program) {
  let regs = {};
  for (let i = 0; i < program.length; i++){
    let command = program[i].split(' ');
    let tmp;
    switch(command[0]){
        case 'mov':
          tmp = /[a-z]/i.test(command[2]) ? regs[command[2]] : Number(command[2]);
          regs[command[1]] = tmp;
          break;
        case 'inc':         
          regs[command[1]]++;
          break;
        case 'dec':         
          regs[command[1]]--;
          break;
        case 'jnz':  
          tmp = /[a-z]/i.test(command[1]) ? regs[command[1]] : Number(command[1]);
          if (tmp) i += Number(command[2]) - 1;
          break;
    }
  }
  return regs;
}