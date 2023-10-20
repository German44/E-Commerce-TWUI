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
                color="warning"
                aria-label="Static Actions"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={setSelectedKeys}
            >
                <DropdownItem key="Ropa masculina"><Link to={`/category/men's clothing`}>Ropa masculina</Link></DropdownItem>
                <DropdownItem key="Ropa femenina"><Link to={`/category/women's clothing`}>Ropa femenina</Link></DropdownItem>
                <DropdownItem key="joyas"><Link to={`/category/jewelery`}>Joyas</Link></DropdownItem>
                <DropdownItem key="Electronica"><Link to={`/category/electronics`}>Electronica</Link></DropdownItem>

            </DropdownMenu>
        </Dropdown>
    );
}
