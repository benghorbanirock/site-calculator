import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [enabled, setEnabled] = useState(false);
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    try {
      // هشدار: eval خطرناک است؛ فقط برای اهداف آموزشی
      // مراقب ورودی‌های کاربر باشید
      // eslint-disable-next-line no-eval
      const res = eval(expression);
      setResult(res);
    } catch {
      setResult('خطا');
    }
  };

  return (
    <div className="App" style={{ direction: 'rtl', padding: '2rem', fontFamily: 'Vazir, sans-serif' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ marginTop: '1rem' }}>ماشین حساب</h1>
      </header>

      <main style={{ maxWidth: '400px', margin: '0 auto' }}>
        <label>
          <input
            type="checkbox"
            checked={enabled}
            onChange={() => setEnabled(!enabled)}
          />{' '}
          موافقت برای استفاده
        </label>

        <button
          onClick={handleCalculate}
          disabled={!enabled}
          style={{
            display: 'block',
            width: '100%',
            padding: '0.5rem',
            fontSize: '1rem',
            margin: '1rem 0',
            borderRadius: '8px',
            cursor: enabled ? 'pointer' : 'not-allowed'
          }}
        >
          محاسبه
        </button>

        {enabled && (
          <div>
            <input
              type="text"
              placeholder="عبارت ریاضی را وارد کنید"
              value={expression}
              onChange={e => setExpression(e.target.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                fontSize: '1rem',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
            />
            <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>
              نتیجه: {result}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
