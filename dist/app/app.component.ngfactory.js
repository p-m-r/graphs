/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from './app.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from './graphs/graph-list/graph-list.component.ngfactory';
import * as import3 from './graphs/graph-list/graph-list.component';
import * as import4 from './graphs/graph.service';
import * as import5 from './graphs/edit.service';
import * as import6 from './display/display.component.ngfactory';
import * as import7 from './display/display.component';
import * as import8 from './graphs/graph-menu/graph-menu.component.ngfactory';
import * as import9 from './graphs/graph-menu/graph-menu.component';
import * as import10 from './app.component';
var styles_AppComponent = [import0.styles];
export var RenderType_AppComponent = import1.ɵcrt({
    encapsulation: 0,
    styles: styles_AppComponent,
    data: {}
});
export function View_AppComponent_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 22, 'div', [[
                'class',
                'container content'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n	'])),
        (l()(), import1.ɵeld(0, null, null, 19, 'div', [[
                'class',
                'row'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n   			'])),
        (l()(), import1.ɵeld(0, null, null, 1, 'graph-list', [], null, null, null, import2.View_GraphListComponent_0, import2.RenderType_GraphListComponent)),
        import1.ɵdid(57344, null, 0, import3.GraphListComponent, [
            import4.GraphService,
            import5.EditService
        ], null, null),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'col-md-6'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵeld(0, null, null, 1, 'display', [], null, null, null, import6.View_DisplayComponent_0, import6.RenderType_DisplayComponent)),
        import1.ɵdid(24576, null, 0, import7.DisplayComponent, [import5.EditService], null, null),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵeld(0, null, null, 4, 'div', [[
                'class',
                'col-md-3'
            ]
        ], null, null, null, null, null)),
        (l()(), import1.ɵted(null, ['\n			'])),
        (l()(), import1.ɵeld(0, null, null, 1, 'graph-menu', [], null, null, null, import8.View_GraphMenuComponent_0, import8.RenderType_GraphMenuComponent)),
        import1.ɵdid(57344, null, 0, import9.GraphMenuComponent, [
            import4.GraphService,
            import5.EditService
        ], null, null),
        (l()(), import1.ɵted(null, ['\n		'])),
        (l()(), import1.ɵted(null, ['\n	'])),
        (l()(), import1.ɵted(null, ['\n']))
    ], function (ck, v) {
        ck(v, 7, 0);
        ck(v, 19, 0);
    }, null);
}
function View_AppComponent_Host_0(l) {
    return import1.ɵvid(0, [
        (l()(), import1.ɵeld(0, null, null, 3, 'app-root', [], null, null, null, View_AppComponent_0, RenderType_AppComponent)),
        import1.ɵdid(24576, null, 0, import10.AppComponent, [], null, null),
        import1.ɵprd(2304, null, import4.GraphService, import4.GraphService, []),
        import1.ɵprd(2304, null, import5.EditService, import5.EditService, [])
    ], null, null);
}
export var AppComponentNgFactory = import1.ɵccf('app-root', import10.AppComponent, View_AppComponent_Host_0, {}, {}, []);
