
export const sum = (a: number, b: number) => a + b
export const mult = (a: number, b: number) => a*b
export const splitIntoWorlds = (sentence: string) => {
    let world = sentence.toLocaleLowerCase().split(" ")
    world.filter(f => f !== ' ')
    return world.map(m => m
        .replace('!', '')
        .replace('?', '')
    )
}

