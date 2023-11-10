import { Snippet } from "@nextui-org/react";


export default function ModalCheckout() {

    return (
        <div className="bg-site w-full h-[80vh] flex items-center justify-center">
            <div className="bg-black/60 backdrop:blur-xl w-1/2 h-3/4 rounded-lg flex justify-center items-center">
                <div className=" bg-white/10 backdrop:blur-xl w-3/4 h-3/4 rounded-lg flex flex-col justify-around items-center ">
                    <h2 className="text-warning-500 text-3xl">Tu compra se realizo con exito</h2>
                    <h3 className="text-warning-500 text-2xl">La ID de tu orden es <Snippet>id53453fhbdtbhb364e</Snippet></h3>
                </div>
            </div>
        </div>
    );
}
