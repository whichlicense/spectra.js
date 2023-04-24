export function milliseconds(identity: bigint): number {
    return Number((identity >> 23n) & ((1n << 41n) - 1n));
}

export function time(identity: bigint): Date {
    return new Date(milliseconds(identity) + 1680979723157);
}

export function zone(identity: bigint): number {
    return Number((identity >> 16n) & 0x7Fn);
}

export function replica(identity: bigint): number {
    return Number((identity >> 14n) & 0x3n);
}

export function context(identity: bigint): number {
    return Number(identity & ((1n << 14n) - 1n));
}

export function toHex(identity: bigint): string {
    return identity.toString(16);
}

export function fromHex(identity: string): bigint {
    return BigInt('0x' + identity);
}
