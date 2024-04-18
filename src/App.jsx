import React, { useState, useRef, useEffect } from 'react';
import { BinarySearchTreeNode, drawBinaryTree } from 'binary-tree-visualizer';

import './App.css';

function App() {
  // const [arr, setArr] = useState([]); // Use consistent naming convention (setArr)
  const [input, setInput] = useState('');
  const canvasRef = useRef(null);

  const makeTree = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      alert('Please enter a space-separated list of numbers.');
      return;
    }

    const numbers = input.split(' ').map(num => parseInt(num, 10));
    // setArr(numbers);

    const root = new BinarySearchTreeNode(numbers[0]);

    numbers.forEach((num) => {
      try {
        if(!isNaN(num))
        root.insert(num);
      } catch (error) {
        console.error('Error inserting node:', error);

      }
    });

    if (canvasRef.current) {
      drawBinaryTree(root, canvasRef.current);
    }
  };

  return (
    <>
       <div>
      <h2>Binary Search Tree</h2>
    
        <input type='text' className='inp' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={makeTree}>Make BST</button>
        </div>
      <canvas ref={canvasRef} />
    </>
  );
}

export default App;