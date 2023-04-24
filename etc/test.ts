type NumberStr = `${number}`
type Email = `${string}@${string}.${string}`

let t2: NumberStr = "123123"

const string = "Lorem Ipsum Dolor Sit Amet"
const uppercase = string.toUpperCase() as Uppercase<typeof string>
const lowercase = string.toLowerCase() as Lowercase<typeof string>
let capitalized: Capitalize<typeof lowercase>
let uncapitalized: Uncapitalize<typeof uppercase>

type PropEventSource<Type> = {
  on<Key extends string & keyof Type>(eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void
}

declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>

const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26,
})

person.on("firstNameChanged", (newName) => {
  console.log(`new name is ${newName.toUpperCase()}`)
})

person.on("ageChanged", (newAge) => {
  if (newAge < 0) {
    console.warn("warning! negative age")
  }
})
