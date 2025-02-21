import * as Progress from '@radix-ui/react-progress';

export default function ProgressBar({ step }) {
  const stepTitles = ['Personal Information', 'Address Information', 'Account Information'];
  const progress = (step / stepTitles.length) * 100;

  return (
    <div className="pb-4">
      <div className="relative w-full bg-gray-200 rounded-lg h-4">
        <Progress.Root value={progress} max={100} className="w-full h-full rounded-lg">
          <Progress.Indicator className="h-full bg-blue-500 rounded-lg transition-all duration-300" style={{ width: `${progress}%` }} />
        </Progress.Root>
      </div>

      <div className="grid grid-cols-3 text-center text-xs font-semibold text-gray-500 mt-1">
        {stepTitles.map((title, index) => (
          <span key={index} className={index < step ? 'text-blue-500' : ''}>{title}</span>
        ))}
      </div>
    </div>
  );
}
