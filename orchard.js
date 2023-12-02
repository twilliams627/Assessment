///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the last week at an apple orchard. 
    You will be using your coding skills to gain insights into its daily 
    operations.

    Below are three arrays each containing 7 numbers. You will use them and the 
    price variables to complete the problems in this file.

    The indexes of the arrays correspond with a day of the week.
    The first array is named fujiAcres. Notice that the first item in this array 
    is 2, meaning that 2 acres of Fuji apples were picked on Monday of this week.
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]





// PROBLEM 1

/*
    Using a for loop, calculate the total number of acres picked for the entire 
    week.

    Save the number to a variable called `totalAcres`.
    Log `totalAcres` to the console.
*/

// let totalAcres = 0;
for (let i = 0; i < fujiAcres.length; i==) 
{totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];}
console.log(totalAcres);

The three arrays represent the numbers of acres picked each day for the different types of apples. I used the variable 'totalAcres" for the sum of all the acres that were picked. I used the loop 'for' to iterate over each day of the week. Inside the loop I added the acres picked on the current day for each type of apple to totalAcres. After I loged the total number of acres picked for the week into the console.


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average number of acres picked per day. 

    (Remember that the average is the total divided by the number of days)

    Save the answer to a variable called 
    `averageDailyAcres`, and log `averageDailyAcres` to the console.
*/

// let totalAcres = 0;
for (let i =0; i < fujiAcres.length; i++) 
{totalAcres += fujiAcres[i] + galaAcres[i] + pinkAcres[i];}
const numberOfDays = fujiAcres.length;
const averageDailyAcres = totalAcres / numberOfDays;
console.log(averageDailyAcres);

So we already know that the totalAcres variable respresents the total number of acres picked in a week, so I divided totalAcres by the number of days. This resulted in the averageDailyAcres variable. Afterwards I logged the average number of acres picked per day to the console.




// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number of acres that still have apples left. 
    
    The `days` variable represents how many more days of work are left. It's 
    initialized at 0 because we're going to be using it as a counter.
    
    Write a while loop that will continue to run while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to calculate this number. You might
    think about other ways you could do it more mathematically.
*/

let acresLeft = 174 
let days = 0

// while (acresLeft > 0) 
{days++; acresLeft -=fujiAcres[days - 1] = galaAcres[days - 1] + pinkAcres [days -1];}
console.log(days);

For this problem, I ran the while loop while adding 1 to the day variable and subtracting the daily average from the acresLeft. After the all of the acres had been picked and the loop stops I looked the remaining total of days into the console.

// PROBLEM 4

/*
    Your next task is to create 3 arrays that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store your new arrays. Make sure that you
    don't modify the original arrays on lines 36 - 38.

    Log each of your arrays to the console.

    (Hint: loop over the original arrays, calculate the tons for that day, then
    add that number into the new list)
*/

//const yieldPerAcre = 6.5;
for (let day = 0; day < fujiAcres.length; day++) 
const fujiDailyTons = fujiAcres[day] * yieldPerAcre;
const galaDailyTons = galaAcres[day] * yieldPerAcre;
const pinkDailyTons = pinkAcres[day] * yieldPerAcre;

fujiTons.push(fujiDailyTons);
galaTons.push(galaDailyTons);
pinkTons.push(pinkDailyTons);

console.log("Fuji Tons:", fujiTons);
console.log("Gala Tons:", galaTons);
console.log("Pink Tons;", pinkTons);

I created new arrays to store the daily amounts of apples in tons for each type of apple, calculated the tons for each day and logged the new arrays.After
let fujiTons = [97.5];
let galaTons = [169];
let pinkTons = [143];



// PROBLEM 5

/*
    Next, calculate the TOTAL number of pounds picked per variety.

    You'll need to add up the tons per each variety and convert the number 
    into pounds -- store that number in the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// const fujitotalpounds = fujiTons.reduce((total, tons) => total + tons * 2000, 0);
const galatotalpounds = galaTons.reduce((total, tons) => total + tons * 2000, 0);
const pinkTotalPounds = pinkTons.reduce((total, tons) => total + tons * 2000, 0);

console.log("Fuji Total Pounds:"), fujiTotalPounds);
console.log("Gala Total Pounds:"), galaTotalPounds);
console.log("Pink Total Pounds:"), pinkTotalPounds);

I calculated the total pounds picked per apple type, converted the tons into pounds using the given metric then finally logged the value

// PROBLEM 6

/*
    Now that you know the total pounds per variety, use the prices below to 
    figure out how much you'll make from selling each type of apple. 

    The prices are per pound and are written in cents. 

    Log each of the profits to the console. 
*/
const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55

//const fujiProfit = fujiTotalPounds * fujiPrice;
const galaProfit = galaTotalPounds * galaPrice;
const pinkProfit = pinkTotalPounds * pinkPrice;

console.log("Fuji Profit:", fujiProfit);
console.log("Gala Profit:", galaProfit);
console.log("Pink Profit:", pinkProfit);

// let fujiProfit = 219101.124
// let galaProfit = 528125
// let pinkProfit = 520000

I used the prices given to figure out how much we'll make from selling each type of apple. The prices are per pound and written in cents. Finally I logged the profits to the console.


// PROBLEM 7

/*
    Add up all your profits and save  the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

//const totalProfit = fujiProfit + galaProfit + pinkProfit;
console.log("Total Profit:", totalProfit);

Lastly I added up all the profits and saved the number to a variable called totalProfit. After I did that I logged the answer to the console.
