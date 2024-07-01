"use client";

import { Nodes } from "@/test";
import TreeNode from "./TreeNode";
import { useEffect, useState } from "react";
import TopBar from "./TopBar";
interface Node {
  Value: number;
  ParentNode?: number;
  isRootNode?: boolean;
  children: Node[];
  // Include other properties from `node` that you expect to use
}



const Canvas = () => {

  const [nodes,setNodes] = useState(Nodes);
  // const [nodesMap, setNodesMap] = useState({});

  const nodesMap = nodes.reduce((acc, node) => {
    acc[node.Value] = { ...node, children: [] };
    return acc;
}, {});

  nodes.forEach(node => {
      if (!node.isRootNode) {
          nodesMap[node.ParentNode].children.push(nodesMap[node.Value]);
      }
  });

// useEffect(() => {
//   const map: Record<number, Node> = {}; 
//   // First pass to create nodes in the map
//   nodes.forEach(node => {
//     map[node.Value] = { ...node, children: [] };
//   });
//   // Second pass to populate children
//   nodes.forEach(node => {
//     if (node.ParentNode && map[node.ParentNode]) {
//       map[node.ParentNode].children.push(map[node.Value]);
//     } else if (!node.isRootNode) {
//       console.error(`ParentNode ${node.ParentNode} not found for node ${node.Value}`);
//     }
//   });
//   setNodesMap(map); // Update nodesMap state
// }, [nodes]);

  // console.log(nodesMap);
  
  // Function to find and return the root node
  function findRootNode(nodesMap) {
      return Object.values(nodesMap).find(node => node.isRootNode);
  }


  const rootNode = findRootNode(nodesMap);


  // Function to add a child node
  const addChild = (node) => {
    const newNode = { Value: '1', children: [], ParentNode: node.Value }; // Example structure, adjust as needed
    setNodes(prevNodes => [...prevNodes, newNode]);
  };

   // Function to delete a node
   const deleteNode = (nodeValue) => {
    // Helper function to find all descendants of a node
    const findAllDescendants = (nodeValue, nodes) => {
      let toDelete = [nodeValue];
      let sizeBefore = 0;
      // Repeat until no new nodes are added to the toDelete array
      while (sizeBefore !== toDelete.length) {
        sizeBefore = toDelete.length;
        nodes.forEach(node => {
          if (toDelete.includes(node.ParentNode) && !toDelete.includes(node.Value)) {
            toDelete.push(node.Value);
          }
        });
      }
      return toDelete;
    };
  
    // Use the helper function to get all nodes to be deleted
    const nodesToDelete = findAllDescendants(nodeValue, nodes);
  
    // Filter out the nodes to be deleted
    setNodes(prevNodes => prevNodes.filter(n => !nodesToDelete.includes(n.Value)));
  };
  // Function to update a node's value
  const updateNode = (node, newValue) => {
    setNodes(prevNodes => prevNodes.map(n => n.Value === node.Value ? { ...n, Value: newValue } : n));
  };
  

  return (
    <div className="flex flex-col">
      <div>
        <TopBar/>
      </div>
      <div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col items-center">
            <TreeNode node={rootNode} addChild={addChild} deleteNode={deleteNode} updateNode={updateNode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;