export class G964 {

  public static fromNb2Str = (n: number, sys: number[]) => {
    let mul: number = 1,
        mods: number[] = [];
    for (let i = 0; i < sys.length; i++){
      mul *= sys[i];
      mods.push(n % sys[i]);
      for (let j = i + 1; j < sys.length;  j++)
        for (let k = 2; k <= Math.min(sys[i], sys[j]); k++)
          if (!(sys[i] % k) && !(sys[j] % k)) return 'Not applicable';     
    }
    return mul <= n ? 'Not applicable' : '-' + mods.join('--') + '-';
  }
}