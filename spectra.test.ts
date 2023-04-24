import { assertEquals } from "https://deno.land/std@0.184.0/testing/asserts.ts"
import { context, fromHex, milliseconds, replica, time, toHex, zone } from "./spectra.ts"

Deno.test("milliseconds", () => {
    for (const identity of [1035624103950n, 1035624112128n, 1035624202281n, 1035624203264n]) {
        assertEquals(milliseconds(identity), 123456)
    }
    for (const identity of [5488842489870n, 5488842493952n, 5488842588201n, 5488842588672n]) {
        assertEquals(milliseconds(identity), 654321)
    }
})

Deno.test("time", () => {
    for (const identity of [1035624103950n, 1035624112128n, 1035624202281n, 1035624203264n]) {
        assertEquals(time(identity), new Date(123456 + 1680979723157))
    }
    for (const identity of [5488842489870n, 5488842493952n, 5488842588201n, 5488842588672n]) {
        assertEquals(time(identity), new Date(654321 + 1680979723157))
    }
})

Deno.test("zone", () => {
    for (const identity of [1035624103950n, 1035624112128n, 5488842489870n, 5488842493952n]) {
        assertEquals(zone(identity), 1)
    }
    for (const identity of [1035624202281n, 1035624203264n, 5488842588201n, 5488842588672n]) {
        assertEquals(zone(identity), 3)
    }
})

Deno.test("replica", () => {
    for (const identity of [1035624103950n, 1035624112128n, 5488842489870n, 5488842493952n]) {
        assertEquals(replica(identity), 3)
    }
    for (const identity of [1035624202281n, 1035624203264n, 5488842588201n, 5488842588672n]) {
        assertEquals(replica(identity), 1)
    }
})

Deno.test("context", () => {
    assertEquals(context(1035624103950n), 14)
    assertEquals(context(1035624112128n), 8192)
    assertEquals(context(1035624202281n), 41)
    assertEquals(context(1035624203264n), 1024)
    assertEquals(context(5488842489870n), 14)
    assertEquals(context(5488842493952n), 4096)
    assertEquals(context(5488842588201n), 41)
    assertEquals(context(5488842588672n), 512)
})

Deno.test("toHex", () => {
    assertEquals(toHex(1035624103950n), "f12001c00e")
    assertEquals(toHex(1035624112128n), "f12001e000")
    assertEquals(toHex(1035624202281n), "f120034029")
    assertEquals(toHex(1035624203264n), "f120034400")
    assertEquals(toHex(5488842489870n), "4fdf881c00e")
    assertEquals(toHex(5488842493952n), "4fdf881d000")
    assertEquals(toHex(5488842588201n), "4fdf8834029")
    assertEquals(toHex(5488842588672n), "4fdf8834200")
})

Deno.test("fromHex", () => {
    assertEquals(fromHex("f12001c00e"), 1035624103950n)
    assertEquals(fromHex("f12001e000"), 1035624112128n)
    assertEquals(fromHex("f120034029"), 1035624202281n)
    assertEquals(fromHex("f120034400"), 1035624203264n)
    assertEquals(fromHex("4fdf881c00e"), 5488842489870n)
    assertEquals(fromHex("4fdf881d000"), 5488842493952n)
    assertEquals(fromHex("4fdf8834029"), 5488842588201n)
    assertEquals(fromHex("4fdf8834200"), 5488842588672n)
})