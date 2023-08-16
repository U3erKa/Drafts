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

// Best enum ever
const LOG_LEVEL = {
  DEBUG: "DEBUG",
  WARNING: "WARNING",
  ERROR: "ERROR",
} as const

type ObjectKeys<T> = (keyof T)[]
type ObjectValues<TObj extends object> = TObj[keyof TObj]
// type ObjectEntries<TObj extends object> = [ObjectKeys<TObj>, ObjectValues<TObj>][]
type LogLevel = ObjectValues<typeof LOG_LEVEL>

function log(_message: string, _level: LogLevel) {}

log("Hey", "DEBUG")

type Empty = Record<PropertyKey, never>
type Unknown = {} | null | undefined // {} means any non-nullish value
// Infer is used to extract type
type TSReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never

function getValue<TObj, TKey extends keyof TObj>(obj: TObj, key: TKey): TObj[TKey] {
  return obj[key]
}

const obj = { lorem: "ipsum", universe: 42, isBool: true }
const result = getValue(obj, "isBool")
const keys = Object.keys(obj) as ObjectKeys<typeof obj>

type OptionalValue = number | null | undefined

type User = {
  id: number
  name: string
  age: number
}

type Mutable<T> = { -readonly [K in keyof T]: T[K] }

type ReadOnlyUser = Readonly<User>
type MutableUser = Mutable<ReadOnlyUser>
type RequiredUser = NonNullable<OptionalValue>

type Role = "user" | "moderator" | "administrator"
type ElevatedRole = Exclude<Role, "user">
type LesserRole = Exclude<Role, "moderator" | "administrator">

type RoleAttribute = { role: "user" } | { role: "moderator" } | { role: "administrator"; isAdmin: true }
type AdminRole = Extract<RoleAttribute, { role: "administrator" }>

type GetValueParams = Parameters<typeof getValue<{ test?: boolean }, "test">>

const obj1: Record<string, string[]> & { bar: string[] } = { bar: [] }
// @ts-expect-error
obj1.foo?.push("lorem")
obj1["foo"]?.push("lorem")
obj1.bar.push("qar")

type ActionCreator = { type: "LOGIN"; payload: string } | { type: "LOGOUT" } | { type: "REGISTER"; payload: string }

const dispatch = <Type extends ActionCreator["type"]>(
  ...args: Extract<ActionCreator, { type: Type }> extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [type: Type]
) => {}

dispatch("LOGIN", "fgnebtn")
dispatch("LOGOUT")
dispatch("REGISTER", "sdvsdnmvsldvnsdcjkl")

function createPost(loggedInUserId: string, title: string) {}

class SDK {
  constructor(public loggedInUserId?: string) {}
  createPost(title: string) {
    this.assertLoggedIn()
    createPost(this.loggedInUserId, title)
  }
  assertLoggedIn(): asserts this is this & { loggedInUserId: string } {
    if (!this.loggedInUserId) {
      throw new Error("User is not logged in")
    }
  }
}

type AObj = {
  a: "asd"
  b: "ssdf"
  aa: "qasasfc"
}

type ValuesOfKeysStartingWithA<T, _ExtractedKeys extends keyof T = Extract<keyof T, `a${string}`>> = T[_ExtractedKeys]
type NewUnion = ValuesOfKeysStartingWithA<AObj>
