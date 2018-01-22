/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from './create-graph/create-graph.component.ngfactory';
import * as import2 from './create-graph/create-graph.component';
import * as import3 from '../graph.service';
import * as import4 from './graph-item/graph-item.component.ngfactory';
import * as import5 from './graph-item/graph-item.component';
import * as import6 from './graph-list.component';
import * as import7 from '@angular/common';
import * as import8 from '../edit.service';
var styles_GraphListComponent = ['.bg[_ngcontent-%COMP%] { background-color: rgb(85, 93, 97) }'];
export var RenderType_GraphListComponent = import0.ɵcrt({
    encapsulation: 0,
    styles: styles_GraphListComponent,
    data: {}
});
function View_GraphListComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'create-graph', [], null, [[
                null,
                'graphCreated'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('graphCreated' === en)) {
                var pd_0 = (co.importGraphs() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, import1.View_CreateGraphComponent_0, import1.RenderType_CreateGraphComponent)),
        import0.ɵdid(24576, null, 0, import2.CreateGraphComponent, [import3.GraphService], null, { graphCreated: 'graphCreated' })
    ], null, null);
}
function View_GraphListComponent_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 2, 'graph-item', [], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onSelect(v.context.index) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, import4.View_GraphItemComponent_0, import4.RenderType_GraphItemComponent)),
        import0.ɵdid(24576, null, 0, import5.GraphItemComponent, [], {
            graph: [
                0,
                'graph'
            ],
            selected: [
                1,
                'selected'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['	\n		  	']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = v.context.$implicit;
        var currVal_1 = co.selectedGraph(v.context.$implicit);
        ck(v, 1, 0, currVal_0, currVal_1);
    }, null);
}
export function View_GraphListComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 16, 'div', [[
                'class',
                'panel panel-default'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  	'])),
        (l()(), import0.ɵeld(0, null, null, 13, 'div', [[
                'class',
                'panel-body'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [
            [
                'class',
                'btn btn-success btn-block'
            ],
            [
                'type',
                'button'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onCreate() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Create graph'])),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_GraphListComponent_1)),
        import0.ɵdid(8192, null, 0, import7.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'list-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n		  	'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_GraphListComponent_2)),
        import0.ɵdid(401408, null, 0, import7.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.create;
        ck(v, 8, 0, currVal_0);
        var currVal_1 = co.graphs;
        ck(v, 13, 0, currVal_1);
    }, null);
}
function View_GraphListComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'graph-list', [], null, null, null, View_GraphListComponent_0, RenderType_GraphListComponent)),
        import0.ɵdid(57344, null, 0, import6.GraphListComponent, [
            import3.GraphService,
            import8.EditService
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var GraphListComponentNgFactory = import0.ɵccf('graph-list', import6.GraphListComponent, View_GraphListComponent_Host_0, {}, {}, []);
