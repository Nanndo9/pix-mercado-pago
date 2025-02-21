import React from 'react';
import PixPaymentForm from './components/PixPaymentForm';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';


const App: React.FC = () => {
    return (
        <div className="App">
            <main>
                <PixPaymentForm />
            </main>
        </div>
    );
};

export default App;