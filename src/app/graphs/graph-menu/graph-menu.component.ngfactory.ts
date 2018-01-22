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
const styles_GraphMenuComponent:any[] = [
  '.space[_ngcontent-%COMP%] { margin-bottom: 15px }',
  'select[_ngcontent-%COMP%] { width: 70px; margin-left: 20px; }',
  'label[_ngcontent-%COMP%] { margin: 5px 0 0 25px; font-weight: normal; }',
  '.warning[_ngcontent-%COMP%] { color: rgb(169,68,66); margin-top: 5px; }'
]
;
export const RenderType_GraphMenuComponent:import0.RendererType2 = import0.ɵcrt({
  encapsulation: 0,
  styles: styles_GraphMenuComponent,
  data: {}
}
);
function View_GraphMenuComponent_3(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'option',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(73728,(null as any),0,import1.NgSelectOption,[
      import0.ElementRef,
      import0.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import0.ɵdid(73728,(null as any),0,import1.ɵq,[
      import0.ElementRef,
      import0.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.index;
    ck(v,1,0,currVal_0);
    const currVal_1:any = v.context.index;
    ck(v,2,0,currVal_1);
  },(ck,v) => {
    const currVal_2:any = v.context.$implicit.name;
    ck(v,3,0,currVal_2);
  });
}
function View_GraphMenuComponent_4(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',[[
        'class',
        'warning'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Negative cycle detected.']))
  ]
  ,(null as any),(null as any));
}
function View_GraphMenuComponent_2(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),20,'form',[[
        'novalidate',
        ''
      ]
    ],[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'submit'
      ]
      ,
      [
        (null as any),
        'reset'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('submit' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,2).onSubmit($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('reset' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,2).onReset()) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import1.ɵbf,([] as any[]),(null as any),(null as any)),
    import0.ɵdid(8192,(null as any),0,import1.NgForm,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(1024,(null as any),import1.ControlContainer,(null as any),[import1.NgForm]),
    import0.ɵdid(8192,(null as any),0,import1.NgControlStatusGroup,[import1.ControlContainer],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n				'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n					'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'sourcebf'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['source'])),
    (l()(),import0.ɵted((null as any),['\n					'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'select',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'id',
        'sourcebf'
      ]
      ,
      [
        'name',
        'sourcebf'
      ]

    ]
      ,[[
        8,
        'value',
        0
      ]
      ],[[
        (null as any),
        'change'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('change' === en)) {
        const pd_0:any = ((<any>co.onBellmanFord($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n						'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_GraphMenuComponent_3)),
    import0.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n					'])),
    (l()(),import0.ɵted((null as any),['\n					'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_GraphMenuComponent_4)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n				'])),
    (l()(),import0.ɵted((null as any),['\n			']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_8:any = co.editService.currentGraph.vertices;
    ck(v,14,0,currVal_8);
    const currVal_9:any = co.editService.warningBF;
    ck(v,18,0,currVal_9);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,4).ngClassUntouched;
    const currVal_1:any = import0.ɵnov(v,4).ngClassTouched;
    const currVal_2:any = import0.ɵnov(v,4).ngClassPristine;
    const currVal_3:any = import0.ɵnov(v,4).ngClassDirty;
    const currVal_4:any = import0.ɵnov(v,4).ngClassValid;
    const currVal_5:any = import0.ɵnov(v,4).ngClassInvalid;
    const currVal_6:any = import0.ɵnov(v,4).ngClassPending;
    ck(v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_7:any = (0 - 1);
    ck(v,11,0,currVal_7);
  });
}
function View_GraphMenuComponent_6(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),3,'option',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import0.ɵdid(73728,(null as any),0,import1.NgSelectOption,[
      import0.ElementRef,
      import0.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    import0.ɵdid(73728,(null as any),0,import1.ɵq,[
      import0.ElementRef,
      import0.Renderer,
      [
        8,
        (null as any)
      ]

    ]
      ,{value: [
        0,
        'value'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),[
      '',
      ''
    ]
    ))
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.index;
    ck(v,1,0,currVal_0);
    const currVal_1:any = v.context.index;
    ck(v,2,0,currVal_1);
  },(ck,v) => {
    const currVal_2:any = v.context.$implicit.name;
    ck(v,3,0,currVal_2);
  });
}
function View_GraphMenuComponent_7(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'p',[[
        'class',
        'warning'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Negative cycle detected.']))
  ]
  ,(null as any),(null as any));
}
function View_GraphMenuComponent_5(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),20,'form',[[
        'novalidate',
        ''
      ]
    ],[
      [
        2,
        'ng-untouched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-touched',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pristine',
        (null as any)
      ]
      ,
      [
        2,
        'ng-dirty',
        (null as any)
      ]
      ,
      [
        2,
        'ng-valid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-invalid',
        (null as any)
      ]
      ,
      [
        2,
        'ng-pending',
        (null as any)
      ]

    ]
    ,[
      [
        (null as any),
        'submit'
      ]
      ,
      [
        (null as any),
        'reset'
      ]

    ]
    ,(v,en,$event) => {
      var ad:boolean = true;
      if (('submit' === en)) {
        const pd_0:any = ((<any>import0.ɵnov(v,2).onSubmit($event)) !== false);
        ad = (pd_0 && ad);
      }
      if (('reset' === en)) {
        const pd_1:any = ((<any>import0.ɵnov(v,2).onReset()) !== false);
        ad = (pd_1 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import0.ɵdid(8192,(null as any),0,import1.ɵbf,([] as any[]),(null as any),(null as any)),
    import0.ɵdid(8192,(null as any),0,import1.NgForm,[
      [
        8,
        (null as any)
      ]
      ,
      [
        8,
        (null as any)
      ]

    ]
    ,(null as any),(null as any)),
    import0.ɵprd(1024,(null as any),import1.ControlContainer,(null as any),[import1.NgForm]),
    import0.ɵdid(8192,(null as any),0,import1.NgControlStatusGroup,[import1.ControlContainer],(null as any),(null as any)),
    (l()(),import0.ɵted((null as any),['\n				'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),13,'div',[[
        'class',
        'form-group'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n					'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'label',[[
        'for',
        'sourcej'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['source'])),
    (l()(),import0.ɵted((null as any),['\n					'])),
    (l()(),import0.ɵeld(0,(null as any),(null as any),4,'select',[
      [
        'class',
        'form-control'
      ]
      ,
      [
        'id',
        'sourcej'
      ]
      ,
      [
        'name',
        'sourcej'
      ]

    ]
      ,[[
        8,
        'value',
        0
      ]
      ],[[
        (null as any),
        'change'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('change' === en)) {
        const pd_0:any = ((<any>co.onJohnson($event.target.value)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n						'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_GraphMenuComponent_6)),
    import0.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import0.ViewContainerRef,
      import0.TemplateRef,
      import0.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n					'])),
    (l()(),import0.ɵted((null as any),['\n					'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_GraphMenuComponent_7)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n				'])),
    (l()(),import0.ɵted((null as any),['\n			']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_8:any = co.editService.currentGraph.vertices;
    ck(v,14,0,currVal_8);
    const currVal_9:any = co.editService.warningJ;
    ck(v,18,0,currVal_9);
  },(ck,v) => {
    const currVal_0:any = import0.ɵnov(v,4).ngClassUntouched;
    const currVal_1:any = import0.ɵnov(v,4).ngClassTouched;
    const currVal_2:any = import0.ɵnov(v,4).ngClassPristine;
    const currVal_3:any = import0.ɵnov(v,4).ngClassDirty;
    const currVal_4:any = import0.ɵnov(v,4).ngClassValid;
    const currVal_5:any = import0.ɵnov(v,4).ngClassInvalid;
    const currVal_6:any = import0.ɵnov(v,4).ngClassPending;
    ck(v,0,0,currVal_0,currVal_1,currVal_2,currVal_3,currVal_4,currVal_5,currVal_6);
    const currVal_7:any = (0 - 1);
    ck(v,11,0,currVal_7);
  });
}
function View_GraphMenuComponent_1(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),22,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n		'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-default space '
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onKosaraju()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Strong components'])),
    (l()(),import0.ɵted((null as any),['\n		'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'space'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n			'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-default'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onShowBellmanFordSelect()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Bellman-Ford'])),
    (l()(),import0.ɵted((null as any),['\n			'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_GraphMenuComponent_2)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n		'])),
    (l()(),import0.ɵted((null as any),['\n		'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'space'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n			'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),1,'button',[[
        'class',
        'btn btn-default'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.onShowJohnsonSelect()) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['Johnson\'s algoritm'])),
    (l()(),import0.ɵted((null as any),['\n			'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_GraphMenuComponent_5)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n		'])),
    (l()(),import0.ɵted((null as any),['\n	']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.bellmanFord;
    ck(v,11,0,currVal_0);
    const currVal_1:any = co.johnson;
    ck(v,20,0,currVal_1);
  },(null as any));
}
export function View_GraphMenuComponent_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
      (l()(),import0.ɵeld(0,(null as any),(null as any),8,'div',[[
        'class',
        'panel panel-default'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  	'])),
      (l()(),import0.ɵeld(0,(null as any),(null as any),5,'div',[[
        'class',
        'panel-body'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import0.ɵted((null as any),['\n  	'])),
    (l()(),import0.ɵted((null as any),['\n	'])),
    (l()(),import0.ɵand(8388608,(null as any),(null as any),1,(null as any),View_GraphMenuComponent_1)),
    import0.ɵdid(8192,(null as any),0,import2.NgIf,[
      import0.ViewContainerRef,
      import0.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import0.ɵted((null as any),['\n	'])),
    (l()(),import0.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import3.GraphMenuComponent = v.component;
    const currVal_0:any = ((co.editService.currentGraph == null)? (null as any): co.editService.currentGraph.directed);
    ck(v,6,0,currVal_0);
  },(null as any));
}
function View_GraphMenuComponent_Host_0(l:any):import0.ɵViewDefinition {
  return import0.ɵvid(0,[
    (l()(),import0.ɵeld(0,(null as any),(null as any),1,'graph-menu',([] as any[]),(null as any),(null as any),(null as any),View_GraphMenuComponent_0,RenderType_GraphMenuComponent)),
    import0.ɵdid(57344,(null as any),0,import3.GraphMenuComponent,[
      import4.GraphService,
      import5.EditService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const GraphMenuComponentNgFactory:import0.ComponentFactory<import3.GraphMenuComponent> = import0.ɵccf('graph-menu',import3.GraphMenuComponent,View_GraphMenuComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvUGF3ZcWCL0Rlc2t0b3AvcHJvZ3JhbW93YW5pZS9ncmFwaHMtYXBwL3NyYy9hcHAvZ3JhcGhzL2dyYXBoLW1lbnUvZ3JhcGgtbWVudS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvUGF3ZcWCL0Rlc2t0b3AvcHJvZ3JhbW93YW5pZS9ncmFwaHMtYXBwL3NyYy9hcHAvZ3JhcGhzL2dyYXBoLW1lbnUvZ3JhcGgtbWVudS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9QYXdlxYIvRGVza3RvcC9wcm9ncmFtb3dhbmllL2dyYXBocy1hcHAvc3JjL2FwcC9ncmFwaHMvZ3JhcGgtbWVudS9ncmFwaC1tZW51LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvUGF3ZcWCL0Rlc2t0b3AvcHJvZ3JhbW93YW5pZS9ncmFwaHMtYXBwL3NyYy9hcHAvZ3JhcGhzL2dyYXBoLW1lbnUvZ3JhcGgtbWVudS5jb21wb25lbnQudHMuR3JhcGhNZW51Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICBcdDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgXHQ8IS0tXHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25FZGl0KClcIj5FZGl0IGdyYXBoPC9idXR0b24+XHJcblx0XHQ8Z3JhcGgtZWRpdCAqbmdJZj1cImVkaXRcIiA+PC9ncmFwaC1lZGl0PlxyXG5cdFx0PGdyYXBoLW1hbmlwdWxhdGUgKm5nSWY9XCIhZWRpdFwiPjwvZ3JhcGgtbWFuaXB1bGF0ZT4tLT5cclxuXHQ8ZGl2ICpuZ0lmPVwiZWRpdFNlcnZpY2UuY3VycmVudEdyYXBoPy5kaXJlY3RlZFwiPlxyXG5cdFx0PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBzcGFjZSBcIiAoY2xpY2spPVwib25Lb3NhcmFqdSgpXCI+U3Ryb25nIGNvbXBvbmVudHM8L2J1dHRvbj5cclxuXHRcdDxkaXYgY2xhc3M9XCJzcGFjZVwiPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uU2hvd0JlbGxtYW5Gb3JkU2VsZWN0KClcIj5CZWxsbWFuLUZvcmQ8L2J1dHRvbj5cclxuXHRcdFx0PGZvcm0gKm5nSWY9XCJiZWxsbWFuRm9yZFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGFiZWwgZm9yPVwic291cmNlYmZcIj5zb3VyY2U8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzb3VyY2ViZlwiIGlkPVwic291cmNlYmZcIiBbdmFsdWVdPVwiLTFcIiAoY2hhbmdlKT1cIm9uQmVsbG1hbkZvcmQoJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiAqbmdGb3I9XCJsZXQgdmVydGV4IG9mIGVkaXRTZXJ2aWNlLmN1cnJlbnRHcmFwaC52ZXJ0aWNlczsgbGV0IGkgPSBpbmRleFwiIFt2YWx1ZV09XCJpXCI+e3t2ZXJ0ZXgubmFtZX19PC9vcHRpb24+XHJcblx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdDxwICpuZ0lmPVwiZWRpdFNlcnZpY2Uud2FybmluZ0JGXCIgY2xhc3M9XCJ3YXJuaW5nXCI+TmVnYXRpdmUgY3ljbGUgZGV0ZWN0ZWQuPC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Zvcm0+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgY2xhc3M9XCJzcGFjZVwiPlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgKGNsaWNrKT1cIm9uU2hvd0pvaG5zb25TZWxlY3QoKVwiPkpvaG5zb24ncyBhbGdvcml0bTwvYnV0dG9uPlxyXG5cdFx0XHQ8Zm9ybSAqbmdJZj1cImpvaG5zb25cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGZvcj1cInNvdXJjZWpcIj5zb3VyY2U8L2xhYmVsPlxyXG5cdFx0XHRcdFx0PHNlbGVjdCBjbGFzcz1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJzb3VyY2VqXCIgaWQ9XCJzb3VyY2VqXCIgW3ZhbHVlXT1cIi0xXCIgKGNoYW5nZSk9XCJvbkpvaG5zb24oJGV2ZW50LnRhcmdldC52YWx1ZSlcIj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiAqbmdGb3I9XCJsZXQgdmVydGV4IG9mIGVkaXRTZXJ2aWNlLmN1cnJlbnRHcmFwaC52ZXJ0aWNlczsgbGV0IGkgPSBpbmRleFwiIFt2YWx1ZV09XCJpXCI+e3t2ZXJ0ZXgubmFtZX19PC9vcHRpb24+XHJcblx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdDxwICpuZ0lmPVwiZWRpdFNlcnZpY2Uud2FybmluZ0pcIiBjbGFzcz1cIndhcm5pbmdcIj5OZWdhdGl2ZSBjeWNsZSBkZXRlY3RlZC48L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZm9ybT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj4iLCI8Z3JhcGgtbWVudT48L2dyYXBoLW1lbnU+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNhTTtnQkFBQTs7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEY7TUFBQTtNQUFBO0lBQUE7SUFBQTs7O0lBQVo7SUFBaEYsU0FBZ0YsU0FBaEY7SUFBZ0Y7SUFBaEYsU0FBZ0YsU0FBaEY7O0lBQTRGO0lBQUE7Ozs7O01BRTdGO1FBQUE7UUFBQTtN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