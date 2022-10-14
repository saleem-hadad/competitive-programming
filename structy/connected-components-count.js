/*
Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph. The function should return the number of connected components within the graph.
*/

const connectedComponentsCount = (graph) => {
    let visited = new Set()
    
    let counter = 0;
    for(let source in graph) {
      if(connectedComponentsCountHelper(graph, source, visited)) {
        counter++;
      }
    }
    return counter;
  };
  
  const connectedComponentsCountHelper = (graph, source, visited) => {
    if(visited.has(String(source))) return 0;
    visited.add(String(source));
    
    for(let nextNode of graph[source]) {
      connectedComponentsCountHelper(graph, nextNode, visited);
    }
    
    return 1;
  }