# Advent Of Vue 2022

## If you didn't get here from an email, read this section! Skip it otherwise.

[Advent Of Vue](https://adventofvue.com) is a series of 24 Vue coding challenges that are sent out every day from December 1 to December 24 via [a dedicated newsletter](https://www.getrevue.co/profile/AdventOfVue). If you'd like to receive more of these puzzles in the future, go ahead and sign up!

## Problem description

Custom Directives can be a powerful tool to have direct control over DOM elements. It's a common tool used by library authors to create easily reusable features like animation and styling.

In this challenge, we're going to make a custom Christmas directives that controls the CSS classes and adds some nice text transition effects.

Inside `main.js`, you can see the initial registration of the custom directive `v-christmas`. And you can find all the classes you will need to add to elements inside `base.css`.

Inside `app.js`, you can find a couple different use cases of this component.

To achieve the animation, we want to add `.christmas-text` as a class on the element and then set the animation duration inside of our directive implemention!

Your tasks are:

- edit the directive implementation to add the `christmas-text` class
- handle three styles via directive arguments (no directive (`.red-green`), `.red`, and `.green`)
- allow for custom animation duration via the value of a custom directive (e.g `v-christmas="5"` will have an animation duration of 5s)

I highly recommend checking out the solution to get an idea of what this might look like.

For hints, you can refer to the [Vue docs](https://vuejs.org/guide/reusability/custom-directives.html#directive-hooks) on this topic.

## Example of a solution in action

![Dec-16-2022 09-41-15](https://user-images.githubusercontent.com/18535681/208122713-eda72c40-4b31-443d-9faa-6cd10bbdf4e1.gif)


To see a working demo check out: https://stackblitz.com/edit/custom-christmas-directive?file=README.md

## Author

Hey hey! My name's Matt and I run a little Vue website/youtube channel called LearnVue

Check out my sites for some more quick lessons + subscribe if you'd like...no pressure though

- youtube.com/learnvue
- learnvue.co
- twitter.com/mattmaribojoc

## Credits

Based on [a Stackblitz project by tony19](https://stackblitz.com/edit/vue3-vite-starter)
