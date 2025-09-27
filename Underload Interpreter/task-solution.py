# return the output of the given underload program.
# code: passed in as a string.
def underload(code):
    st, out, prog, i = [], [], list(code), 0
    while i < len(prog):
        c = prog[i]
        if c == '(':
            j, d = i + 1, 1
            while j < len(prog) and d:
                d += prog[j] == '('
                d -= prog[j] == ')'
                j += 1
            if d: raise Exception('Unbalanced parentheses')
            st.append(''.join(prog[i+1:j-1]))
            i = j
            continue
        if c == ')': raise Exception('Unbalanced parentheses')
        if c == ':':
            st.append(st[-1])
        elif c == '!':
            st.pop()
        elif c == '~':
            st[-1], st[-2] = st[-2], st[-1]
        elif c == '*':
            b, a = st.pop(), st.pop(); st.append(a + b)
        elif c == 'a':
            st.append('(' + st.pop() + ')')
        elif c == '^':
            prog[i+1:i+1] = list(st.pop()); i += 1; continue
        elif c == 'S':
            out.append(st.pop())
        i += 1
    return ''.join(out)