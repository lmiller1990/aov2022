# Advent Of Vue 2022

## If you didn't get here from an email, read this section! Skip it otherwise.

[Advent Of Vue](https://adventofvue.com) is a series of 24 Vue coding challenges that are sent out every day from December 1 to December 24 via [a dedicated newsletter](https://www.getrevue.co/profile/AdventOfVue). If you'd like to receive more of these puzzles in the future, go ahead and sign up!

## Problem description

Renderless components can be an alternative to composables when finding ways to design reusable logic in your Vue apps. As you might guess, they don't render anything. Instead, they handle all the logic inside a script section and then expose properties through a scoped slot.

This means that wherever our renderless component is used can determine out the data is presented.

In this challenge, your goal is to complete the renderless component `NorthPoleDistance.vue` - that uses VueUse's `useGeolocation` API as well as some utilities to calculate the distance between a user's current coordinates and the North Pole.

Here are the tasks:

1. Create a value that determines the distance to the North Pole using the proper function from `distance.ts` based on the selected unit of measurement.
2. Implement the `toggleUnit` method.
3. To demonstrate that this is a renderless component, create two different implementations of this component with different styles displaying the distance, unit of measurement, and a way to toggle between kms and miles.

This example screenshot might help a lot to get an idea of an example end project.

Hints:

- [Renderless Component Video](https://www.youtube.com/watch?v=2fuENUWU7Vk)

## Example of a solution in action

While you can use whatever styles you want (thanks to the nature of renderless components) - here's a quick example: https://stackblitz.com/edit/renderless-component-challenge

<img width="461" alt="image" src="https://user-images.githubusercontent.com/18535681/208250518-e9552a44-a31f-4352-b9d7-b96c78937fa6.png">


## Author

Hey hey! My name's Matt and I run a little Vue website/youtube channel called LearnVue

Check out my sites for some more quick lessons + subscribe if you'd like...no pressure though

- youtube.com/learnvue
- learnvue.co
- twitter.com/mattmaribojoc

## Credits

Based on [a Stackblitz project by tony19](https://stackblitz.com/edit/vue3-vite-starter)
