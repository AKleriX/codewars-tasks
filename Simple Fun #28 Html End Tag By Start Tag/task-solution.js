const htmlEndTagByStartTag = (startTag) => '</' + startTag.split(' ')[0].replace(/[<>]/g, '') + '>';
