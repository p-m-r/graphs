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
const styles_AdjacencyListComponent:any[] = [import0.styles];
export const RenderType_AdjacencyListComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_AdjacencyListComponent,
  data: {}
}
);
function View_AdjacencyListComponent_2(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'weight'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n			(weight)\n		']))
  ]
  ,(null as any),(null as any));
}
function View_AdjacencyListComponent_6(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'edge-weight'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '\n								(',
      ')\n							'
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = (<any>(<any>v.parent).parent).context.$implicit.edgeWeight;
    ck(v,1,0,currVal_0);
  });
}
function View_AdjacencyListComponent_5(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'span',[[
        'class',
        'relative'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n							→\n							'])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AdjacencyListComponent_6)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n						']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = co.graph.weighted;
    ck(v,3,0,currVal_0);
  },(null as any));
}
function View_AdjacencyListComponent_7(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n							↴\n						']))
  ]
  ,(null as any),(null as any));
}
function View_AdjacencyListComponent_4(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),10,'li',[[
        'class',
        'neighbor'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n						'])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AdjacencyListComponent_5)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n						'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'neighbor-name'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '\n							',
      '\n						'
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n						'])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AdjacencyListComponent_7)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n					']))
  ]
  ,(ck,v) => {
    const currVal_0:any = (v.context.index < ((<any>v.parent).context.$implicit.neighbors.length - 0));
    ck(v,3,0,currVal_0);
    const currVal_2:any = (v.context.index == ((<any>v.parent).context.$implicit.neighbors.length - 1));
    ck(v,9,0,currVal_2);
  },(ck,v) => {
    const currVal_1:any = v.context.$implicit.node.name;
    ck(v,6,0,currVal_1);
  });
}
function View_AdjacencyListComponent_3(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),10,'li',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n				'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'span',[[
        'class',
        'vertex-name'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ':'
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n				'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),4,'ul',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n					'])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AdjacencyListComponent_4)),
    import1.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n				'])),
    (l()(),import1.ɵted((null as any),['\n			']))
  ]
  ,(ck,v) => {
    const currVal_1:any = v.context.$implicit.neighbors;
    ck(v,8,0,currVal_1);
  },(ck,v) => {
    const currVal_0:any = v.context.$implicit.name;
    ck(v,3,0,currVal_0);
  });
}
function View_AdjacencyListComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),24,'figure',[[
        'class',
        'list-container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n	'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),12,'figcaption',[[
        'class',
        'caption'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n		'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'strong',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['vertex: '])),
    (l()(),import1.ɵted((null as any),['\n		'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),3,'span',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import2.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import1.ɵpod(['arrow']),
    (l()(),import1.ɵted((null as any),['→'])),
    (l()(),import1.ɵted((null as any),[' \n		'])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AdjacencyListComponent_2)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n		neighbor\n	'])),
    (l()(),import1.ɵted((null as any),['\n	'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),7,'div',[[
        'class',
        'inner-container'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n		'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'ul',[[
        'class',
        'adjacency-list'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n			'])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AdjacencyListComponent_3)),
    import1.ɵdid(401408,(null as any),0,import2.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n		'])),
    (l()(),import1.ɵted((null as any),['\n	'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:any = v.component;
    const currVal_0:any = ck(v,9,0,co.graph.weighted);
    ck(v,8,0,currVal_0);
    const currVal_1:any = co.graph.weighted;
    ck(v,13,0,currVal_1);
    const currVal_2:any = co.graph.vertices;
    ck(v,21,0,currVal_2);
  },(null as any));
}
export function View_AdjacencyListComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_AdjacencyListComponent_1)),
    import1.ɵdid(8192,(null as any),0,import2.NgIf,[
      import1.ViewContainerRef,
      import1.TemplateRef
    ]
      ,{ngIf: [
        0,
        'ngIf'
      ]
    },(null as any))
  ]
  ,(ck,v) => {
    var co:import3.AdjacencyListComponent = v.component;
    const currVal_0:any = co.graph;
    ck(v,1,0,currVal_0);
  },(null as any));
}
function View_AdjacencyListComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'adjacency-list',([] as any[]),(null as any),(null as any),(null as any),View_AdjacencyListComponent_0,RenderType_AdjacencyListComponent)),
    import1.ɵdid(57344,(null as any),0,import3.AdjacencyListComponent,[import4.EditService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const AdjacencyListComponentNgFactory:import1.ComponentFactory<import3.AdjacencyListComponent> = import1.ɵccf('adjacency-list',import3.AdjacencyListComponent,View_AdjacencyListComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvUGF3ZcWCL0Rlc2t0b3AvcHJvZ3JhbW93YW5pZS9ncmFwaHMtYXBwL3NyYy9hcHAvZGlzcGxheS9hZGphY2VuY3ktbGlzdC9hZGphY2VuY3ktbGlzdC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvUGF3ZcWCL0Rlc2t0b3AvcHJvZ3JhbW93YW5pZS9ncmFwaHMtYXBwL3NyYy9hcHAvZGlzcGxheS9hZGphY2VuY3ktbGlzdC9hZGphY2VuY3ktbGlzdC5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy9QYXdlxYIvRGVza3RvcC9wcm9ncmFtb3dhbmllL2dyYXBocy1hcHAvc3JjL2FwcC9kaXNwbGF5L2FkamFjZW5jeS1saXN0L2FkamFjZW5jeS1saXN0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvUGF3ZcWCL0Rlc2t0b3AvcHJvZ3JhbW93YW5pZS9ncmFwaHMtYXBwL3NyYy9hcHAvZGlzcGxheS9hZGphY2VuY3ktbGlzdC9hZGphY2VuY3ktbGlzdC5jb21wb25lbnQudHMuQWRqYWNlbmN5TGlzdENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxmaWd1cmUgY2xhc3M9XCJsaXN0LWNvbnRhaW5lclwiICpuZ0lmPVwiZ3JhcGhcIj5cclxuXHQ8ZmlnY2FwdGlvbiBjbGFzcz1cImNhcHRpb25cIj5cclxuXHRcdDxzdHJvbmc+dmVydGV4OiA8L3N0cm9uZz5cclxuXHRcdDxzcGFuIFtuZ0NsYXNzXT1cInsnYXJyb3cnOiBncmFwaC53ZWlnaHRlZCB9XCI+JnJhcnI7PC9zcGFuPiBcclxuXHRcdDxzcGFuICpuZ0lmPVwiZ3JhcGgud2VpZ2h0ZWRcIiBjbGFzcz1cIndlaWdodFwiPlxyXG5cdFx0XHQod2VpZ2h0KVxyXG5cdFx0PC9zcGFuPlxyXG5cdFx0bmVpZ2hib3JcclxuXHQ8L2ZpZ2NhcHRpb24+XHJcblx0PGRpdiBjbGFzcz1cImlubmVyLWNvbnRhaW5lclwiPlxyXG5cdFx0PHVsIGNsYXNzPVwiYWRqYWNlbmN5LWxpc3RcIj5cclxuXHRcdFx0PGxpICpuZ0Zvcj1cImxldCB2ZXJ0ZXggb2YgZ3JhcGgudmVydGljZXNcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInZlcnRleC1uYW1lXCI+e3t2ZXJ0ZXgubmFtZX19Ojwvc3Bhbj5cclxuXHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHQ8bGkgKm5nRm9yPVwibGV0IG5laWdoYm9yIG9mIHZlcnRleC5uZWlnaGJvcnM7IGxldCBpID0gaW5kZXhcIiBjbGFzcz1cIm5laWdoYm9yXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuICpuZ0lmPVwiaSA8IHZlcnRleC5uZWlnaGJvcnMubGVuZ3RoIC0gMFwiIGNsYXNzPVwicmVsYXRpdmVcIj5cclxuXHRcdFx0XHRcdFx0XHQmcmFycjtcclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiAqbmdJZj1cImdyYXBoLndlaWdodGVkXCIgY2xhc3M9XCJlZGdlLXdlaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0KHt7bmVpZ2hib3IuZWRnZVdlaWdodH19KVxyXG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cIm5laWdoYm9yLW5hbWVcIj5cclxuXHRcdFx0XHRcdFx0XHR7e25laWdoYm9yLm5vZGUubmFtZX19XHJcblx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PHNwYW4gKm5nSWY9XCJpID09IHZlcnRleC5uZWlnaGJvcnMubGVuZ3RoIC0gMVwiPlxyXG5cdFx0XHRcdFx0XHRcdCYjODYyODtcclxuXHRcdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2xpPlxyXG5cdFx0PC91bD5cclxuXHQ8L2Rpdj5cclxuPC9maWd1cmU+IiwiPGFkamFjZW5jeS1saXN0PjwvYWRqYWNlbmN5LWxpc3Q+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0lFO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEM7Ozs7OztNQWF2QztRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlEO01BQUE7TUFBQTtJQUFBO0lBQUE7OztJQUFBO0lBQUE7Ozs7O01BRmxEO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBK0Q7SUFFOUQ7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUVPOzs7O0lBRkQ7SUFBTixTQUFNLFNBQU47Ozs7O0lBT0Q7SUFBK0M7Ozs7OztNQVZoRDtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQThFO0lBQzdFO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFLTztNQUNQO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEI7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUVyQjtJQUNQO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFFTzs7O0lBWEQ7SUFBTixTQUFNLFNBQU47SUFTTTtJQUFOLFNBQU0sU0FBTjs7SUFINEI7SUFBQTs7Ozs7SUFWL0I7SUFBMEM7TUFDekM7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEwQjtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQXVCO0lBQ2pEO0lBQUk7SUFDSDtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQWFLO0lBQ0Q7OztJQWRBO0lBQUosU0FBSSxTQUFKOztJQUZ5QjtJQUFBOzs7OztNQVo5QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTZDO01BQzVDO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEI7SUFDM0I7SUFBUTtJQUFpQjtJQUN6QjtnQkFBQTs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQU07SUFBdUM7SUFBYTtJQUMxRDtnQkFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBRU87SUFFSztNQUNiO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNkI7TUFDNUI7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEyQjtJQUMxQjtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQWtCSztJQUNEO0lBQ0E7Ozs7SUE1QkM7SUFBTixTQUFNLFNBQU47SUFDTTtJQUFOLFVBQU0sU0FBTjtJQU9LO0lBQUosVUFBSSxTQUFKOzs7OztJQVhIO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Ozs7SUFBK0I7SUFBL0IsU0FBK0IsU0FBL0I7Ozs7O0lDQUE7Z0JBQUE7OztJQUFBOzs7In0=
