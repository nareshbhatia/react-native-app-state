import React, { useEffect } from 'react';
import { AppState, AppStateStatus, SafeAreaView } from 'react-native';
import { GlobalStateProvider } from './contexts';
import { GreetingPage } from './pages';

export const App = () => {
    console.log('Rendering App');

    useEffect(() => {
        AppState.addEventListener('change', handleAppStateChange);

        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);

    const handleAppStateChange = (nextAppState: AppStateStatus) => {
        console.log(`nextAppState: ${nextAppState}`);
    };

    return (
        <SafeAreaView>
            <GlobalStateProvider>
                <GreetingPage />
            </GlobalStateProvider>
        </SafeAreaView>
    );
};
