interface JohnAndAnnKatas {
    'Ann': number[],
    'John': number[],  
    'SumAnn': number,
    'SumJohn': number
  }
  
  export class G964 {    
      
      private static johnAndAnn(n: number): JohnAndAnnKatas {
        let ann: number[] = [1],
            john: number[] = [0],
            sumAnn: number = 1,
            sumJohn: number = 0;
        for (let i = 1; i < n; i++){
          john.push(i - ann[john[i - 1]]);  
          sumJohn += john[john.length - 1];
          ann.push(i - john[ann[i - 1]]);  
          sumAnn += ann[ann.length - 1];
        }
        return {'Ann': ann, 'John': john, 'SumAnn': sumAnn, 'SumJohn': sumJohn};
      }
        
      public static john(n: number): number[] {
          return G964.johnAndAnn(n)['John'];
      }
      public static ann(n: number): number[] {
          return G964.johnAndAnn(n)['Ann'];
      }
      public static sumJohn(n: number): number {
         return G964.johnAndAnn(n)['SumJohn'];
      }
      public static sumAnn(n: number): number {
         return G964.johnAndAnn(n)['SumAnn'];
      }
  }