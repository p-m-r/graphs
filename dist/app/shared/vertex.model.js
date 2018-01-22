//class representing a vertex. it is important to note 
//that the neighbours should be sorted by the name of the node 
//at all times for all the algorithms to work correctly
var Vertex = (function () {
    function Vertex(name) {
        this.name = '';
        this.neighbors = [];
        //stores the vertices that this vertex is a neighbor of 
        //in a directed graph
        this.incomingNeighbors = [];
        this.name = name;
    }
    Object.defineProperty(Vertex.prototype, "degree", {
        get: function () {
            return this.neighbors.length;
        },
        enumerable: true,
        configurable: true
    });
    return Vertex;
}());
export { Vertex };
