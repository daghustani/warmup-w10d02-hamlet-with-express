# Good Morrow!

![:image](https://media1.giphy.com/media/RZQIIUO9qrTRC/giphy.gif)

> Is it Nobler in the mind to suffer rewriting arrays or to take Arms and convert them programmatically?

# Act I

### Scene I

Using Express and the following array, create a `/hamlet/quotes` path that takes `act` and `scene` values as queries and send the correct quote!

```js
var quotesArray = [
  ["To be, or not to be: that is the question", "Hamlet-(Act III,Scene I)."],
  ["A little more than kin, and less than kind", "Hamlet-(Act I,Scene II)."],
  ["And it must follow, as the night the day, thou canst not then be false to any man", "Hamlet-(Act I,Scene III)."],
  ["This is the very ecstasy of love", "Hamlet-(Act II,Scene I)."],
  ["Brevity is the soul of wit", "Hamlet-(Act II,Scene II)."],
  ["Do you think I am easier to be played on than a pipe?", "Hamlet-(Act III,Scene II)."],
  ["Doubt that the sun doth move, doubt truth to be a liar, but never doubt I love", "Hamlet-(Act II,Scene II)."],
  ["I will speak daggers to her, but use none", "Hamlet-(Act III,Scene II)."],
  ["In my mind's eye", "Hamlet-(Act I,Scene II)."],
  ["Neither a borrower nor a lender be; For loan oft loses both itself and friend, and borrowing dulls the edge of husbandry", "Hamlet-(Act I,Scene III)."],
  ["Rich gifts wax poor when givers prove unkind", "Hamlet-(Act III,Scene I)."],
  ["That it should come to this!", "Hamlet-(Act I,Scene II)."],
  ["The lady doth protest too much, methinks", "Hamlet-(Act III,Scene II)."],
  ["The plays the thing wherein I'll catch the conscience of the king", "Hamlet-(Act II,Scene II)."],
  ["There is nothing either good or bad, but thinking makes it so", "Hamlet-(Act II,Scene II)."],
  ["This above all: to thine own self be true", "Hamlet-(Act I,Scene III)."],
  ["Though this be madness, yet there is method int.", "Hamlet-(Act II,Scene II)."],
  ["What a piece of work is man! how noble in reason! how infinite in faculty! in form and moving how express and admirable! in action how like an angel! in apprehension how like a god! the beauty of the world, the paragon of animals! ", "Hamlet-(Act II,Scene II)."],
  ["When sorrows come, they come not single spies, but in battalions", "Hamlet-(Act IV,Scene V)."]
];
```
#### Example

If the query for act was `I` and for scene was `II` then display `"A little more than kin, and less than kind"`


<details>
<summary>In case of struggle</summary>

One approach is to try and separate your array elements into objects to make accessing it easier

```js
var quotes = [
    ["To be, or not to be: that is the question", "Hamlet - (Act III, Scene I)."]
];

=>
var quotes = [
  {
    quote: "To be, or not to be: that is the question",
    act: "III",
    scene: "I"
  }
];
```
</details>