import { Snippet } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function ModalCheckout({ orderId, funcion, validation }) {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    //* Condicional solo modal cuando hay productos
    const openModal = () => {
        validation ?  onOpen() : null
    };

    return (
        <>
            <Button
                onPress={openModal}
                type='submit'
                onClick={funcion}
                color="warning">
                Confirmar compra
            </Button>
            <Modal
                backdrop="opaque"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20"
                }}
            >
                <ModalContent className="bg-black">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-2 text-2xl text-purple-500">Espere Generando Tu compra</ModalHeader>
                            <ModalBody>
                                <h3 className="text-warning-500 text-2xl">Copia la ID de tu orden aqui:</h3>
                                <Snippet color="warning">{orderId}</Snippet>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}