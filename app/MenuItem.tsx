"use client"
import { useState } from "react"
import { Button, Collapse } from "react-daisyui"

// TODO: Create menu item type
const MenuItem = ({ item }: { item: any }) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    item_data: { name, variations },
  } = item

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button onClick={() => handleOpen()}>{isOpen ? "close" : "open"}</Button>
      <Collapse icon="arrow" open={isOpen} className="py-2">
        <Collapse.Title className="text-xl font-medium">{name}</Collapse.Title>
        <Collapse.Content>
          attribute is necessary to make the div focusable
        </Collapse.Content>
      </Collapse>
    </>
  )
}

export default MenuItem