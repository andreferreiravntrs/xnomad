# Git guidelines

In general we are following the popular git workflow often called [git flow](https://nvie.com/posts/a-successful-git-branching-model/). Be sure to check that the workflow is followed when reviewing code.

## Cloning the repo

After cloning the repo, use `git checkout dev` and `git remote add public https://github.com/sharetribe/flex-template-web.git`

## Implementing a new feature

1. Always checkout a new branch from the `dev` branch when working on a new feature
2. The branch name should be named `<branch-description>` in lower case and "kebab-case". Example: `add-floodfill`
3. When the new feature is done, create a pull request (PR) based on `dev` and write a short title/description that describes the new feature. Assign someone to review (and bug them until they do it)
4. When the PR is approved, merge it into `dev`.

## Commit message

When writing a commit message you should follow [these 7 rules](https://chris.beams.io/posts/git-commit/).

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line ("Fix" instead of "Fixed", "Add instead of "Added")
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

## Pulling & pushing

1. Use `git push` for pushing to the private remote
2. Use `git pull` for pulling from the private remote
3. Use `git pull public master` for pulling updates from the official Flex repo
