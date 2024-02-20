'use client';
import type { PropsWithChildren } from 'react';
import 'temporal-polyfill/global';

console.log(Temporal.Now.zonedDateTimeISO().toString());

export default function TemporalProvider({ children }: PropsWithChildren) {
  return children;
}
