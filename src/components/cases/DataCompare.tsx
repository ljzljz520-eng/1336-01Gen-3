import { TrendingUp, TrendingDown, ArrowRight } from 'lucide-react';

interface DataCompareProps {
  before: Record<string, number>;
  after: Record<string, number>;
  labels?: Record<string, string>;
  units?: Record<string, string>;
}

const defaultLabels: Record<string, string> = {
  efficiency: '生产效率',
  cost: '人力成本',
  yieldRate: '良品率',
};

const defaultUnits: Record<string, string> = {
  efficiency: '件/天',
  cost: '人/班',
  yieldRate: '%',
};

const isPositiveMetric = (key: string) => {
  return ['efficiency', 'yieldRate', 'quality'].includes(key);
};

const DataCompare = ({ before, after, labels = defaultLabels, units = defaultUnits }: DataCompareProps) => {
  const keys = Object.keys(before);

  const getChangePercent = (key: string) => {
    const b = before[key];
    const a = after[key];
    if (b === 0) return 0;
    return ((a - b) / b) * 100;
  };

  const isImprovement = (key: string) => {
    const change = getChangePercent(key);
    if (isPositiveMetric(key)) {
      return change > 0;
    }
    return change < 0;
  };

  const getAbsoluteChange = (key: string) => {
    return Math.abs(after[key] - before[key]);
  };

  return (
    <div className="space-y-6">
      {keys.map((key) => {
        const change = getChangePercent(key);
        const improved = isImprovement(key);
        const unit = units[key] || '';
        const label = labels[key] || key;

        return (
          <div key={key} className="bg-white rounded-xl p-6 border border-steel-200">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-semibold text-steel-900">{label}</h4>
              <div
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                  improved
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-rose-100 text-rose-700'
                }`}
              >
                {improved ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {change > 0 ? '+' : ''}
                {change.toFixed(1)}%
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-steel-50 rounded-lg p-4">
                <div className="text-sm text-steel-500 mb-1">改造前</div>
                <div className="text-2xl font-bold text-steel-700 font-mono">
                  {before[key]}
                  <span className="text-sm font-normal text-steel-500 ml-1">{unit}</span>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 relative">
                <div className="text-sm text-emerald-600 mb-1">改造后</div>
                <div className="text-2xl font-bold text-emerald-700 font-mono">
                  {after[key]}
                  <span className="text-sm font-normal text-emerald-600 ml-1">{unit}</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-steel-500 w-12">0%</span>
                <div className="flex-1 h-2 bg-steel-200 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-steel-400 rounded-full"
                    style={{
                      width: `${Math.min((before[key] / Math.max(before[key], after[key])) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-emerald-600 w-12">100%</span>
                <div className="flex-1 h-2 bg-emerald-100 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                    style={{
                      width: `${(after[key] / Math.max(before[key], after[key])) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-industrial-orange-500" />
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-sm">
              <span className="text-steel-500">变化量：</span>
              <span className={`font-semibold ${improved ? 'text-emerald-600' : 'text-rose-600'}`}>
                {change > 0 ? '+' : ''}
                {getAbsoluteChange(key)} {unit}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DataCompare;
