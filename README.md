# Advent Of Vue 2022

## If you didn't get here from an email, read this section! Skip it otherwise.

[Advent Of Vue](https://adventofvue.com) is a series of 24 Vue coding challenges that are sent out every day from December 1 to December 24 via [a dedicated newsletter](https://www.getrevue.co/profile/AdventOfVue). If you'd like to receive more of these puzzles in the future, go ahead and sign up!

## Problem description

The elves decided that in the spirit of leveling up the *Christmas Spirit*, they want to promote "*Secret Santa*".

The principle of Secret Santa is rather simple: Everyone gives a gift to exactly ONE other person. This means that everyone receives exactly ONE present, no matter how many people participate. The mechanism should be **random**.

To promote this, the elves want to provide a web application that automatically matches every participating person randomly.

The code is almost finished, but the developer elves got stuck on the most difficult part: Actually assigning random "secret santas" to everyone.

This is where you some in!

In the file `src/helpers/match.js`, there is a function `matchPeople` to be completed.
The input is an array of names and emails:
```js
[
  { name: 'Kevin McCallister', email: 'kevin@homealone.com' },
  { name: 'John McClane', email: 'john@yippeekiyay.com' },
  ...
]
```
The goal is it to return an array that assigns every name (**receiver** of gift) a secret santa (**giver** of gift). The array should have the following structure:
[
  { 
    receiver: { name: 'Kevin McCallister', email: 'kevin@homealone.com' },
    giver: { name: 'John McClane', email: 'john@yippeekiyay.com' }
  },
  ...
]

There are two rules to be followed:
 1. For every person there has to be one (and only one) giver
 2. A person cannot be their own giver


## Working example

https://majestic-douhua-02c095.netlify.app/

## Author

Marc Backes:

- [Twitter](https://twitter.com/themarcba)
- [Mastodon](https://vue.land/@marc)
- [Instagram](https://instagram.com/themarcba)
- [LinkedIn](https://linkedin.com/in/themarcba)
- [Website](https://marc.dev)


Based on [a Stackblitz project by tony19](https://stackblitz.com/edit/vue3-vite-starter)