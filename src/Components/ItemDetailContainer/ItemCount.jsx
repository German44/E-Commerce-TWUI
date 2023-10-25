
import { Button } from "@nextui-org/react";
import { useState } from "react";

const Counter = () => {

    const [counter, setCounter] = useState(1);

    function resta() {
        counter > 1 && setCounter(counter - 1)
    }

    function suma() {
        counter < 10 && setCounter(counter + 1);
    }

    return (
        <div className=" w-full flex justify-around ">
            <Button
                onClick={suma}
                color="secondary">
                +
            </Button>
            <p className=" flex items-center justify-center rounded-lg bg-warning w-[40px] h-[40px] text-lg color-purple-700 font-bold ">{counter}</p>
            <Button
                onClick={resta}
                color="secondary">
                -
            </Button>
        </div>
    )
}

export default Counter