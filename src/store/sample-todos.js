// https://stackoverflow.com/a/33161434
const sentences= [
    'so fat not even Dora can explore her',
    'so  fat I swerved to miss her and ran out of gas',
    'so smelly she put on Right Guard and it went left',
    'so fat she hasn’t got cellulite, she’s got celluheavy',
    'so fat she don’t need no internet – she’s already world wide',
    'so hair her armpits look like Don King in a headlock',
    'so classless she could be a Marxist utopia',
    'so fat she can hear bacon cooking in Canada',
    'so fat she won “The Bachelor” because she all those other bitches',
    'so stupid she believes everything that Brian Williams says',
    'so ugly she scared off Flavor Flav',
    'is like Domino’s Pizza, one call does it all',
    'is twice the man you are',
    'is like Bazooka Joe, 5 cents a blow',
    'is like an ATM, open 24/7',
    'is like a championship ring, everybody puts a finger in her',
    'We\'ll start by specifying the initial state.',
    'Redux will call our reducer with an undefined state for the first time.',
    'This is our chance to return the initial state of our app'
];

function getRandomSentence () {
    var index= Math.floor(Math.random() * (sentences.length));
    return sentences[index];
}

export function generateSampleTodoTxts(count = 10) {
    return ([...Array(count).keys()]
        .map(index => ({id: index + 1, text: getRandomSentence()})))
}