// assets/js/calculator.js

export function QuickCalculator({ onUseValue }) {
    const [currentInput, setCurrentInput] = React.useState('0');
    const [previousInput, setPreviousInput] = React.useState('');
    const [operation, setOperation] = React.useState(null);
    const [resetScreen, setResetScreen] = React.useState(false);

    const handleNumber = (num) => {
        if (currentInput === '0' || resetScreen) {
            setCurrentInput(String(num));
            setResetScreen(false);
        } else {
            setCurrentInput(currentInput + num);
        }
    };

    const handleDecimal = () => {
        if (resetScreen) {
            setCurrentInput('0.');
            setResetScreen(false);
            return;
        }
        if (!currentInput.includes('.')) {
            setCurrentInput(currentInput + '.');
        }
    };

    const handleOperator = (op) => {
        if (operation !== null && !resetScreen) {
            calculate();
        }
        setPreviousInput(currentInput);
        setOperation(op);
        setResetScreen(true);
    };

    const calculate = () => {
        if (operation === null || resetScreen) return;
        let result = 0;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);

        switch (operation) {
            case '+': result = prev + curr; break;
            case '-': result = prev - curr; break;
            case '*': result = prev * curr; break;
            case '/': result = curr !== 0 ? prev / curr : 0; break;
            default: return;
        }

        setCurrentInput(String(result));
        setOperation(null);
        setPreviousInput('');
        setResetScreen(true);
    };

    const clearAll = () => {
        setCurrentInput('0');
        setPreviousInput('');
        setOperation(null);
        setResetScreen(false);
    };

    const deleteDigit = () => {
        if (currentInput.length > 1) {
            setCurrentInput(currentInput.slice(0, -1));
        } else {
            setCurrentInput('0');
        }
    };

    return (
        <div className="bg-white w-full max-w-xs mx-auto rounded-3xl shadow-xl overflow-hidden border border-slate-200">
            {/* ক্যালকুলেটর ডিসপ্লে */}
            <div className="bg-slate-900 p-4 text-right text-white">
                <div className="text-xs text-slate-400 h-5">
                    {previousInput} {operation}
                </div>
                <div className="text-3xl font-bold tracking-wider truncate">
                    {currentInput}
                </div>
            </div>

            {/* কিপ্যাড বা বাটনগুলো */}
            <div className="grid grid-cols-4 gap-2 p-3 bg-slate-50">
                <button onClick={clearAll} className="p-3 bg-red-50 text-red-600 rounded-xl font-bold hover:bg-red-100">AC</button>
                <button onClick={deleteDigit} className="p-3 bg-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-300">⌫</button>
                <button onClick={() => handleOperator('/')} className="p-3 bg-emerald-50 text-emerald-600 rounded-xl font-bold hover:bg-emerald-100">÷</button>
                <button onClick={() => handleOperator('*')} className="p-3 bg-emerald-50 text-emerald-600 rounded-xl font-bold hover:bg-emerald-100">×</button>

                <button onClick={() => handleNumber(7)} className="p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">7</button>
                <button onClick={() => handleNumber(8)} className="p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">8</button>
                <button onClick={() => handleNumber(9)} className="p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">9</button>
                <button onClick={() => handleOperator('-')} className="p-3 bg-emerald-50 text-emerald-600 rounded-xl font-bold hover:bg-emerald-100">-</button>

                <button onClick={() => handleNumber(4)} className="p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">4</button>
                <button onClick={() => handleNumber(5)} className="p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">5</button>
                <button onClick={() => handleNumber(6)} className="p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">6</button>
                <button onClick={() => handleOperator('+')} className="p-3 bg-emerald-50 text-emerald-600 rounded-xl font-bold hover:bg-emerald-100">+</button>

                <button onClick={() => handleNumber(1)} className="p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">1</button>
                <button onClick={() => handleNumber(2)} className="p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">2</button>
                <button onClick={() => handleNumber(3)} className="p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">3</button>
                <button onClick={calculate} className="row-span-2 p-3 bg-emerald-600 text-white rounded-xl font-bold flex items-center justify-center hover:bg-emerald-700">=</button>

                <button onClick={() => handleNumber(0)} className="col-span-2 p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">0</button>
                <button onClick={handleDecimal} className="p-3 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-100">.</button>
            </div>

            {/* ইউজ বাটন (যদি ক্যালকুলেটরের ফলাফল মেইন ফর্মে বসাতে চান) */}
            {onUseValue && (
                <div className="p-3 bg-slate-100 border-t border-slate-200">
                    <button 
                        onClick={() => onUseValue(currentInput)} 
                        className="w-full py-2 bg-emerald-600 text-white rounded-xl font-bold text-sm shadow-md hover:bg-emerald-700">
                        Use Value ({currentInput})
                    </button>
                </div>
            )}
        </div>
    );
}
