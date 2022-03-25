# WOULD YOU RATHER APP

This is a fun game where someone can log in as an existing user and
can create questions
can answer question asked by others
based on question answered and asked by a user they are scored
scores are displayed on leaderboard tab sorted from highest to lowest
Home page of a user shows all queations unanswered and answered

## Available Scripts

    components
      ---App
      ---Home  home page for logged in user.
      ---Leaderboard  shows scores of all existing players.
      ---Login  shows option to log in as any existing user.
      ---Nav  gives option to navigate to Home,leaderboard,New,Logout.
      ---New  gives ability to create a new question to existing user.
      ---Poll   gives ability to answer a question and view how other have answered the question.

    middleware
      ---logger logges in the state of store and action submitted.

    reducers
      ---autheduser update logged in user value in store
      ---questions  update changes made to questions , add new question to store
      ---users  update user questions , answers in store

    actions
      ---autheduser update logged in user value in store
      ---questions  update changes made to questions , add new question to store
      ---users  update user questions , answers in store

    util
      ---api interact with database to save changes made in store

## START INSTRUCTIONS

In the project directory, you can run:
--- npm install
--- npm start
