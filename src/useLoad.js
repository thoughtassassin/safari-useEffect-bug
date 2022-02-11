import { useEffect } from 'react';

const useLoad = () => {
    useEffect(() => {
        const oldLoads = JSON.parse(localStorage.getItem('loaded')) || 0;
        const currentLoads = oldLoads + 1;
        localStorage.setItem("loaded", currentLoads);
        console.log(`I was loaded ${currentLoads} times`);
    }, []);
}

export default useLoad;
