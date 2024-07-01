// export const nodes = [
//     { isRootNode: true, Value: 0 }, 
//     { isRootNode: false, Value: 1, ParentNode: 0 }, 
//     { isRootNode: false, Value: 2, ParentNode: 0 }, 
//     { isRootNode: false , Value: 3 ,ParentNode : 0}, 
//     { isRootNode: false, Value: 4, ParentNode: 3 }, 
//     { isRootNode: false, Value: 5, ParentNode: 2 }, 
//     { isRootNode: false, Value: 6, ParentNode: 2 }, 
//     { isRootNode: false, Value: 7, ParentNode: 4 }, 
//     { isRootNode: false, Value: 8, ParentNode: 4 }  
// ];

type Node = {
    isRootNode: boolean;
    Value: number;
    ParentNode?: number;
  };
  
  const generateTreeWithRandomNumbers = (totalNodes: number): Node[] => {
    const nodes: Node[] = [{ isRootNode: true, Value: 0 }];
    const usedValues = new Set<number>([0]);
  
    // Helper function to generate a unique random number
    const generateUniqueRandomValue = (): number => {
      let randomValue;
      do {
        randomValue = Math.floor(Math.random() * totalNodes); // Increase range to reduce collision probability
      } while (usedValues.has(randomValue));
      usedValues.add(randomValue);
      return randomValue;
    };
  
    for (let i = 1; i < totalNodes; i++) {
      const parentNodeIndex = Math.floor(Math.random() * i); // Ensure parent node exists
      const node: Node = {
        isRootNode: false,
        Value: generateUniqueRandomValue(),
        ParentNode: nodes[parentNodeIndex].Value,
      };
      nodes.push(node);
    }
  
    return nodes;
  };
  
  export const Nodes = generateTreeWithRandomNumbers(10);
  console.log(Nodes); 