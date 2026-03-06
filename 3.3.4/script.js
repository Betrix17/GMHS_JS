let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {
    console.log("Vítej na stránce");

    if (isAdmin) {
        console.log("Přístup do adminu povolen.")
    } else {
            console.log("Jsi přihlášen jako uživatel!")
    }
} else {
    console.log("Nejsi přihlášený")
}

let age = 31;
let hasDiverLicense = true;

if (age >= 18 && hasDiverLicense) {
    console.log("Můžeš řídit!")
} else {
    console.log("Nemůžeš řídit!")
}

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {
    console.log("Je čas relaxovat!");
} else {
    console.log("Musíme pracovat!")
}

if (age <3) {
    console.log("zdarma")
}


