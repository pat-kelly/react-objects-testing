import './App.css';
import Cars from './Cars';

function App() {
  const cars=[
    {name: 'Nissan', models: ['Xterra', 'Frontier', 'Titan'],},
    {name: 'Chevy', models: ['Bel-air', 'Impala', 'Corvair']},
    {name: 'Toyota', models: ['Tacoma', 'AE-86', 'Supra']}
  ]
  return (
    <div>
      <Cars cars={cars} />
    </div>
  );
}

export default App;
