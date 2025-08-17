class Vector:
    def __init__(self,*v):
        v=v[0] if len(v)==1 and hasattr(v[0],'__iter__') else v
        self._v=tuple(v)
    @property
    def x(self): return self._v[0]
    @property
    def y(self): return self._v[1]
    @property
    def z(self): return self._v[2]
    @property
    def magnitude(self): return (self.x**2+self.y**2+self.z**2)**0.5
    def to_tuple(self): return self._v
    def __str__(self): return f"<{self.x}, {self.y}, {self.z}>"
    def __add__(self,o): return Vector(self.x+o.x,self.y+o.y,self.z+o.z)
    def __sub__(self,o): return Vector(self.x-o.x,self.y-o.y,self.z-o.z)
    def __eq__(self,o): return self._v==o._v
    def dot(self,o): return self.x*o.x+self.y*o.y+self.z*o.z
    def cross(self,o): return Vector(self.y*o.z-self.z*o.y,self.z*o.x-self.x*o.z,self.x*o.y-self.y*o.x)