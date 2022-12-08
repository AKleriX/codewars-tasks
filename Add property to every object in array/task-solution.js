const addAnswersProp = () => questions.map((data) => ((data['usersAnswer'] = null), data));

addAnswersProp();
