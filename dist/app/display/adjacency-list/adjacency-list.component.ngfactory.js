/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './adjacency-list.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/common';
import * as import3 from './adjacency-list.component';
import * as import4 from '../../graphs/edit.service';
var styles_AdjacencyListComponent = [import0.styles];
export var RenderType_AdjacencyListComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_AdjacencyListComponent,
    data: {}
});
function View_AdjacencyListComponent_2(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'span', [[
                'class',
                'weight'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			(weight)\n		']))
    ], null, null);
}
function View_AdjacencyListComponent_6(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'span', [[
                'class',
                'edge-weight'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '\n								(',
            ')\n							'
        ]))
    ], null, function (ck, v) {
        var currVal_0 = v.parent.parent.context.$implicit.edgeWeight;
        ck(v, 1, 0, currVal_0);
    });
}
function View_AdjacencyListComponent_5(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 4, 'span', [[
                'class',
                'relative'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n							→\n							'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyListComponent_6)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n						']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.graph.weighted;
        ck(v, 3, 0, currVal_0);
    }, null);
}
function View_AdjacencyListComponent_7(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n							↴\n						']))
    ], null, null);
}
function View_AdjacencyListComponent_4(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 10, 'li', [[
                'class',
                'neighbor'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n						'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyListComponent_5)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n						'])),
        (l()(), import1.ɵeld(0, null, null, 1, 'span', [[
                'class',
                'neighbor-name'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '\n							',
            '\n						'
        ])),
        (l()(), import1.ɵted(null, ['\n						'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyListComponent_7)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n					']))
    ], function (ck, v) {
        var currVal_0 = (v.context.index < (v.parent.context.$implicit.neighbors.length - 0));
        ck(v, 3, 0, currVal_0);
        var currVal_2 = (v.context.index == (v.parent.context.$implicit.neighbors.length - 1));
        ck(v, 9, 0, currVal_2);
    }, function (ck, v) {
        var currVal_1 = v.context.$implicit.node.name;
        ck(v, 6, 0, currVal_1);
    });
}
function View_AdjacencyListComponent_3(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 10, 'li', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n				'])),
        (l()(), import1.ɵeld(0, null, null, 1, 'span', [[
                'class',
                'vertex-name'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, [
            '',
            ':'
        ])),
        (l()(), import1.ɵted(null, ['\n				'])),
        (l()(), import1.ɵeld(0, null, null, 4, 'ul', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n					'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyListComponent_4)),
        import1.ɵdid(401408, null, 0, import2.NgForOf, [
            import1.ViewContainerRef,
            import1.TemplateRef,
            import1.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n				'])),
        (l()(), import1.ɵted(null, ['\n			']))
    ], function (ck, v) {
        var currVal_1 = v.context.$implicit.neighbors;
        ck(v, 8, 0, currVal_1);
    }, function (ck, v) {
        var currVal_0 = v.context.$implicit.name;
        ck(v, 3, 0, currVal_0);
    });
}
function View_AdjacencyListComponent_1(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 24, 'figure', [[
                'class',
                'list-container'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n	'])),
        (l()(), import1.ɵeld(0, null, null, 12, 'figcaption', [[
                'class',
                'caption'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵeld(0, null, null, 1, 'strong', [], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['vertex: '])),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵeld(0, null, null, 3, 'span', [], null, null, null, null, null)),
        import1.ɵdid(139264, null, 0, import2.NgClass, [
            import1.IterableDiffers,
            import1.KeyValueDiffers,
            import1.ElementRef,
            import1.Renderer
        ], { ngClass: [
                0,
                'ngClass'
            ]
        }, null),
        import1.ɵpod(['arrow']),
        (l()(), import1.ɵted(null, ['→'])),
        (l()(), import1.ɵted(null, [' \n		'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyListComponent_2)),
        import1.ɵdid(8192, null, 0, import2.NgIf, [
            import1.ViewContainerRef,
            import1.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import1.ɵted(null, ['\n		neighbor\n	'])),
        (l()(), import1.ɵted(null, ['\n	'])),
        (l()(), import1.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'inner-container'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵeld(0, null, null, 4, 'ul', [[
                'class',
                'adjacency-list'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyListComponent_3)),
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
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = ck(v, 9, 0, co.graph.weighted);
        ck(v, 8, 0, currVal_0);
        var currVal_1 = co.graph.weighted;
        ck(v, 13, 0, currVal_1);
        var currVal_2 = co.graph.vertices;
        ck(v, 21, 0, currVal_2);
    }, null);
}
export function View_AdjacencyListComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵand(8388608, null, null, 1, null, View_AdjacencyListComponent_1)),
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
function View_AdjacencyListComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 1, 'adjacency-list', [], null, null, null, View_AdjacencyListComponent_0, RenderType_AdjacencyListComponent)),
        import1.ɵdid(57344, null, 0, import3.AdjacencyListComponent, [import4.EditService], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var AdjacencyListComponentNgFactory = import1.ɵccf('adjacency-list', import3.AdjacencyListComponent, View_AdjacencyListComponent_Host_0, {}, {}, []);