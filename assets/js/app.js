// assets/js/app.js
import { QuickCalculator } from './calculator.js';

function App() {
    const [activeTab, setActiveTab] = React.useState('dashboard');

    return (
        <div className="app-container">
            {/* মেইন হেডার */}
            <header className="header">
                <h1>OrthoGro</h1>
                <div className="header-icon" onClick={() => setActiveTab('calculator')}>
                    <span className="material-icons">calculate</span>
                </div>
            </header>

            {/* মেইন কন্টেন্ট এরিয়া */}
            <main className="content">
                {activeTab === 'dashboard' && (
                    <div>
                        <div className="net-worth-card" onClick={() => setActiveTab('calculator')}>
                            <div className="top-row">
                                <span>Net Worth</span>
                                <span className="material-icons">arrow_forward</span>
                            </div>
                            <h2>৳ 0</h2>
                            <div className="sub-row">
                                <span>Tap to open Calculator</span>
                                <span>Modular v1.0</span>
                            </div>
                        </div>
                        <div className="page text-center py-8">
                            <h3 className="text-lg font-bold text-slate-700 mb-2">স্বাগতম OrthoGro-তে!</h3>
                            <p className="text-sm text-slate-500">আমাদের মডিউলার আর্কিটেকচার সফলভাবে কাজ করছে।</p>
                        </div>
                    </div>
                )}

                {activeTab === 'calculator' && (
                    <div>
                        <button className="back-btn" onClick={() => setActiveTab('dashboard')}>
                            <span className="material-icons">arrow_back</span> ড্যাশবোর্ডে ফিরে যান
                        </button>
                        <QuickCalculator onUseValue={(val) => {
                            alert('নির্বাচিত মান: ' + val);
                            setActiveTab('dashboard');
                        }} />
                    </div>
                )}
            </main>

            {/* নিচের নেভিগেশন বার */}
            <nav className="bottom-nav">
                <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
                    <span className="material-icons">dashboard</span>
                    <span>Home</span>
                </button>
                <button className={activeTab === 'calculator' ? 'active' : ''} onClick={() => setActiveTab('calculator')}>
                    <span className="material-icons">calculate</span>
                    <span>Calculator</span>
                </button>
            </nav>
        </div>
    );
}

// রিয়্যাক্ট রেন্ডারিং
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
