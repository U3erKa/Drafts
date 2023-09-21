import assert from "node:assert"
import { mock, test } from "node:test"

test("spies on a function", () => {
  const sum = mock.fn((a, b) => {
    return a + b
  })

  assert.strictEqual(sum.mock.calls.length, 0)
  assert.strictEqual(sum(3, 4), 7)
  assert.strictEqual(sum.mock.calls.length, 1)

  const call = sum.mock.calls[0]
  // @ts-expect-error
  assert.deepStrictEqual(call.arguments, [3, 4])
  // @ts-expect-error
  assert.strictEqual(call.result, 7)
  // @ts-expect-error
  assert.strictEqual(call.error, undefined)

  // Reset the globally tracked mocks.
  mock.reset()
})
test("spies on an object method", (t) => {
  const number = {
    value: 5,
    add(/** @type {number} */ a) {
      return this.value + a
    },
  }

  t.mock.method(number, "add")
  // @ts-expect-error
  assert.strictEqual(number.add.mock.calls.length, 0)
  assert.strictEqual(number.add(3), 8)
  // @ts-expect-error
  assert.strictEqual(number.add.mock.calls.length, 1)

  // @ts-expect-error
  const call = number.add.mock.calls[0]

  assert.deepStrictEqual(call.arguments, [3])
  assert.strictEqual(call.result, 8)
  assert.strictEqual(call.target, undefined)
  assert.strictEqual(call.this, number)
})

test("mocks setTimeout to be executed synchronously without having to actually wait for it", () => {
  const fn = mock.fn()

  // Optionally choose what to mock
  mock.timers.enable(["setTimeout"])
  setTimeout(fn, 9999)
  assert.strictEqual(fn.mock.callCount(), 0)

  // Advance in time
  mock.timers.tick(9999)
  assert.strictEqual(fn.mock.callCount(), 1)

  // Reset the globally tracked mocks.
  mock.timers.reset()

  // If you call reset mock instance, it'll also reset timers instance
  mock.reset()
})

test("mocks setTimeout to be executed synchronously without having to actually wait for it", (context) => {
  const fn = context.mock.fn()

  // Optionally choose what to mock
  context.mock.timers.enable(["setTimeout"])
  setTimeout(fn, 9999)
  assert.strictEqual(fn.mock.callCount(), 0)

  // Advance in time
  context.mock.timers.tick(9999)
  assert.strictEqual(fn.mock.callCount(), 1)
})
