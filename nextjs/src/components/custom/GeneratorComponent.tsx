import { Suspense, type AwaitedReactNode, type FC } from "react";

export type Generator = AsyncGenerator<AwaitedReactNode, AwaitedReactNode, AwaitedReactNode>;

// eslint-disable-next-line react-refresh/only-export-components
export function generatorComponent<T>(generatorFn: (props: T) => Generator): FC<T> {
  return function _GeneratorComponent(props: T) {
    return <GeneratorComponent generator={generatorFn(props)} />;
  };
}

export async function GeneratorComponent({ generator }: { generator: Generator }) {
  const result = await generator.next();
  if (result.done) return result.value;

  return (
    <Suspense fallback={result.value}>
      <GeneratorComponent generator={generator} />
    </Suspense>
  );
}
