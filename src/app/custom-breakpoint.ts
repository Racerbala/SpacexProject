import {BREAKPOINT} from '@angular/flex-layout';

const PRINT_BREAKPOINTS = [{
  alias: 'sm',
  suffix: 'Sm',
  mediaQuery: 'screen and (max-width: 700px)',
  overlapping: false,
  priority: 1001 // Needed if overriding the default print breakpoint
},
{
  alias: 'md',
  suffix: 'Md',
  mediaQuery: '(min-width: 701px) and (max-width: 1023px)',
  overlapping: false,
  priority: 1001 // Needed if overriding the default print breakpoint
},
{
  alias: 'lg',
  suffix: 'Lg',
  mediaQuery: 'screen and (max-width: 1024px)',
  overlapping: false,
  priority: 1001 // Needed if overriding the default print breakpoint
}];

export const CustomBreakPointsProvider = { 
  provide: BREAKPOINT, 
  useValue: PRINT_BREAKPOINTS,
  multi: true
};


// import { NgModule } from '@angular/core';
// import { FlexLayoutModule } from '@angular/flex-layout';

// import { 
//   DEFAULT_BREAKPOINTS, 
//   BREAKPOINTS, 
//   BreakPoint, 
//   validateSuffixes 
// } from '@angular/flex-layout'

// /**
//  * For mobile and tablet, reset ranges
//  */
// function updateBreakpoints(bp:BreakPoint) {
//   switch(bp.alias) {
//     case 'sm'    : bp.mediaQuery =  '(max-width: 700px)'; break;
//     case 'md'    : bp.mediaQuery =  '(min-width: 701px) and (max-width: 1023px)'; break;
//     case 'lg' : bp.mediaQuery =  '(min-width: 1024px)'; break;
//   }
//   return bp;
// }

// @NgModule({
//   imports : [ FlexLayoutModule ],
//   exports : [ FlexLayoutModule ],
//   providers: [
//     // register a Custom BREAKPOINT Provider
//     {
//       provide: BREAKPOINTS,
//       useFactory : function customizeBreakPoints() {
//         return validateSuffixes(DEFAULT_BREAKPOINTS.map( updateBreakpoints ));
//       }
//     }
//   ]
// })
// export class CustomBreakpointsModule { }