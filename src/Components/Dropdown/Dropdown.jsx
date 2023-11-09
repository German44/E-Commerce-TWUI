import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";



export default function DropDown() {
    const [selectedKeys, setSelectedKeys] = React.useState(new Set(["categorias"]));

    const selectedValue = React.useMemo(
        () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
        [selectedKeys]
    );

    return (

        <Dropdown>
            <DropdownTrigger>
                <Button
                    color="warning"

                    variant="bordered"
                    className="capitalize "
                >
                    {selectedValue}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                className="bg-black text-warning"
                color="warning"
                aria-label="Static Actions"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="Remeras"><Link to={`/remeras`}>Remeras</Link></DropdownItem>
                <DropdownItem key="Buzos"><Link to={`/buzos`}>Buzos</Link></DropdownItem>
                <DropdownItem key="Gorras"><Link to={`/gorras`}>Gorras</Link></DropdownItem>
            </DropdownMenu>
        </Dropdown>

    );
}
