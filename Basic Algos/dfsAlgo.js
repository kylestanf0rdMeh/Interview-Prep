// this is for a graph and not a Tree, so we must catch cycles

/**
 * Explores as far along each branch before backtracking
 * Start with 1: Stack 2: Visited
 * Visit 0 (put in visited) and put its adjacent nodes that aren't visited in the stack
 * Node 1 at top of stack, (index 0), so visit it (put in visited) and pop from stack and put adjacnt nodes that aren;t visited in stack
 * Node 2 at top, so visit and pop it from the stack and put adjacent nodes which aren't visited in the stack
 * Node 4 at top, visit and pop from stack and put adjacents in stack
 * lastly, node 3 at top, visit and pop and put adjacent nodes in stack
 * 
 * Now the stack is empty, which means we visited all nodes and DFS ends
 */



// Structure for a node in the adjacency list
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}


// Structure for adjacency list
class List{
    constructor(){
        this.head = null;
    }
}


class Graph{
    constructor(vertices){
        this.vertices = vertices
        this.array = new Array(vertices).fill().map(() => new List())
    }
}

function addEdge(graph, src, dest){
    let newNode = new Node(dest)
    newNode.next = graph.array[src].head;
    graph.array[src].head = newNode;
}

// Performs DFS from a given vertex
function DFS(graph, vertex, visited){
    visited[vertex] = true;
    console.log(vertex)

    let currentNode = graph.array[vertex].head;
    while(currentNode){
        let adjacentVertex = currentNode.data;
        if(!visited[adjacentVertex]){
            DFS(graph, adjacentVertex, visited)
        }
        currentNode = currentNode.next;
    }
}

function DFSTraversal(graph, order){
    let visited = new Array(graph.vertices).fill(false);
    for(let i = 0; i < order.length; i++){
        if(!visited[order[i]]){
            DFS(graph, order[i], visited)
        }
    }
}


// Main function
function main() {
    let vertices = 4;
    let graph = new Graph(vertices);
  
    addEdge(graph, 2, 0);
    addEdge(graph, 0, 2);
    addEdge(graph, 1, 2);
    addEdge(graph, 0, 1);
    addEdge(graph, 3, 3);
    addEdge(graph, 1, 3);
  
    let order = [2, 0, 1, 3];
  
    console.log(
      "Following is Depth First Traversal (starting from vertex 2):");
    DFSTraversal(graph, order);
  }
  
  // Invoke the main function
  main();