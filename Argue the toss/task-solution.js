const anArgument = (...args) =>
  args.length
    ? `You gave me ${args.length} argument${args.length === 1 ? '' : 's'} and ${
        args.length === 1 ? 'it is' : 'they are'
      } ${
        args.length > 1
          ? args
              .slice(0, -1)
              .map((a) => '"' + a + '"')
              .join(', ') +
            ' and ' +
            '"' +
            args.slice(-1)[0] +
            '"'
          : '"' + args[0] + '"'
      }.`
    : `You didn't give me any arguments.`;
