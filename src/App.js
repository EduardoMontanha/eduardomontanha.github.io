import React from 'react';

import LanguageContextProvider from './context/LanguageContext';

import NavigationBar from './components/Navigation/NavigationBar';
import Header from './components/Header/Header';
import Exchange from './components/Exchange/Exchange';
import About from './components/About/About';
import Wallet from './components/Wallet/Wallet';
import Machine from './components/Machine/Machine';
import Card from './components/Card/Card';
import Whitepaper from './components/Whitepaper/Whitepaper';
import Roadmap from './components/Roadmap/Roadmap';
import Financing from './components/Financing/Financing';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Modal from "./components/common/Modal";


class App extends React.Component {
    render() {
        return (
            <LanguageContextProvider>
                <NavigationBar />
                <Header />
                <Exchange />
                <main>
                    <About />
                    <Wallet />
                    <Machine />
                    <Card />
                    <Whitepaper />
                    <Roadmap />
                    <Financing />
                    <Faq />
                </main>
                <Footer />
                <Modal />
            </LanguageContextProvider>
        );
    }
}

export default App;
