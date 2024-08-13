import Path from "./Path";
import Vertex from "./Vertex";

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
  const arr = [
    { no: 1, x: 50, y: 40 },
    { no: 2, x: 150, y: 40 },
    { no: 3, x: 270, y: 40 },
    { no: 4, x: 390, y: 40 },
    { no: 5, x: 510, y: 40 },
    { no: 6, x: 630, y: 40 },
    { no: 7, x: 750, y: 40 },
    { no: 8, x: 50, y: 140 },
    { no: 9, x: 150, y: 140 },
    { no: 10, x: 270, y: 140 },
    { no: 11, x: 390, y: 140 },
    { no: 12, x: 510, y: 140 },
    { no: 13, x: 630, y: 140 },
    { no: 14, x: 750, y: 140 },
    { no: 15, x: 50, y: 200 },
    { no: 16, x: 150, y: 260 },
    { no: 17, x: 270, y: 260 },
    { no: 18, x: 390, y: 260 },
    { no: 19, x: 510, y: 260 },
    { no: 20, x: 630, y: 260 },
    { no: 21, x: 750, y: 200 },
    { no: 22, x: 50, y: 340 },
    { no: 23, x: 150, y: 340 },
    { no: 24, x: 270, y: 340 },
    { no: 25, x: 390, y: 340 },
    { no: 26, x: 510, y: 340 },
    { no: 27, x: 630, y: 340 },
    { no: 28, x: 750, y: 340 },
  ];
  const pathList = findShortestPathEdges(
    edgeList,
    parseInt(src),
    parseInt(dest)
  );
  

  const n = pathList.length;
  const vertex1 = arr.find((item) => item.no === src);
  const vertex2 = arr.find((item) => item.no === dest);
  const { x: x1, y: y1 } = vertex1;
  const { x: x2, y: y2 } = vertex2;
  return (
    <>
      <Vertex no={src} type={100} x={x1} y={y1} />
      <Vertex no={dest} type={101} x={x2} y={y2} />
      {pathList.map((item, ind) => (
        <Path key={ind} U={item.u} V={item.v} />
      ))}
    </>
  );
}
export default ShortestDist;
