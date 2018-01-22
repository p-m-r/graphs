//a class for conveniently storing edges when executing some of the algorithms
//if the graph is directed, then node1 is treated as the source node and
//node2 as the destination node
var Edge = (function () {
    function Edge(vertex1, vertex2, weight) {
        this.node1 = vertex1;
        this.node2 = vertex2;
        this.weight = weight;
    }
    return Edge;
}());
export { Edge };
