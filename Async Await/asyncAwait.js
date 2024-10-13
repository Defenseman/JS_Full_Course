function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const walkedDog = true
            if (walkedDog) {
                resolve ("You walked the dog! 🐕")
            }else {
                reject("You DIDN'T walked the dog!❌")
            }
        }, 2000)
    })
}

function cleanRoom() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cleaned = true
            if (cleaned) {
                resolve ("You cleaned the room!🧹")
            }else{
                reject("You DIDN'T cleaned the room!❌")
            }
        }, 1500)
    })
}

function trash() {
    return new Promise((resolve, reject) => {
        const tookOutTrash = true
        if (tookOutTrash) {
            resolve("You took out trash!🚮")
        }else {
            reject("You DIDN'T took out trash!❌")
        }
    }, 1000)
}

async function resultOfChore() {
    try {
        const walkedDogResult = await walkDog()
        console.log(walkedDogResult)

        const cleanRoomResult = await cleanRoom()
        console.log(cleanRoomResult)

        const trashResult = await trash()
        console.log(trashResult)

        console.log("Good job, you did all chore!🎉")

    }catch (error) {
        console.error(error);
    }

}

resultOfChore()