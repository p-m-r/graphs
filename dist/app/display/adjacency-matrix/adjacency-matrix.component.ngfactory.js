/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './adjacency-matrix.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/common';
import * as import3 from './adjacency-matrix.component';
import * as import4 from '../../graphs/edit.service';
var styles_AdjacencyMatrixComponent = [import0.styles];
export var RenderType_AdjacencyMatrixComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_AdjacencyMatrixComponent,
    data: {}
});
function View_AdjacencyMatrixComponent_2(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'td', [[
                'class',
                'header'
            ]
        ], [[
                1,
                'width',
                0
            ]
        ], null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.colWidth;
        ck(v, 0, 0, currVal_0);
        var currVal_1 = v.context.$implicit.name;
        ck(v, 1, 0, currVal_1);
    });
}
function View_AdjacencyMatrixComponent_4(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'td', [], [[
                1,
                'width',
                0
            ]
        ], null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ''
        ]))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.colWidth;
        ck(v, 0, 0, currVal_0);
        var currVal_1 = co.getEdgeWeight(v.parent.context.$implicit, v.context.$implicit);
        ck(v, 1, 0, currVal_1);
    });
}
function View_AdjacencyMatrixComponent_3(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 7, 'tr', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵeld(0, null, null, 1, 'th', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ':'
        ])),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyMatrixComponent_4)),
        import1.ɵdid(401408, null, 0, import2.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n		']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_1 = co.graph.vertices;
        ck(v, 6, 0, currVal_1);
    }, function (ck, v) {
        var currVal_0 = v.context.$implicit.name;
        ck(v, 3, 0, currVal_0);
    });
}
function View_AdjacencyMatrixComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 36, 'table', [[
                'class',
                'adjacency-matrix'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n	'])),
        (l()(), import1.ɵeld(0, null, null, 21, 'thead', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵeld(0, null, null, 8, 'tr', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵeld(0, null, null, 0, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵeld(0, null, null, 0, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵeld(0, null, null, 1, 'td', [[
                'class',
                'header'
            ]
        ], [[
                1,
                'colspan',
                0
            ]
        ], null, null, null, null)),
        (l()(), import1.ɵted(null, ['neighbors'])),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵeld(0, null, null, 8, 'tr', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵeld(0, null, null, 0, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵeld(0, null, null, 0, 'td', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyMatrixComponent_2)),
        import1.ɵdid(401408, null, 0, import2.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵted(null, ['\n	'])),
        (l()(), import1.ɵted(null, ['\n	'])),
        (l()(), import1.ɵeld(0, null, null, 10, 'tbody', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵeld(0, null, null, 4, 'tr', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [' \n			'])),
        (l()(), import1.ɵeld(0, null, null, 1, 'th', [[
                'class',
                'vertical-header'
            ]
        ], [[
                1,
                'rowspan',
                0
            ]
        ], null, null, null, null)),
        (l()(), import1.ɵted(null, ['vertices'])),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyMatrixComponent_3)),
        import1.ɵdid(401408, null, 0, import2.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n	'])),
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_1 = co.graph.vertices;
        ck(v, 21, 0, currVal_1);
        var currVal_3 = co.graph.vertices;
        ck(v, 34, 0, currVal_3);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.graph.numberOfVertices;
        ck(v, 10, 0, currVal_0);
        var currVal_2 = (co.graph.numberOfVertices + 1);
        ck(v, 29, 0, currVal_2);
    });
}
export function View_AdjacencyMatrixComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyMatrixComponent_1)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null)
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.graph;
        ck(v, 1, 0, currVal_0);
    }, null);
}
function View_AdjacencyMatrixComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'adjacency-matrix', [], null, null, null, View_AdjacencyMatrixComponent_0, RenderType_AdjacencyMatrixComponent)),
        import1.ɵdid(57344, null, 0, import3.AdjacencyMatrixComponent, [import4.EditService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var AdjacencyMatrixComponentNgFactory = import1.ɵccf('adjacency-matrix', import3.AdjacencyMatrixComponent, View_AdjacencyMatrixComponent_Host_0, {}, {}, []);
