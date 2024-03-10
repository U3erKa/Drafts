#!/usr/bin/env node

const LANGUAGE = "uk"
const pluralRules = new Intl.PluralRules(LANGUAGE)
const dateTimeFormat = new Intl.DateTimeFormat(LANGUAGE, { dateStyle: "full" })
const numberFormat = new Intl.NumberFormat(LANGUAGE)
const listFormat = new Intl.ListFormat(LANGUAGE)

const resolvedOptions = listFormat.resolvedOptions()

console.log(resolvedOptions)

const bread = {
  one: "паляниця",
  few: "паляниці",
  many: "паляниць",
  get other() {
    return this.one
  },
}

const breadTest = ["Паляниця", "Полуниця", "Попільниця"]

for (let i = 0; i < 10; i++) {
  const pluralRule = pluralRules.select(i)
  // @ts-expect-error
  console.log(numberFormat.format(i), bread[pluralRule])
}

console.log(pluralRules.resolvedOptions())
console.log(listFormat.format(breadTest))
