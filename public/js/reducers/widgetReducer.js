const React = require('react');
const WidgetList = {
   widget1: {
      title: "stuff",
      kind: "graphjs",
      symb: "AMZN",
      content: {
         chartid: "AMZN_HIST",
         data: null,
         graphType: 'area',
         dynamic: true
      }
   },
   widget2: {
      title: "鳳凰傳奇",
      kind: "table",
      content: {
         title: "鳳凰傳奇",
      }
   },
   widget3: {
      title: "stuff",
      kind: "graphjs",
      symb: "SNE",
      content: {
         chartid: "SNE_HIST",
         data: null,
         graphType: 'column',
         dynamic: true


      }
   },
   widget4: {
      title: "東西",
      kind: "progress",
      content: {
         title: "東西",
      }
   }
}
const innitialState = {
   rowTopStyle: {
      height: "50%"
   },
   rowBtmStyle: {
      height: "50%"
   },
   rowTop: {
      comps: []
   },
   rowBtm: {
      comps: []
   },
   needsUpdate: {},
   draggedWidget: null,
   overWidget: null,
   widget1: {
      clType: "col-xs-6 widget-box",
      colType: 6,
      style: {},
      holdType: "FullWidget",
      shown: true,
      data: WidgetList.widget1,


   },
   widget2: {
      clType: "col-xs-6 widget-box",
      colType: 6,
      style: {},
      shown: true,
      holdType: "FullWidget",
      data: WidgetList.widget2,


   },
   widget3: {
      clType: "col-xs-6 widget-box",
      colType: 6,
      style: {},
      shown: true,
      holdType: "FullWidget",
      data: WidgetList.widget3,



   },
   widget4: {
      clType: "col-xs-6 widget-box",
      colType: 6,
      style: {},
      shown: true,
      holdType: "FullWidget",
      data: WidgetList.widget4,

   }

}



export default function reducer(state = innitialState, action) {

   switch (action.type) {

      case "WIDGET_DROP":
         {
            return action.payload
            break;
         }
      case "WIDGET_DRAGGED":
         {
            return {...state,
               draggedWidget: action.payload
            }
            break;
         }
      case "GOT_MESSAGE":
         {
            return {...state,
               needsUpdate: action.payload
            }
            break;
         }
      case "GOT_DATA":
         {
            return action.payload
            break;
         }

   }

   return state
}