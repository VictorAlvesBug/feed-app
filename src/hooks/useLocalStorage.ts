import { useState, useEffect } from 'react';

export default function useLocalStorage<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(() => {
        try {
            const storedValue = localStorage.getItem(key);
            return storedValue ? JSON.parse(storedValue) : defaultValue;
        } catch (error) {
            console.error('Erro ao obter valor do localStorage:', error);
            return defaultValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Erro ao salvar no localStorage:', error);
        }
    }, [value, key]);

    return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
