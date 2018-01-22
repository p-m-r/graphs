/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
import * as import0 from '@angular/core';
import * as import1 from '@angular/forms';
import * as import2 from '@angular/common';
import * as import3 from './graph-menu.component';
import * as import4 from '../graph.service';
import * as import5 from '../edit.service';
var styles_GraphMenuComponent = [
    '.space[_ngcontent-%COMP%] { margin-bottom: 15px }',
    'select[_ngcontent-%COMP%] { width: 70px; margin-left: 20px; }',
    'label[_ngcontent-%COMP%] { margin: 5px 0 0 25px; font-weight: normal; }',
    '.warning[_ngcontent-%COMP%] { color: rgb(169,68,66); margin-top: 5px; }'
];
export var RenderType_GraphMenuComponent = import0.ɵcrt({
    encapsulation: 0,
    styles: styles_GraphMenuComponent,
    data: {}
});
function View_GraphMenuComponent_3(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'option', [], null, null, null, null, null)),
        import0.ɵdid(73728, null, 0, import1.NgSelectOption, [
            import0.ElementRef,
            import0.Renderer,
            [
                8,
                null
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵdid(73728, null, 0, import1.ɵq, [
            import0.ElementRef,
            import0.Renderer,
            [
                8,
                null
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], function (ck, v) {
        var currVal_0 = v.context.index;
        ck(v, 1, 0, currVal_0);
        var currVal_1 = v.context.index;
        ck(v, 2, 0, currVal_1);
    }, function (ck, v) {
        var currVal_2 = v.context.$implicit.name;
        ck(v, 3, 0, currVal_2);
    });
}
function View_GraphMenuComponent_4(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'p', [[
                'class',
                'warning'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Negative cycle detected.']))
    ], null, null);
}
function View_GraphMenuComponent_2(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 20, 'form', [[
                'novalidate',
                ''
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('submit' === en)) {
                var pd_0 = (import0.ɵnov(v, 2).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (import0.ɵnov(v, 2).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import1.ɵbf, [], null, null),
        import0.ɵdid(8192, null, 0, import1.NgForm, [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], null, null),
        import0.ɵprd(1024, null, import1.ControlContainer, null, [import1.NgForm]),
        import0.ɵdid(8192, null, 0, import1.NgControlStatusGroup, [import1.ControlContainer], null, null),
        (l()(), import0.ɵted(null, ['\n				'])),
        (l()(), import0.ɵeld(0, null, null, 13, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'sourcebf'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['source'])),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵeld(0, null, null, 4, 'select', [
            [
                'class',
                'form-control'
            ],
            [
                'id',
                'sourcebf'
            ],
            [
                'name',
                'sourcebf'
            ]
        ], [[
                8,
                'value',
                0
            ]
        ], [[
                null,
                'change'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('change' === en)) {
                var pd_0 = (co.onBellmanFord($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['\n						'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_GraphMenuComponent_3)),
        import0.ɵdid(401408, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_GraphMenuComponent_4)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n				'])),
        (l()(), import0.ɵted(null, ['\n			']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_8 = co.editService.currentGraph.vertices;
        ck(v, 14, 0, currVal_8);
        var currVal_9 = co.editService.warningBF;
        ck(v, 18, 0, currVal_9);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 4).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 4).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 4).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 4).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 4).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 4).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 4).ngClassPending;
        ck(v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = (0 - 1);
        ck(v, 11, 0, currVal_7);
    });
}
function View_GraphMenuComponent_6(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 3, 'option', [], null, null, null, null, null)),
        import0.ɵdid(73728, null, 0, import1.NgSelectOption, [
            import0.ElementRef,
            import0.Renderer,
            [
                8,
                null
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        import0.ɵdid(73728, null, 0, import1.ɵq, [
            import0.ElementRef,
            import0.Renderer,
            [
                8,
                null
            ]
        ], { value: [
                0,
                'value'
            ]
        }, null),
        (l()(), import0.ɵted(null, [
            '',
            ''
        ]))
    ], function (ck, v) {
        var currVal_0 = v.context.index;
        ck(v, 1, 0, currVal_0);
        var currVal_1 = v.context.index;
        ck(v, 2, 0, currVal_1);
    }, function (ck, v) {
        var currVal_2 = v.context.$implicit.name;
        ck(v, 3, 0, currVal_2);
    });
}
function View_GraphMenuComponent_7(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'p', [[
                'class',
                'warning'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['Negative cycle detected.']))
    ], null, null);
}
function View_GraphMenuComponent_5(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 20, 'form', [[
                'novalidate',
                ''
            ]
        ], [
            [
                2,
                'ng-untouched',
                null
            ],
            [
                2,
                'ng-touched',
                null
            ],
            [
                2,
                'ng-pristine',
                null
            ],
            [
                2,
                'ng-dirty',
                null
            ],
            [
                2,
                'ng-valid',
                null
            ],
            [
                2,
                'ng-invalid',
                null
            ],
            [
                2,
                'ng-pending',
                null
            ]
        ], [
            [
                null,
                'submit'
            ],
            [
                null,
                'reset'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('submit' === en)) {
                var pd_0 = (import0.ɵnov(v, 2).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (import0.ɵnov(v, 2).onReset() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, null, null)),
        import0.ɵdid(8192, null, 0, import1.ɵbf, [], null, null),
        import0.ɵdid(8192, null, 0, import1.NgForm, [
            [
                8,
                null
            ],
            [
                8,
                null
            ]
        ], null, null),
        import0.ɵprd(1024, null, import1.ControlContainer, null, [import1.NgForm]),
        import0.ɵdid(8192, null, 0, import1.NgControlStatusGroup, [import1.ControlContainer], null, null),
        (l()(), import0.ɵted(null, ['\n				'])),
        (l()(), import0.ɵeld(0, null, null, 13, 'div', [[
                'class',
                'form-group'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'label', [[
                'for',
                'sourcej'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['source'])),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵeld(0, null, null, 4, 'select', [
            [
                'class',
                'form-control'
            ],
            [
                'id',
                'sourcej'
            ],
            [
                'name',
                'sourcej'
            ]
        ], [[
                8,
                'value',
                0
            ]
        ], [[
                null,
                'change'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('change' === en)) {
                var pd_0 = (co.onJohnson($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['\n						'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_GraphMenuComponent_6)),
        import0.ɵdid(401408, null, 0, import2.NgForOf, [
            import0.ViewContainerRef,
            import0.TemplateRef,
            import0.IterableDiffers
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵted(null, ['\n					'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_GraphMenuComponent_7)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n				'])),
        (l()(), import0.ɵted(null, ['\n			']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_8 = co.editService.currentGraph.vertices;
        ck(v, 14, 0, currVal_8);
        var currVal_9 = co.editService.warningJ;
        ck(v, 18, 0, currVal_9);
    }, function (ck, v) {
        var currVal_0 = import0.ɵnov(v, 4).ngClassUntouched;
        var currVal_1 = import0.ɵnov(v, 4).ngClassTouched;
        var currVal_2 = import0.ɵnov(v, 4).ngClassPristine;
        var currVal_3 = import0.ɵnov(v, 4).ngClassDirty;
        var currVal_4 = import0.ɵnov(v, 4).ngClassValid;
        var currVal_5 = import0.ɵnov(v, 4).ngClassInvalid;
        var currVal_6 = import0.ɵnov(v, 4).ngClassPending;
        ck(v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_7 = (0 - 1);
        ck(v, 11, 0, currVal_7);
    });
}
function View_GraphMenuComponent_1(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 22, 'div', [], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-default space '
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onKosaraju() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Strong components'])),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'space'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-default'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onShowBellmanFordSelect() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Bellman-Ford'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_GraphMenuComponent_2)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵeld(0, null, null, 7, 'div', [[
                'class',
                'space'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵeld(0, null, null, 1, 'button', [[
                'class',
                'btn btn-default'
            ]
        ], null, [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            var co = v.component;
            if (('click' === en)) {
                var pd_0 = (co.onShowJohnsonSelect() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)),
        (l()(), import0.ɵted(null, ['Johnson\'s algoritm'])),
        (l()(), import0.ɵted(null, ['\n			'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_GraphMenuComponent_5)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n		'])),
        (l()(), import0.ɵted(null, ['\n	']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = co.bellmanFord;
        ck(v, 11, 0, currVal_0);
        var currVal_1 = co.johnson;
        ck(v, 20, 0, currVal_1);
    }, null);
}
export function View_GraphMenuComponent_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 8, 'div', [[
                'class',
                'panel panel-default'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  	'])),
        (l()(), import0.ɵeld(0, null, null, 5, 'div', [[
                'class',
                'panel-body'
            ]
        ], null, null, null, null, null)),
        (l()(), import0.ɵted(null, ['\n  	'])),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵand(8388608, null, null, 1, null, View_GraphMenuComponent_1)),
        import0.ɵdid(8192, null, 0, import2.NgIf, [
            import0.ViewContainerRef,
            import0.TemplateRef
        ], { ngIf: [
                0,
                'ngIf'
            ]
        }, null),
        (l()(), import0.ɵted(null, ['\n	'])),
        (l()(), import0.ɵted(null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_0 = ((co.editService.currentGraph == null) ? null : co.editService.currentGraph.directed);
        ck(v, 6, 0, currVal_0);
    }, null);
}
function View_GraphMenuComponent_Host_0(l) {
    return import0.ɵvid(0, [
        (l()(), import0.ɵeld(0, null, null, 1, 'graph-menu', [], null, null, null, View_GraphMenuComponent_0, RenderType_GraphMenuComponent)),
        import0.ɵdid(57344, null, 0, import3.GraphMenuComponent, [
            import4.GraphService,
            import5.EditService
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
export var GraphMenuComponentNgFactory = import0.ɵccf('graph-menu', import3.GraphMenuComponent, View_GraphMenuComponent_Host_0, {}, {}, []);
