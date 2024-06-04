const regexTicTacToeWinChecker = (board) => {
  const pat = [
    /(X|O)\1\1.{6}/,
    /.{3}(X|O)\1\1.{3}/,
    /.{6}(X|O)\1\1/,
    /(X|O).{2}\1.{2}\1.{2}/,
    /.{1}(X|O).{2}\1.{2}\1.{1}/,
    /.{2}(X|O).{2}\1.{2}\1/,
    /(X|O).{3}\1.{3}\1/,
    /.{2}(X|O).{1}\1.{1}\1.{2}/,
  ];

  return pat.some((p) => p.test(board));
};
