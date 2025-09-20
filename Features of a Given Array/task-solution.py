from collections import OrderedDict
class Array(object):
    def __init__(self, arr=[]):
        self.arr=arr
    def num_elements(self):
        return len(self.arr)
    def num_values(self):
        return len(set(self.arr))
    def start_end(self):
        return [self.arr[0],self.arr[-1]] if self.arr else []
    def range_(self):
        return [min(self.arr),max(self.arr)] if self.arr else []
    def _run(self,inc):
        a=self.arr;n=len(a)
        if n<3:return []
        s=0;best=(0,0)
        for i in range(1,n):
            if (a[i-1]<a[i]) if inc else (a[i-1]>a[i]):continue
            if (i-1)-s>best[1]-best[0]:best=(s,i-1)
            s=i
        if (n-1)-s>best[1]-best[0]:best=(s,n-1)
        b=a[best[0]:best[1]+1]
        return b if len(b)>=3 else []
    def largest_increas_subseq(self):
        r=self._run(True);return r if r else "No increasing subsequence"
    def largest_decreas_subseq(self):
        r=self._run(False);return r if r else "No decreasing subsequence"
    def __str__(self):
        return str(OrderedDict([
            ('1.number of elements',self.num_elements()),
            ('2.number of different values',self.num_values()),
            ('3.first and last terms',self.start_end()),
            ('4.range of values',self.range_()),
            ('5.increas subseq',self.largest_increas_subseq()),
            ('6.decreas subseq',self.largest_decreas_subseq())
        ]))