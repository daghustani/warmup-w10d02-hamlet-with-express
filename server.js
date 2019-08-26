
const express = require('express');

const app = express();


const port = process.env.port || 3000



const quotesArray = [
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

let quotesObjects = quotesArray.map(arr => {
    return {
        quote: arr[0],
        act: arr[1].split('Act ')[1].split(',')[0],
        scene: arr[1].split('Scene ')[1].split(')')[0]
    }
})

// Explanation of the code above: 
// map through quotesArray where each element is also an array and return an object instead
// For example element 1 is: ["To be, or not to be: that is the question", "Hamlet-(Act III,Scene I)."]
// Now in this array the quote is at index 0, and the act/scene is at index 1
// We add the quote to the quote key quote: arr[0] << arr refers to the subarray within the quotesArray
// Now we need to extract the scene and act from arr[1], notice that it is a string divided by the words 'Act' and 'Scene'
// arr.split('Act') << this will return a new array that is split to 2 parts ['Hamlet-(Act ', 'III,Scene I).']
// Since we only want the III which is in the 2nd element of the array we use index 1 [1]
// and we split that part as well at ',' this means that now we have a new array as well ['III', ',Scene I).']
// Combining all the above steps we now have access to III on its own at index 0 [0] so we store that with the act key
// act: arr[1].split('Act ')[1].split(',')[0] << act: 'III'


app.get('/hamlet/quotes', function (req, res) {
    let newArray = quotesObjects.filter(obj => {
        return obj.act == req.query.act.toUpperCase() && obj.scene == req.query.scene.toUpperCase()
    })
    res.json({
        quotes: newArray.map(obj => obj.quote)
    });
})

app.listen(port, function () {
    console.log(`hello listening on ${port}`);
})
