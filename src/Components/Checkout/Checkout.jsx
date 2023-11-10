import { Input } from "@nextui-org/react"




const Checkout = () => {
    return (
        <div className="bg-site w-full h-[80vh] flex items-center justify-center">
            <div className="bg-black/60 backdrop:blur-xl w-1/2 h-3/4 rounded-lg">
                <div className=" w-1/2 h-full flex justify-between flex-col p-8">
                    <h3 className="text-warning-500 text-justify text-3xl">Tus Datos</h3>
                    <Input
                        color="warning"
                        type="string"
                        label="Nombre"
                        variant="underlined"
                        className="max-w-xs  text-warning-500 "
                    />
                    <Input
                        color="warning"
                        type="string"
                        label="Apellido"
                        variant="underlined"
                        className="max-w-xs text-warning-500"
                    />
                    <Input
                        color="warning"
                        type="number"
                        label="Telefono"
                        variant="underlined"
                        className="max-w-xs  text-warning-500"
                    />
                    <Input
                        color="warning"
                        type="email"
                        label="Email"
                        variant="underlined"
                        isInvalid={true}
                        className="max-w-xs text-warning-500"
                    />
                    <Input
                        color="warning"
                        type="email"
                        label="Email"
                        variant="underlined"
                        isInvalid={true}
                        errorMessage="Los Emails deben coincidir"
                        className="max-w-xs  text-warning-500"
                    />

                </div>
                <div className="classname"></div>
            </div>
        </div>
    )
}

export default Checkout