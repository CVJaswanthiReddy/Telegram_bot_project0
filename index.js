const axios = require('axios');
const { Telegraf } = require('telegraf');


/**
 * how to get the secret token for creating a bot?
 * -->open telegram and search for BotFather
 * --> To read instruction type /startand press enter
 * --> to create  a new bot type /newbot and press enter
 * --> it will ask for a bot name give a bot name without / eg:coding_bot
 * --> then it will ask for a username ending with bot eg: jassu_coding_bot
 * //=> t.me/jassu_coding_bot.
 */

let binarysearch=`

def binarySearch(arr, targetVal):
    left = 0
    right = len(arr) - 1

    while left <= right:
        mid = (left + right) // 2

        if arr[mid] == targetVal:
            return mid
        
        if arr[mid] < targetVal:
            left = mid + 1
        else:
            right = mid - 1

    return -1

myArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
myTarget = 15

result = binarySearch(myArray, myTarget)

if result != -1:
    print("Value",myTarget,"found at index", result)
else:
    print("Target not found in array.")
`;

const bot = new Telegraf('');

bot.start((ctx) => ctx.reply('Welcome to the new coding bot from jassu'))

bot.command('binarysearchjs' ,(ctx) => ctx.reply(binarysearch));
bot.command('whomadethis',(ctx) => ctx.reply('jassu'));
bot.command('triplesum',async function(ctx){
    const response= await axios.get('https://raw.githubusercontent.com/CVJaswanthiReddy/SURETrust-Assignments/main/tripletSumInArray.cpp');
    console.log(response.data);
    return ctx.reply(response.data);
})

bot.on('sticker', (ctx) => ctx.reply('💗'))

bot.launch();
