# Advent Of Vue 2022

## If you didn't get here from an email, read this section! Skip it otherwise.

[Advent Of Vue](https://adventofvue.com) is a series of 24 Vue coding challenges that are sent out every day from December 1 to December 24 via [a dedicated newsletter](https://www.getrevue.co/profile/AdventOfVue). If you'd like to receive more of these puzzles in the future, go ahead and sign up!

## Problem description

Joseph woke up on Christmas Eve and rushed to the living room to find and open his gift early. When he got there, he noticed something strange - all the gifts had their labels removed, with each box having an integer from 1 to `n` (1 < `n` <= 30) written on it instead. Joseph also found this note from Santa Claus:

> Dear Joseph!
>
> Opening your presents before everyone else is unfair! Since you're a first-time offender, you'll receive a light punishment, but please be more patient next year!
>
> In order for you to find your present, you first need to discard the gift no. 2, then no. 4, and so on until there's only one box left. That should be your present.
>
> Good luck!

Your task is to build an application that will visualise the whole elimination process based on `n` gifts in the circle. The app should allow the user to:

- Specify that number and have the app display all the gifts from 1 to `n` in a grid.
- Switch between each step via _Previous step_ and _Next step_ buttons, and warp to the first and last step using a _First step_ and _Last step_ buttons respecitvely.
- Each eliminated box should appear more transparent (but not fully invisible) than the remaining ones.

## Author

Maciej Pędzich (Mac):

- [GitHub](https://github.com/maciejpedzich)
- [Twitter](https://twitter.com/MaciejPedzich)
- [Mastodon](https://notacult.social/@maciejpedzich)
- [My website (coming next year)](https://maciejpedzi.ch)

## Credits

Based on [a Stackblitz project by tony19](https://stackblitz.com/edit/vue3-vite-starter)
