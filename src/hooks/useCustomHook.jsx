
const useCustomHook = () => {
    const countToTen = () => {
        for (let i = 0; i < 10; i++){
            console.log(i+1)
        }
    }
    
    const hookValue = 9;

    return [hookValue,countToTen]
}

export default useCustomHook;
