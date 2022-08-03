async function sayJoke(apiUrl, jokeId) {
  return await fetch(apiUrl, {
    method: 'get',
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if (!data.jokes) throw new Error(`No jokes at url: ${apiUrl}`);
      for (let i = 0; i < data.jokes.length; i++) {
        if (jokeId === data.jokes[i].id)
          return {
            saySetup: () => data.jokes[i].setup,
            sayPunchLine: () => data.jokes[i].punchLine,
          };
      }
      throw new Error(`No jokes found id: ${jokeId}`);
    })
    .catch(function (err) {
      throw err;
    });
}
