//class representing a graph. it is important to note
//that the vertices should be sorted by name at all times
//for all the algorithms to work correctly
//TODO: create methods for adding and removing vertices/edges here
//and implement sorting when adding; also implement a getter for max and min
//edge values; the vertices in a graph need to have unique names
var Graph = (function () {
    function Graph(vertices, name) {
        this.name = '';
        this.id = -1;
        this.weighted = false;
        this.directed = false;
        this.stronglyConnected = false;
        this.maxAbsEdgeWeight = 1;
        this.vertices = vertices;
        this.name = name;
    }
    Object.defineProperty(Graph.prototype, "numberOfVertices", {
        get: function () {
            return this.vertices.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Graph.prototype, "numberOfEdges", {
        get: function () {
            var tmp = 0;
            for (var i = 0; i < this.vertices.length; ++i) {
                tmp += this.vertices[i].neighbors.length;
            }
            if (!this.directed)
                tmp /= 2;
            return tmp;
        },
        enumerable: true,
        configurable: true
    });
    Graph.prototype.toString = function () {
        var tmp = 'v: ' + this.numberOfVertices + ', e: ' + this.numberOfEdges;
        if (this.directed)
            tmp += ', d';
        if (this.stronglyConnected)
            tmp += ', sc';
        if (this.weighted)
            tmp += ', w';
        return tmp;
    };
    return Graph;
}());
export { Graph };
