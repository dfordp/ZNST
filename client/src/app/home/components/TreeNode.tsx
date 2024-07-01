"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const TreeNode = ({ node, depth = 0, addChild, deleteNode, updateNode }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    updateNode(inputValue); // Assuming updateNode accepts the new value as an argument
    setIsModalOpen(false); // Close the modal
    setInputValue(''); // Reset input values
  };

  const openModal = () => {
    setIsModalOpen(true);
    setShowMenu(false); // Optionally close the menu when opening the modal
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="border-2 border-black rounded-full w-12 h-12 flex items-center justify-center cursor-pointer" onClick={toggleMenu}>
        {node.Value}
      </div>
      {showMenu && (
        <div className="absolute mt-8 bg-white shadow-lg rounded-lg w-32">
          <ul className="text-sm text-gray-700">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={addChild}>Add Child</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={() => deleteNode(node.Value)}>Delete</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer" onClick={openModal}>Update</li>
          </ul>
        </div>
      )}
      {isModalOpen && (
        <div className="modal">
          <Input type="text" value={inputValue} onChange={handleInputChange} />
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
      )}
      {node.children && node.children.length > 0 && (
        <div className="relative mt-2.5 flex flex-row flex-wrap">
          {node.children.map((child, index) => (
            <div key={index} className="mr-4">
              <TreeNode
                node={child}
                depth={depth + 1}
                addChild={addChild}
                deleteNode={deleteNode}
                updateNode={updateNode}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;