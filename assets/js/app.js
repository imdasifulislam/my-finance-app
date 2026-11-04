// assets/js/app.js
import { QuickCalculator } from './calculator.js';

function App() {
    const [activeTab, setActiveTab] = React.useState('dashboard');

    return React.createElement(
        'div',
        { className: 'app-container' },
        // মেইন হেডার
        React.createElement(
            'header',
            { className: 'header' },
            React.createElement('h1', null, 'OrthoGro'),
            React.createElement(
                'div',
                { className: 'header-icon', onClick: () => setActiveTab('calculator') },
                React.createElement('span', { className: 'material-icons' }, 'calculate')
            )
        ),
        // মেইন কন্টেন্ট এরিয়া
        React.createElement(
            'main',
            { className: 'content' },
            activeTab === 'dashboard'
                ? React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'div',
                        { className: 'net-worth-card', onClick: () => setActiveTab('calculator') },
                        React.createElement(
                            'div',
                            { className: 'top-row' },
                            React.createElement('span', null, 'Net Worth'),
                            React.createElement('span', { className: 'material-icons' }, 'arrow_forward')
                        ),
                        React.createElement('h2', null, '৳ 0'),
                        React.createElement(
                            'div',
                            { className: 'sub-row' },
                            React.createElement('span', null, 'Tap to open Calculator'),
                            React.createElement('span', null, 'Modular v1.0')
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'page text-center py-8' },
                        React.createElement('h3', { className: 'text-lg font-bold text-slate-700 mb-2' }, 'স্বাগতম OrthoGro-তে!'),
                        React.createElement('p', { className: 'text-sm text-slate-500' }, 'আমাদের মডিউলার আর্কিটেকচার সফলভাবে কাজ করছে।')
                    )
                )
                : React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'button',
                        { className: 'back-btn', onClick: () => setActiveTab('dashboard') },
                        React.createElement('span', { className: 'material-icons' }, 'arrow_back'),
                        ' ড্যাশবোর্ডে ফিরে যান'
                    ),
                    React.createElement(QuickCalculator, {
                        onUseValue: (val) => {
                            alert('নির্বাচিত মান: ' + val);
                            setActiveTab('dashboard');
                        }
                    })
                )
        ),
        // নিচের নেভিগেশন বার
        React.createElement(
            'nav',
            { className: 'bottom-nav' },
            React.createElement(
                'button',
                {
                    className: activeTab === 'dashboard' ? 'active' : '',
                    onClick: () => setActiveTab('dashboard')
                },
                React.createElement('span', { className: 'material-icons' }, 'dashboard'),
                React.createElement('span', null, 'Home')
            ),
            React.createElement(
                'button',
                {
                    className: activeTab === 'calculator' ? 'active' : '',
                    onClick: () => setActiveTab('calculator')
                },
                React.createElement('span', { className: 'material-icons' }, 'calculate'),
                React.createElement('span', null, 'Calculator')
            )
        )
    );
}

// রিয়্যাক্ট রেন্ডারিং
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
