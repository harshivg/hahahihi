import Path from "./Path";

function findShortestPathEdges(edgeList, start, end) {
  // Convert edge list to adjacency list
  const adjacencyList = {};
  edgeList.forEach(({ u, v }) => {
    if (!adjacencyList[u]) adjacencyList[u] = [];
    if (!adjacencyList[v]) adjacencyList[v] = [];
    adjacencyList[u].push(v);
    adjacencyList[v].push(u); // For undirected graph
  });

  // BFS initialization
  const queue = [start];
  const visited = new Set();
  const parent = {}; // To track the parent nodes

  visited.add(start);
  parent[start] = null; // Start node has no parent

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === end) {
      // Reconstruct the edges of the path
      const edges = [];
      let currentNode = end;

      while (parent[currentNode] !== null) {
        edges.push({ u: parent[currentNode], v: currentNode });
        currentNode = parent[currentNode];
      }

      edges.reverse(); // Reverse to get the path from start to end
      return edges;
    }

    const neighbors = adjacencyList[node] || [];
    neighbors.forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        parent[neighbor] = node;
      }
    });
  }

  return []; // Return an empty array if no path found (though guaranteed to exist)
}
function ShortestDist({ src, dest }) {
  const edgeList = [
    { u: 1, v: 2 },
    { u: 1, v: 8 },
    { u: 9, v: 2 },
    { u: 3, v: 2 },
    { u: 3, v: 10 },
    { u: 3, v: 4 },
    { u: 4, v: 11 },
    { u: 4, v: 5 },
    { u: 5, v: 12 },
    { u: 5, v: 6 },
    { u: 6, v: 13 },
    { u: 6, v: 7 },
    { u: 7, v: 14 },
    { u: 21, v: 14 },
    { u: 21, v: 28 },
    { u: 27, v: 28 },
    { u: 20, v: 27 },
    { u: 13, v: 20 },
    { u: 27, v: 26 },
    { u: 19, v: 26 },
    { u: 19, v: 12 },
    { u: 25, v: 26 },
    { u: 25, v: 18 },
    { u: 11, v: 18 },
    { u: 24, v: 25 },
    { u: 17, v: 24 },
    { u: 17, v: 10 },
    { u: 23, v: 24 },
    { u: 23, v: 16 },
    { u: 22, v: 23 },
    { u: 22, v: 15 },
    { u: 15, v: 8 },
   
  ];
  const pathList = findShortestPathEdges(edgeList, parseInt(src), parseInt(dest));
  console.log(pathList);
  return (
    <>
      {pathList.map((item, ind) => (
        <Path key={ind} U={item.u} V={item.v} />
      ))}
    </>
  );
}
export default ShortestDist;
