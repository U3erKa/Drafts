import { generatorComponent } from '@/components/custom/GeneratorComponent';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

function sleep(ms: number) {
  return new Promise<void>((res) => {
    setTimeout(res, ms);
  });
}

const StepCount = generatorComponent(async function* (props) {
  let index = 0;
  for (; index < 5; index++) {
    yield index;
    await sleep(2000);
  }
  return index;
});

export default function GeneratorPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">The contents below are being streamed</h1>
      <div className="flex w-64 items-center justify-center bg-gray-800 py-8 text-xl">
        <h1>
          Step <StepCount />
        </h1>
      </div>
    </div>
  );
}
