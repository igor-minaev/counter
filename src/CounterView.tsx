import {CounterScreen} from "./CounterScreen.tsx";
import {Button} from "./components/Button.tsx";

type CounterViewPropsType = {
    counterValue: number
    maxValue: number
    isIncreaseDisabledBtn: boolean
    isResetDisabledBtn: boolean
    increaseCounterValue: () => void
    resetCounterValue: () => void
    openSettings: () => void
}

export const CounterView = ({
                                counterValue,
                                maxValue,
                                isIncreaseDisabledBtn,
                                isResetDisabledBtn,
                                increaseCounterValue,
                                resetCounterValue,
                                openSettings
                            }: CounterViewPropsType) => {
    console.log('Child: '+ counterValue)
    return (
        <div>
            <CounterScreen counterValue={counterValue} maxValue={maxValue}/>
            <div className='buttonsWrapper'>
                <Button className='button' disabled={isIncreaseDisabledBtn} onClick={increaseCounterValue}>inc</Button>
                <Button className='button' disabled={isResetDisabledBtn} onClick={resetCounterValue}>reset</Button>
                <Button className='button' onClick={openSettings}>set</Button>
            </div>
        </div>
    );
};

