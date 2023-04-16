function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function loop(rowid, jumlah, segment) {
    for (let index = 0; index < jumlah; index++) {
        temprowid = rowid - index
        var object = document.querySelector(`body > div > div:nth-child(${segment}) > div:nth-child(7) > details:nth-child(${temprowid}) > summary > div`)
        object.click()
    }
}

function reset(row, jumlah, segment) {
    for (let index = jumlah - 1; index >= 0; index--) {
        temprowid = row - index
        var object = document.querySelector(`body > div > div:nth-child(${segment}) > div:nth-child(7) > details:nth-child(${temprowid}) > summary > div`)
        object.click()
    }
}

function selector(query) {
    return document.querySelector(query)
}

function getProp(query) {
    // Select the element using its ID
    const element = selector(query);

    // Get the element's position and dimensions using getBoundingClientRect()
    const elementRect = element.getBoundingClientRect();

    return elementRect;
}

function getRect(query) {
    var element = selector(query)
    var url = getUrl(element)
    var svgString = atob(url.split("base64,")[1]);
    var data = svgString.split("d=")[1].split(" ")[2].split('"')[0]
    var rect = extractRectangle(data)
    return rect
}

function calculate(segment) {

    var kotak = [];
    var rect = [];

    var blockprop1 = getProp(`body > div > div:nth-child(${segment}) > div:nth-child(7) > div:nth-child(79) > div `);
    var blockprop2 = getProp(`body > div > div:nth-child(${segment}) > div:nth-child(7) > div:nth-child(80) > div `);
    var blockprop3 = getProp(`body > div > div:nth-child(${segment}) > div:nth-child(7) > div:nth-child(81) > div `);
    var blockprop4 = getProp(`body > div > div:nth-child(${segment}) > div:nth-child(7) > div:nth-child(82) > div `);

    var rect1 = getRect(`body > div > div:nth-child(${segment}) > div:nth-child(7) > div:nth-child(79) > div `);
    var rect2 = getRect(`body > div > div:nth-child(${segment}) > div:nth-child(7) > div:nth-child(80) > div `);
    var rect3 = getRect(`body > div > div:nth-child(${segment}) > div:nth-child(7) > div:nth-child(81) > div `);
    var rect4 = getRect(`body > div > div:nth-child(${segment}) > div:nth-child(7) > div:nth-child(82) > div `);


    // Usage: Pass the ID of the element you want to get the top position for
    kotak.push(blockprop1)
    kotak.push(blockprop2)
    kotak.push(blockprop3)
    kotak.push(blockprop4)

    rect.push(rect1)
    rect.push(rect2)
    rect.push(rect3)
    rect.push(rect4)

    return [kotak, rect];

}

function checkall(arr, correctprop, rect) {
    for (let i = 0; i < arr.length; i++) {
        var element = arr[i];
        var rectelement = rect[i];
        var data = check(element, correctprop, rectelement)
        if (data == false) {
            return false;
        }
    }
    return true
}

function check(blockprop, correctprop, rect) {
    var blockertop = blockprop.top + rect.top
    var blockerbottom = blockprop.top + rect.bottom
    var overlap = (
        (blockerbottom > correctprop.top && blockerbottom < correctprop.bottom) || (blockertop > correctprop.top && blockertop < correctprop.bottom)
    )        
    return overlap;
}

async function solve(segment) {

    var flagchar = "abcdefghijklmnopqrstuvwxyz_";
    var correctprop = getProp("body > div > div:nth-child(2)");
    // var correctprop = getProp("body > div");
    
    for (let i = 0; i < 27; i++) {
        await loop(26, i, segment);
        for (let j = 0; j < 27; j++) {
            await loop(52, j, segment);
            for (let k = 0; k < 27; k++) {
                await loop(78, k, segment);
                var tempkotak = calculate(segment);
                var kotak = tempkotak[0];
                var rect = tempkotak[1];
                var checkdata = checkall(kotak, correctprop, rect);
                if (checkdata == true) {
                    console.log(kotak, correctprop, i, j, k, checkdata);
                    var simpen = flagchar[i] + flagchar[j] + flagchar[k]
                    console.log(flagchar[i], flagchar[j], flagchar[k], kotak, simpen)
                }
                reset(78, k, segment);

            }
            reset(52, j, segment);
        }
        console.log(i)

        reset(26, i, segment);


    }
    return simpen;

}


function getUrl(element) {
    var style = window.getComputedStyle(element);
    var backgroundImage = style.getPropertyValue('background-image');

    // Extract the URL from the background-image property value
    var urlMatch = backgroundImage.match(/url\("?(.+?)"?\)/);
    return urlMatch ? urlMatch[1] : null;

}

function extractRectangle(svgPath) {
    var regex = /(\d+)[Vv](\d+)[Hh](\d+)[Vv](\d+)[Zz]/;
    var match = svgPath.match(regex);

    if (!match) {
        return null;
    }

    var [, top, bottom, right, left] = match.map(Number);

    return {
        top,
        bottom,
        left,
        right
    };
}

async function setup(coba, segment) {
    var kotak = "abcdefghijklmnopqrstuvwxyz_";

    // create an array to store the indices of matching characters
    var arrcoba = [];

    // iterate over each character in coba
    for (var i = 0; i < coba.length; i++) {
        // find the index of the current character in kotak
        var index = kotak.indexOf(coba[i]);

        // if the character is found in kotak, add its index to the array
        if (index !== -1) {
            arrcoba.push(index);
        }
    }
        
    await loop(26, arrcoba[0], segment);
    await loop(52, arrcoba[1], segment);
    await loop(78, arrcoba[2], segment);


}

async function finalsolve(){
    
    // await setup("nce", 22)
    // await setup("sta", 21)
    // await setup("_in", 20)
    // await setup("sat", 19)
    // await setup("ree", 18)
    // await setup("_th", 17)
    // await solve(17)
    var flag = "youre_lucky_this_wasnt_a_threesat_instance";
    for (let i = 22; i > 1; i--) {
        var output = await solve(i);
        await setup(output, i)        
        flag = output + flag;
        console.log(flag)
    }
}

finalsolve()
