# Typescript OOP and Functional programming technical interview

This repository should be used as a mock technical interview. Here you will find
some OOP and functional programming challenges typically used by companies in
their interviews for junior developers.

## How to go through the interview

1. Create a git branch based on the master branch called interview-<your*name>
   (example: interview-fabio-rito) * Inside this repository you have a "src"
   directory. There you'll find a few questions directories. Each question has
   an index.ts file with a challenge. In order to complete the interview you'll
   have to solve all exercices. Please note the name of the objects, functions,
   methods, variables, etc... should be respected so that our automatic
   validation scripts work properly.
1. To validate whether you completed all exercices succesfully simply run
   `npm test` in the root directory of the repository.
1. After you complete the interview create a PR. This PR will automatically run
   a script that will validate your interview.
   - If you have questions you can ask one Mobwiser mentor to review the PR and
     ask for help
1. After someone approves the PR you can delete it. These PR **won't be merged
   to the master branch**. The PRs will only be used as a way to provide some
   code review.

### FAQ

#### How do I know my PR is valid?

You have to ensure all checks have passed as showed in the image below.
![Checks passed](./imgs/checks-passed.png)
