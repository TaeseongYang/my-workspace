import Counter from '@/components/Counter';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Counter initialValue={0} min={-10} max={20} />
    </div>
  );
}
