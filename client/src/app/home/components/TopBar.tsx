"use client"

import { Button } from "@/components/ui/button"


const TopBar = () => {
  return (
    <div className="flex flex-row justify-between px-4 pt-4">
        <div className="flex flex-row gap-4">
          <Button>
              Undo
          </Button>
          <Button>
              Redo
          </Button>
        </div>
      <div>
        <div className="flex flex-row gap-4">
            <Button>
                Save
            </Button>
            <Button>
                LogOut
            </Button>
          </div>
      </div>
    </div>
  )
}

export default TopBar
