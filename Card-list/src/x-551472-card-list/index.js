import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';
import * as ntca from '@servicenow/now-template-card';


const view = (state, {updateState}) => {
	return (
		<div className="custom-card-container">
		     <div className="card-custom-styles">
			<now-template-card-assist 
				tagline={
					{
						"icon":"tree-view-long-outline",
						"label":"Incident"
					}
				} 
				actions={
					[
						{"id":"share","label":"Copy URL"},
						{"id":"close","label":"Mark Complete"}
					]
				} 
				heading={
					{"label":"my PDF docs are all locked from editing"}
				} 
				content={
					[
						{"label":"Number","value":{"type":"string","value":"INC0000038"}},
						{"label":"State","value":{"type":"string","value":"Closed"}},
						{"label":"Assignmet Group","value":{"type":"string","value":"Service Desk"}},
						{"label":"Assigned To","value":{"type":"string","value":"Luke Wilson"}}
					]
				} 
				contentItemMinWidth="300" 
				footerContent={
					{"label":"Updated","value":"2020-05-08 17:36:44"}
				} 
				configAria={{}}
			>
			</now-template-card-assist>
		     </div>
			 <div className="card-custom-styles">
			<now-template-card-assist 
				tagline={
					{
						"icon":"tree-view-long-outline",
						"label":"Incident"
					}
				} 
				actions={
					[
						{"id":"share","label":"Copy URL"},
						{"id":"close","label":"Mark Complete"}
					]
				} 
				heading={
					{"label":"Hangs when trying to print VISIO document"}
				} 
				content={
					[
						{"label":"Number","value":{"type":"string","value":"INC0000006"}},
						{"label":"State","value":{"type":"string","value":"Closed"}},
						{"label":"Assignmet Group","value":{"type":"string","value":"Software"}},
						{"label":"Assigned To","value":{"type":"string","value":"Howard Johnson"}}
					]
				} 
				contentItemMinWidth="300" 
				footerContent={
					{"label":"Updated","value":"2020-05-01 16:08:05"}
				} 
				configAria={{}}
			>
			</now-template-card-assist>
		     </div>
			 <div className="card-custom-styles">
			<now-template-card-assist 
				tagline={
					{
						"icon":"tree-view-long-outline",
						"label":"Incident"
					}
				} 
				actions={
					[
						{"id":"share","label":"Copy URL"},
						{"id":"close","label":"Mark Complete"}
					]
				} 
				heading={
					{"label":"Printer in my office is out of toner"}
				} 
				content={
					[
						{"label":"Number","value":{"type":"string","value":"INC0000008"}},
						{"label":"State","value":{"type":"string","value":"Closed"}},
						{"label":"Assignmet Group","value":{"type":"string","value":"Hardware"}},
						{"label":"Assigned To","value":{"type":"string","value":"ITIL User"}}
					]	
				} 
				contentItemMinWidth="300" 
				footerContent={
					{"label":"Updated","value":"2020-05-09 16:08:39"}
				} 
				configAria={{}}
			>
			</now-template-card-assist>
		     </div>
			 <div className="card-custom-styles">
			<now-template-card-assist 
				tagline={
					{
						"icon":"tree-view-long-outline",
						"label":"Incident"
					}
				} 
				actions={
					[
						{"id":"share","label":"Copy URL"},
						{"id":"close","label":"Mark Complete"}
					]
				} 
				heading={
					{"label":"Can't read email"}
				} 
				content={
					[
						{"label":"Number","value":{"type":"string","value":"INC0000001"}},
						{"label":"State","value":{"type":"string","value":"Closed"}},
						{"label":"Assignmet Group","value":{"type":"string","value":"Service Desk"}},
						{"label":"Assigned To","value":{"type":"string","value":"Charlie Whithers..."}}
					]
				} 
				contentItemMinWidth="300" 
				footerContent={
					{"label":"Updated","value":"2020-05-01 16:09:51"}
				} 
				configAria={{}}
			>
			</now-template-card-assist>
		     </div>
		</div>
		
	);
};

createCustomElement('x-551472-card-list', {
	renderer: {type: snabbdom},
	view,
	styles
});
