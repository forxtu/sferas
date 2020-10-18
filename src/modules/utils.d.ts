declare module 'utils' {
  type MergeTypes<A> = { [K in keyof A]: A[K] };

  export { MergeTypes };
}
