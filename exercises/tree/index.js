// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {

  constructor(data){
    this.data = data
    this.children = []
  }

  add(data){
    this.children.push(new Node(data))
  }

  remove(data){
  this.children = this.children.filter( el => el.data !== data)
  }

}

class Tree {

  constructor(){
    this.root = null;
  }

  traverseBF(fn){
    let arrayOfNodes = [this.root]

    while(arrayOfNodes.length){
      const firstElement = arrayOfNodes.shift();
      arrayOfNodes.push(...firstElement.children)
      fn(firstElement)
    }
  }

  traverseDF(fn){
    let arrayOfNodes = [this.root]

    while(arrayOfNodes.length){
      const firstElement = arrayOfNodes.shift();
      arrayOfNodes.unshift(...firstElement.children)
      fn(firstElement)
    }
  }



}

module.exports = { Tree, Node };
